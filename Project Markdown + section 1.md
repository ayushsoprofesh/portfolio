Act as an Expert UI/UX Engineer and Frontend Developer. We are going to build a dark-mode UX Designer Portfolio landing page section by section. 

For this first step, establish the global styles and build ONLY Section 1 (The Hero). Do NOT build any other sections yet.

# Global Rules
*   **Theme:** Dark Mode default. Sleek, cinematic, and retro-futuristic. The aesthetic is inspired by The Matrix (classic CRT terminals, digital system architecture, and data grids)—but strictly from a "Design Architect" perspective, avoiding any "hacker/coder" tropes. The vibe should feel structured, premium, and nostalgic.
*   **Typography:** Import `DotGothic16` (Google Fonts) for the Hero text to give that classic terminal feel, and a clean, premium sans-serif (Inter, SF Pro, or Roboto) for all standard body text to keep it looking like a modern design portfolio.
*   **Colors:** Deep black backgrounds, crisp white/light gray text for high readability, and a classic CRT neon green (`#39FF14`) strictly for specific accents and hero text.
*   **Navigation:** Do NOT include any top or side navigation bars.

# Build Section 1: The Hero (Matrix-Inspired CRT Theme)
*   **Layout:** `min-h-screen` (100vh) using absolute/relative layering.
*   **Bottom Layer:** A full-width/height background image of a wall of thick, retro CRT monitor bezels (`background-size: cover`, `background-position: center`). Use a placeholder image for now.
*   **Top Layer (Foreground):** A Flex or Grid container perfectly centered in the viewport, holding two distinct screen-like `div` elements side-by-side with a gap. Both should have black backgrounds and slightly rounded corners to look like they are digital displays sitting inside the CRT monitors.
*   **Left Screen (Text):** 
    *   Must use the `DotGothic16` font in neon green with a subtle text-shadow (glowing CRT effect).
    *   Text content: "Hi. \n I'm Ayush. \n A UX designer who turns heavy enterprise data into simple, scalable products. I recently spent over a year at Oracle modernizing complex ERP systems."
    *   Ensure the line-height and padding make it look like a clean, designed system readout.
*   **Right Screen (Media):** An image or div placeholder for a profile picture. Apply a CSS filter (`sepia`, `hue-rotate`, `saturate`) or a green color overlay to give the photo a monochrome, retro-digital tint.

Great. Now, directly below the Hero section, build Section 2: The Journey. Do not alter the Hero section.

# Section 2: The Journey (Layout & Animation Specs)
*   **Layout:** A standard dark-mode section container with a clean `H2` section title ("The Journey"). Use the standard sans-serif body font, NOT the dot-gothic font.
*   **The Component:** Create a list of 3 wide, horizontal cards stacked vertically (`flex-direction: column`). 
*   **The Interaction (Accordion/Flex-Grow):** 
    *   Implement a smooth, interactive accordion state. 
    *   By default, or when inactive, cards are in a "Brief State" (compact height). 
    *   When a user clicks a card, it transitions to an "Expanded State". 
    *   **The Animation:** Use smooth CSS transitions (`transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1)`). The clicked card must expand to reveal the detailed text, effectively taking up the majority of the section's space, while the other two cards smoothly shrink/collapse back into their "Brief State". 
    *   **Content Fade:** The detailed text should fade in (`opacity: 0` to `opacity: 1`) after the card starts expanding.

# Content (Source of Truth)
Populate the 3 cards with the exact text below.

**Card 1: Oracle Full-Time**
*   **Brief State (Always visible):** UX Designer | Oracle Pricing | 8 Release Cycles
*   **Expanded State (Revealed on click):** Redesigned the legacy ADF UI to the modern Redwood Design System across 8 release cycles (25A to 26D). Managed feature parity and design enhancements for products including Price Lists, Discount Lists, Currency Conversion, Shipping Charges, and Rate Plans. Handled system scale for Price Lists containing over 1 million items with deep item/charge combinations. Navigated cross-team dependencies (Subscriptions, CPQ, FOM) to align UX across products, and successfully pitched new features like templatized mass actions. Additionally, co-led the 2025 UX intern orientation and organized senior membership events and outings.

**Card 2: Oracle Intern**
*   **Brief State (Always visible):** UX Design Intern | Oracle CX (Unity CDP)
*   **Expanded State (Revealed on click):** Assigned a zero-to-one foundation project to design a customer segment analytics dashboard for Oracle's Customer Data Platform (Unity app). The project was highly successful, allowing me to become the only intern out of the entire cohort to receive a full-time return offer.

