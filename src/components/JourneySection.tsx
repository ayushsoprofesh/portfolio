"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CARDS = [
  {
    id: 1,
    brief: "UX Designer | Oracle Pricing | 8 Release Cycles",
    details: "Redesigned the legacy ADF UI to the modern Redwood Design System across 8 release cycles (25A to 26D). Managed feature parity and design enhancements for products including Price Lists, Discount Lists, Currency Conversion, Shipping Charges, and Rate Plans. Handled system scale for Price Lists containing over 1 million items with deep item/charge combinations. Navigated cross-team dependencies (Subscriptions, CPQ, FOM) to align UX across products, and successfully pitched new features like templatized mass actions. Additionally, co-led the 2025 UX intern orientation and organized senior membership events and outings."
  },
  {
    id: 2,
    brief: "UX Design Intern | Oracle CX (Unity CDP)",
    details: "Assigned a zero-to-one foundation project to design a customer segment analytics dashboard for Oracle's Customer Data Platform (Unity app). The project was highly successful, allowing me to become the only intern out of the entire cohort to receive a full-time return offer."
  },
  {
    id: 3,
    brief: "Organizing Leader & Web Design Head | Alcheringa Cultural Festival",
    details: "Co-led a team of 600 individuals in organizing North East India's biggest cultural festival. Delivered 13 web portals and websites along with 1 mobile application, working closely with developers in the development cycle. Took on the additional workload of delivering 22 life-sized event props in a tight duration of 15 days, and interviewed and selected the next cohort of Alcheringa heads."
  }
];

export default function JourneySection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Auto-expand the first one by default for better UX, or keep it null.
  // The brief says "By default, or when inactive, cards are in a Brief State (compact height)."

  return (
    <section className="journey-section">
      <div className="journey-container">
        <h2 className="journey-title">The Journey</h2>
        
        <div className="accordion-container">
          {CARDS.map((card) => {
            const isExpanded = expandedId === card.id;

            return (
              <div
                key={card.id}
                className={`accordion-card ${isExpanded ? "expanded" : ""}`}
                onClick={() => setExpandedId(isExpanded ? null : card.id)}
              >
                <div className="card-brief">
                  {card.brief}
                </div>
                
                <div className="card-details-wrapper">
                  <div className="card-details">
                    {card.details}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
