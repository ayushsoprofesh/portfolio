"use client";

import { motion, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "LIAM THOMPSON",
    designation: "UX INTERN - CX MARKETING, ORACLE",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    id: 2,
    name: "SARAH JENKINS",
    designation: "PRODUCT MANAGER, ORACLE",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    id: 3,
    name: "MARCUS CHEN",
    designation: "SENIOR ENGINEER, ORACLE",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    id: 4,
    name: "ELENA RODRIGUEZ",
    designation: "DESIGN DIRECTOR, ALCHERINGA",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
];

/**
 * A single hanging card with:
 * - Entrance: slides in from right along the wire, then wiggles/settles
 * - Hover: spring-based tilt from top-center pivot (the hole)
 * - Wire threading: CSS ::before creates left wire overlay above card
 */
function HangingCard({
  data,
  index,
  isActive,
  isDragging,
}: {
  data: (typeof TESTIMONIALS)[0];
  index: number;
  isActive: boolean;
  isDragging: boolean;
}) {
  const rotateZ = useSpring(0, { stiffness: 180, damping: 8, mass: 0.8 });
  const cardRef = useRef<HTMLDivElement>(null);
  const hasWiggled = useRef(false);

  // Entrance wiggle: after card slides in, kick the spring for pendulum oscillation
  useEffect(() => {
    if (isActive && !hasWiggled.current) {
      const entranceDelay = (0.35 + index * 0.18) * 1000;
      const settleTime = 600;
      const timer = setTimeout(() => {
        // Alternate wiggle direction for natural feel
        rotateZ.jump(index % 2 === 0 ? 8 : -8);
        rotateZ.set(0); // spring oscillates back to 0
        hasWiggled.current = true;
      }, entranceDelay + settleTime);
      return () => clearTimeout(timer);
    }
    if (!isActive) {
      hasWiggled.current = false;
    }
  }, [isActive, index, rotateZ]);

  // Hover: mouse X relative to card center drives tilt
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isActive || isDragging) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const offset = (e.clientX - centerX) / (rect.width / 2);
    rotateZ.set(offset * 5); // max ±5 degrees
  };

  const handleMouseLeave = () => {
    rotateZ.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="testimonial-card glass-panel"
      style={{
        transformOrigin: "top center",
        rotateZ,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ x: 800, opacity: 0 }}
      animate={
        isActive ? { x: 0, opacity: 1 } : { x: 800, opacity: 0 }
      }
      transition={{
        x: {
          delay: 0.35 + index * 0.18,
          type: "spring",
          stiffness: 60,
          damping: 15,
        },
        opacity: {
          delay: 0.35 + index * 0.18,
          duration: 0.3,
        },
      }}
    >
      {/* The "hole" at top center — wire passes through here */}
      <div className="card-hole-wrapper">
        <div className="card-hole" />
      </div>

      {/* Card content — reuses Section 2 typography classes */}
      <div className="testimonial-content">
        <h3 className="card-company">{data.name}</h3>
        <p className="card-tenure">{data.designation}</p>
        <div className="card-body">{data.quote}</div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection({
  isActive,
}: {
  isActive: boolean;
}) {
  const revealEase = [0.25, 1, 0.5, 1] as const;
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragLeft, setDragLeft] = useState(-300);
  const [isDragging, setIsDragging] = useState(false);

  // Measure overflow for drag constraints
  useEffect(() => {
    const measure = () => {
      const el = carouselRef.current;
      if (el && el.parentElement) {
        // Because cards have entrance animations (x: 800), el.scrollWidth will be 
        // artificially stretched while animating. 
        // We find the true resting width by measuring the children's offsetLeft.
        const cards = el.querySelectorAll('.testimonial-card');
        let contentWidth = el.scrollWidth; // fallback
        
        if (cards.length > 0) {
          let maxRight = 0;
          cards.forEach((card) => {
            const htmlCard = card as HTMLElement;
            const rightEdge = htmlCard.offsetLeft + htmlCard.offsetWidth;
            if (rightEdge > maxRight) maxRight = rightEdge;
          });
          // Include any padding-right on the track if you want it to pad out
          contentWidth = maxRight;
        }

        // Determine the horizontal starting position of the carousel track
        const parentLeft = el.parentElement.getBoundingClientRect().left;
        const totalWidth = el.scrollWidth;
        const viewportWidth = window.innerWidth;
        
        // Overflow is how much the right edge extends past the viewport
        const overflow = (parentLeft + totalWidth) - viewportWidth;
        if (overflow > 0) {
          setDragLeft(-overflow);
        } else {
          setDragLeft(0);
        }
      }
    };
    const timer = setTimeout(measure, 200);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section className="testimonials-section">
      <motion.div
        className="testimonials-container"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Section title */}
        <motion.h2
          className="testimonials-title"
          initial={{ opacity: 0, x: 50 }}
          animate={
            isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
          }
          transition={{
            duration: 0.8,
            ease: revealEase,
            delay: isActive ? 0.15 : 0,
          }}
        >
          Testimonials
        </motion.h2>

        {/* Carousel area */}
        <div className="testimonials-carousel-wrapper">
          <motion.div
            // style={{ border: "1px solid red" }}
            ref={carouselRef}
            className="testimonials-carousel"
            drag="x"
            dragConstraints={{ left: dragLeft, right: 0 }}
            dragElastic={0.08}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}

            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setTimeout(() => setIsDragging(false), 510)}
          >
            {/* Wire line — inside carousel so it moves with drag */}
            <div className="wire-line" />

            {TESTIMONIALS.map((t, i) => (
              <HangingCard
                key={t.id}
                data={t}
                index={i}
                isActive={isActive}
                isDragging={isDragging}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