**Card 3: Alcheringa**
*   **Brief State (Always visible):** Organizing Leader & Web Design Head | Alcheringa Cultural Festival
*   **Expanded State (Revealed on click):** Co-led a team of 600 individuals in organizing North East India's biggest cultural festival. Delivered 13 web portals and websites along with 1 mobile application, working closely with developers in the development cycle. Took on the additional workload of delivering 22 life-sized event props in a tight duration of 15 days, and interviewed and selected the next cohort of Alcheringa heads.

# Global Scroll Transition (Hero to Section 2)
*   **The Interaction:** As the user scrolls down the page, implement a horizontal scroll effect (or a simulated horizontal sequence using tools like GSAP ScrollTrigger or Framer Motion).
*   **Hero Exit:** The Hero section (Section 1) must translate/move to the left. As it moves left, it should smoothly blur out and fade to black (`filter: blur() brightness(0)`).
*   **Section 2 Entrance:** Once the Hero is cleared, Section 2 comes into view.
    *   The `H2` header ("Experience") fades in and translates from slightly to the right (`translateX`).
    *   The 3 Work Experience cards follow immediately, appearing with a staggered fade-in and slide-in from the right (Card 1, then Card 2, then Card 3).

# Section 2: Experience (Layout & UI)
*   **Layout:** A standard dark-mode section container.
*   **The Component:** Create a list or grid of 3 simple, static cards. DO NOT use accordions or brief/expanded states. All text is visible by default.
*   **Card UI:** Dark glassmorphism or deep charcoal cards with subtle borders. 
*   **Hover State:** Add a subtle hover animation to each card (e.g., a slight upward translation `translateY(-4px)`, a very soft border glow, or a slight background lightening). 

# Content (Source of Truth from Resume)
Populate the 3 cards with the exact text and dates below. Use a clean typographic hierarchy (Company Name prominent, Role/Dates slightly muted).

**Card 1**
*   **Header:** Oracle
*   **Role & Dates:** UX designer - SCM | Jul 2024 - Present | Bangalore, India
*   **Body:** Designed solutions for Oracle Fusion Pricing, the central pricing and charge storage hub for Oracle Fusion applications. Worked on 4 major and 5 minor products. Solved massive data handling bottlenecks by designing scalable batch job workflows, reducing manual user effort while defining and manipulating prices. Championed rapid design cycles in a fast paced environment, collaborating in real time with cross functional PMs and engineers. Standardized UX patterns across multiple pricing applications, ensuring strict alignment with Oracle’s design system.

**Card 2**
*   **Header:** Oracle
*   **Role & Dates:** UX Intern - CX Marketing | May 2023 - Jul 2023 | Bangalore, India
*   **Body:** Delivered a foundational UX project for Oracle Unity (Customer Database Platform), taking ambiguous requirements and designing an intuitive customer segment analytics dashboard from scratch. Designed data visualizations layouts and user flows that successfully defined the foundational product direction for the CDP's data analytics vertical. Recognized for speed and impactful execution, becoming the sole intern in the cohort to receive a full time return offer based on the project's success.

**Card 3**
*   **Header:** Alcheringa IIT Guwahati
*   **Role & Dates:** Web Design Head | May 2022 - May 2023 | Guwahati, India
*   **Body:** Co-led a 600 person team for North East India's largest cultural festival, directing the design and delivery of 13 web portals and 1 mobile app alongside the development team. Led the planning and execution of 22 life sized props for on ground decor in a record 18 days. Demonstrated rapid cross functional execution by delivering large scale projects on tight deadlines and appointing the incoming leadership cohort.

Perfect. Now build Section 3: Chosen Works. 

# Global Scroll Transition (Section 2 to Section 3)
*   **The Exit:** As the user scrolls down, Section 2 must translate to the left, smoothly blurring out and fading to black (`filter: blur() brightness(0)`).
*   **The Entrance:** Section 3 then appears and locks into the viewport.

# Section 3: Architecture & Layout
*   **The Scroll Logic:** Make the overall Section 3 container very tall (e.g., `height: 500vh`) so the user can scroll through it. 
*   **The Sticky Wrapper:** Inside that tall container, create a `100vh` wrapper that is `position: sticky; top: 0;`. This ensures the visual layout locks completely in place while the user scrolls down the 500vh.
*   **The Background (Static):** The sticky wrapper has the exact same CRT monitor bezel array background as the Hero section. It must NOT move.
*   **The Foreground:** The two central displays side-by-side (Left for Text, Right for Media) with black backgrounds and rounded CRT corners.

# Interaction: "Changing the Channel"
*   As the user scrolls down the `500vh` container, map the scroll progress to cycle through 5 distinct content frames *inside* the Left and Right screens. 
*   Use a smooth crossfade or a quick static/glitch transition between the frames.

# Frame Content (The 5 States triggered by scrolling)

**Frame 0: The Intro (0% - 20% scroll)**
*   **Left Screen:** The word "CHOSEN". Use `DotGothic16` font, neon green (`#39FF14`), scaled to the absolute maximum size to fill the container perfectly.
*   **Right Screen:** The word "WORKS". Same styling (`DotGothic16`, neon green, max scale). No images.

**Frame 1: Project 1 (20% - 40% scroll)**
*   **Left Screen:** 
    *   *Title:* Architecting the Enterprise Core
    *   *Body (sans-serif, white/gray):* Modernized the legacy Oracle Pricing Engine. Fought for a scalable multi-charge architecture and designed batch job flows allowing users to seamlessly update 100,000+ prices without system lag.
    *   *Action:* "View Case Study" button.
*   **Right Screen:** An image placeholder. Apply a green monochrome/Matrix tint filter (`sepia`, `hue-rotate`) just like the Hero section.

**Frame 2: Project 2 (40% - 60% scroll)**
*   **Left Screen:** 
    *   *Title:* Fast Execution & Cross-Team Design
    *   *Body:* Delivered 3 different enterprise products from scratch in rapid 3-week agile sprints. Protected the user experience and navigated complex cross-team logic during a massive Rate Plan redesign.
    *   *Action:* "View Case Study" button.
*   **Right Screen:** Image placeholder (Green monochrome tint).

**Frame 3: Project 3 (60% - 80% scroll)**
*   **Left Screen:** 
    *   *Title:* Visualising Segment Analytics at Unity
    *   *Body:* A zero-to-one UX project transforming ambiguous requirements into an intuitive customer segment dashboard, defining the foundational analytics direction for Oracle's Customer Data Platform.
    *   *Action:* "View Case Study" button.
*   **Right Screen:** Image placeholder (Green monochrome tint).

**Frame 4: Project 4 (80% - 100% scroll)**
*   **Left Screen:** 
    *   *Title:* Eventdeck
    *   *Body:* Designed and delivered the MVP and full release of a comprehensive B2C Event Management Platform. Spearheaded end-to-end UX, from user research and information architecture to high-fidelity wireframing and user testing.
    *   *Action:* "View Case Study" button.
*   **Right Screen:** Image placeholder (Green monochrome tint).

Great. Now build Section 4: Testimonials. 

# Section 4: Layout & Background
*   **Background:** Use the exact same dark-mode styling and subtle background and the background interaction with cursor (e.g., faint grid or dark solid) used in Section 2.
*   **Layout:** A standard dark-mode section container with a clean `H2` section title ("TESTIMONIALS") aligned to the left, using a bold, sans-serif font.

# The UI Interaction (Dave Holloway Inspiration)
*   **The Concept:** The cards must look like they are hanging on a horizontal glowing string. Reference the "Services" section animation from `daveholloway.uk`. 
*   **Animation Details:** 
    *   The cards sit in a horizontal carousel that can be dragged or scrolled.
    *   Implement physics-based hover animations. When a user hovers over or drags a card, it should have a subtle swinging, tilting, or spring-physics rotation effect, as if it is physically hanging from the wire at the pivot point (the hole). 

# Visual Design (The String & The Cards)
*   **The String:** Create a horizontal line spanning the entire width of the carousel container. Give it a bright neon green color (`#39FF14`) with a strong glowing `box-shadow` effect. 
*   **The Cards (Glassmorphism):** 
    *   Vertical rectangles with rounded corners.
    *   Background: Translucent dark gray/black with a frosted glass effect (`backdrop-filter: blur`).
    *   Border: A subtle, semi-transparent white/gray border to give it a glass edge.
*   **The "Hole" Illusion:** Near the top center of each card, create a circular element that mimics a hole. Layer the CSS so the glowing green line appears to pass *through* or directly behind this hole (using a dark circle with an inner shadow over the green line).

# Card Typography & Content (Lorem Ipsum)
Populate 4 cards in the carousel with the following layout:
*   **Name:** Large, bold, white sans-serif text.
*   **Designation:** Medium size, neon green (`#39FF14`), uppercase text.
*   **Quote:** Smaller, light gray, regular weight sans-serif text.

**Card 1**
Name: LIAM THOMPSON
Designation: UX INTERN - CX MARKETING, ORACLE
Quote: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.

**Card 2**
Name: SARAH JENKINS
Designation: PRODUCT MANAGER, ORACLE
Quote: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.

**Card 3**
Name: MARCUS CHEN
Designation: SENIOR ENGINEER, ORACLE
Quote: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.

**Card 4**
Name: ELENA RODRIGUEZ
Designation: DESIGN DIRECTOR, ALCHERINGA
Quote: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.

Now build Section 5: Hire Me For.

# Global Scroll Transition (Section 3 to Section 4)
*   **The Transition:** Implement a scroll-triggered, vertical, non-linear scroll. When the user scrolls past the end of Section 3, Section 4 should automatically translate and snap vertically into the viewport. 

# Section 5: Layout & UI (Reusing Section 2)
*   **Background & Header:** Use the EXACT same background styling and header layout as Section 2. The `H2` section title is "Hire Me For" and should have the same entrance animation (fading and sliding in from the right) as Section 2.
*   **The Grid:** Below the header, instead of a vertical list, create a 2x2 grid (`display: grid; grid-template-columns: repeat(2, 1fr); gap: ...`). On mobile devices, this must collapse into a single column (1x4).
*   **The Component:** Use the EXACT same card component from Section 2. Do not invent a new style. The cards should be the exact same dark glassmorphism or deep charcoal with subtle borders. 
*   **Interactions:** Apply the exact same subtle hover animations from the Section 2 cards to these grid cards. Apply the same staggered entry animation (fade in and slide from right) as Section 2.

# Content (The 4 Cards)
Populate the 2x2 grid with the exact text below. 

**Card 1**
*   **Header:** Complex System Architecture
*   **Body:** I specialize in enterprise B2B SaaS and data ecosystems. I thrive in environments where I must translate massive data volumes, edge cases, and technical constraints into scalable UI patterns.

**Card 2**
*   **Header:** Rapid Agile Execution
*   **Body:** I combine enterprise systems thinking with startup speed. I champion rapid design cycles, collaborating in real time with cross functional PMs and engineers to unblock development and ship features fast.

**Card 3**
*   **Header:** Zero to One Product Strategy
*   **Body:** From foundational analytics dashboards to end to end B2C event platforms, I take ambiguous requirements and drive the UX lifecycle from research to high fidelity delivery.

**Card 4**
*   **Header:** Design Systems and Standardization
*   **Body:** I design for the ecosystem, not isolated screens. I align strictly with design systems, creating standardized reusable patterns that support familiarity and scaling across multiple applications.

Now build the next section: About Me.

# Section Layout & Text
*   **Layout:** A standard dark mode section container. 
*   **Header:** Add an `H2` header that says "Beyond the Pixels".
*   **Body Text:** Below the header, add this exact paragraph:
"When I am not designing, I spend my time living and consuming. I love cinema, music, and all forms of storytelling. I admire how minute details shape a larger idea. Connecting with new people gives me a fresh perspective of the world through their lenses. Ultimately, good design comes from understanding people. I also like creating. Who does not? Here are a few snippets of my creations."
*   **Typography:** Use the standard sans serif body font. Center the header and the text to create a clean, balanced layout.

# The Visual Component (Infinite Photo Marquee)
*   **The Component:** Below the text, create a continuous horizontal marquee (infinite scroll animation) using CSS keyframes. 
*   **The Aesthetic:** The marquee should contain an "array of displays". These are image and video frames moving continuously side by side. 
*   **Frame Styling:** The frames should match the premium, dark aesthetic of the rest of the site (dark glassmorphism or solid dark gray, subtle borders, slightly rounded corners). 
*   **Placeholder Content:** Create 7 distinct placeholder frames inside the marquee with the following labels text centered inside them so I know where to put my assets later:
    1. Speaker
    2. Woodblock Printing
    3. Graffiti
    4. Motion Folio (Video Placeholder)
    5. Alcheringa Theme Video (Video Placeholder)
    6. Photos with Friends
    7. My Photo
*   **Animation Details:** The scrolling must be smooth, infinite, and seamless without any jumping when it loops. Add a subtle pause on hover so the user can stop the marquee and look at a specific photo or video.

Perfect. Now let's build the final section: Section 7 (The Footer). This section has a very specific scroll transition, a retro-terminal layout, and a custom Javascript interaction.

# Global Scroll Transition (Panel Reveal)
*   **The Transition:** Do not use standard scrolling. Use a "Panel Reveal" (or Curtain Reveal) effect. 
*   **CSS Logic:** Make this Footer section `position: sticky; bottom: 0; z-index: 0;` (or similar logic) and ensure the previous sections have a higher z-index and a solid background. As the user scrolls to the absolute bottom, the previous section should slide up and off the screen, revealing this Footer sitting stationary underneath it.

# Layout & Typography
*   **Dimensions:** `min-h-screen` (100vh) and `w-full`.
*   **Typography:** We are returning to the Matrix theme. All text in this section MUST use the `DotGothic16` font and be colored neon terminal green (`#39FF14`).
*   **Background Color:** Solid deep black.

# The Top Corners (Contact Info)
*   **Absolute Positioning:** Pin these to the top corners with appropriate padding (e.g., `p-8`).
*   **Top-Left:** A vertical flex column containing two text links: "LinkedIn" and "Behance".
*   **Top-Right:** A vertical flex column with text aligned right, containing: "ayush.singh451@gmail.com" and "+91 7357442395".

# The Center Element & Image Asset
*   Center an `<img>` element in the middle of the screen (or use it as a centered background layer). 
*   **File Name:** You MUST use the file named `footer.jpg` as the source for this image. Use `object-fit: contain` so the aspect ratio is preserved and it spans across the center.
*   **The Hotspot (Crucial):** Create an invisible `<button>` or clickable `div` absolutely positioned over the right-side area of `footer.jpg` (specifically over where the physical "PRINT CV" button is located in the artwork). 
*   **The Hidden Video:** Create a `<video>` element occupying the exact same space/size as the `footer.jpg` image. Set it to `display: none` by default.

# The Javascript Interaction (The Print CV Logic)
Write the state logic or vanilla JS for the hotspot button:
1.  **On Click:** Hide the `footer.jpg` image and show the `<video>` element. Trigger `video.play()`.
2.  **On Video End:** Add an event listener for the video's `ended` event. When the video finishes playing, automatically execute `window.open('resume.pdf', '_blank')` to open the PDF in a new tab.

# The Bottom Bar
*   **Absolute Positioning:** Pin a text element to the absolute bottom center of the screen (`bottom-0`, `w-full`, `text-center`, `pb-4`).
*   **Text Content:** "Made with love for The Matrix, Antigravity and Panic!!!"

We need to add a Global Top Navigation bar to the Landing Page. **Override any previous instructions that said "no top navigation."** 

# Global Layout & Styling
*   **Positioning:** The navigation must be `position: sticky; top: 0; z-index: 100;` so it always stays visible above all the complex scroll sections.
*   **Background:** Deep solid black (`bg-black`) or dark frosted glass to ensure readability. 
*   **Typography:** The entire navbar MUST use the `DotGothic16` font. 
*   **Layout:** A wide flexbox container (`justify-between`, `items-center`, `px-8`, `py-4`). It has 3 distinct zones: Left, Center, and Right.

# 1. Left Zone: The Typewriter Logo
*   **Content:** "Ayush's Portfolio" followed by a block cursor "█" or "|".
*   **Color:** Neon terminal green (`#39FF14`).
*   **Animation:** Implement a CSS typewriter effect. The text should reveal letter-by-letter (using `width` and `steps()` or a JS string reveal). The cursor must blink infinitely using a CSS keyframe animation (`opacity: 1` to `opacity: 0`).

# 2. Center Zone: The ScrollSpy Links
*   **Content:** Three text links aligned horizontally with a gap: "WORK", "ABOUT", and "CONTACT".
*   **Interaction (Click):** Clicking these links should smoothly scroll the page to the corresponding sections.
*   **Interaction (ScrollSpy Logic):** Write an `IntersectionObserver` to track the user's scroll position and light up the active link (Neon Green `#39FF14`) while the inactive links stay a muted gray (`#555555`).
    *   **WORK lights up when:** Section 2 (Experience) OR Section 3 (Chosen Works) are in the viewport.
    *   **ABOUT lights up when:** Section 4 (Hire Me For) OR Section 5 (About Me) are in the viewport.
    *   **CONTACT lights up when:** Section 6 (The Footer) is in the viewport.

# 3. Right Zone: The Resume Button
*   **Content:** A button that says "Resume".
*   **Styling:** Neon green text (`#39FF14`), a thin neon green rounded border (`rounded-md border border-[#39FF14]`), and a subtle green outer glow/shadow. Transparent background.
*   **Interaction (Click):** On click, execute `window.open('resume.pdf', '_blank')`.
*   **Interaction (Hide on Footer):** Using the same `IntersectionObserver` mentioned above, when Section 6 (The Footer) enters the viewport, this Resume button must smoothly fade out and become unclickable (`opacity-0 pointer-events-none`). When the user scrolls back up, it should fade back in.

Perfect. The Landing Page is complete. Now we need to build the routing logic, the Password Gate Screen, and the custom Case Study page template.

# 1. Routing & Navigation Logic
Update the "View Case Study" buttons in Section 3 (Chosen Works) with this flow:
*   **Project 1 Button:** Route to the Password Gate. On success -> Route to internal `/case-study-1`.
*   **Project 2 Button:** Route to the Password Gate. On success -> Route to internal `/case-study-2`.
*   **Project 3 Button:** Route to the Password Gate. On success -> Redirect to external Figma URL (`_blank`).
*   **Project 4 Button:** No password required. Redirect directly to external Behance URL (`_blank`).

# 2. Build the Password Gate Screen
Create a new full-screen component for the Password Gate.
*   **Layout:** Full screen (`min-h-screen`), perfectly centered content, deep black background. 
*   **UI Elements:**
    *   **Header:** "Restricted Access" (sans-serif, large).
    *   **Sub-text:** "This project contains sensitive enterprise data under NDA. Please enter the password to proceed."
    *   **Input Field:** A clean, dark-mode input field (subtle border, glowing green `#39FF14` focus state). 
    *   **Submit Button:** Simple solid or outlined CTA.
    *   **Helper Text:** "Don't have a password? Reach out: [Email Hyperlink] • [LinkedIn Hyperlink]".

# 3. Build the Case Study Page Template (`/case-study-1` & `/case-study-2`)
Do not use a standard web layout. We are building a "Mission Control" glass panel layout.

*   **Background:** Use the exact same dark, deep-charcoal/black background aesthetic as Section 2 of the landing page.
*   **Layout Constraints:** Full-height layout with padding around the edges (e.g., `p-6` or `p-8` for desktop). On mobile/tablet, stack the panels vertically. The side-by-side split is for Desktop only.

**The Glass Panels (1/6 and 5/6 Split)**
The content lives inside two distinct glassmorphism panels sitting side-by-side with a gap (`gap-6`).
*   **Panel Styling (Both):** Use dark glassmorphism (`backdrop-filter: blur`, dark transparent background like `bg-white/5`), subtle borders, and significantly rounded corners (`rounded-3xl`).

**Panel 1: Left Panel (Sticky Table of Contents)**
*   **Width:** Takes up exactly 1/6th of the horizontal width. 
*   **Layout:** Make this panel `position: sticky; top: 2rem; height: calc(100vh - 4rem);` so it stays locked in place.
*   **Content:** A vertical list of Case Study Section Headings (e.g., "1. The Problem", "2. Architecture Battle", "3. Mass Actions").
*   **Interaction (ScrollSpy):** Write an `IntersectionObserver` script. As the user scrolls through the Right Panel, track which section is currently in the viewport. Illuminate the corresponding heading in the Left Panel by changing its text color to neon green (`text-[#39FF14]`).

**Panel 2: Right Panel (Free Scrolling Content)**
*   **Width:** Takes up the remaining 5/6ths of the horizontal width.
*   **Layout:** This panel scrolls freely with the window. Give it ample internal padding (`p-12`) for readability.
*   **Content Structure:** 
    *   **Top Bar:** A "← Back to Home" text button at the top left.
    *   **Hero Area:** Large `H1` Project Title, plus metadata (Role, Timeline, Focus).
    *   **Sections:** Create placeholder blocks for the case study content (matching the headings in the left panel). Use clean, readable sans-serif text (`prose prose-invert`). 
    *   **Image Placeholders:** Include full-width (within the panel) image blocks with rounded corners to hold Figma exports.
*   **Footer:** At the very bottom of this right panel, include a "Next Project →" link.