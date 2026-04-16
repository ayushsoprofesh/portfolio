The desktop version is complete. Now, implement responsive design for Mobile and iPad vertical views (e.g., Tailwind's `max-md:` or custom media query for screens under `1024px`). 

Apply the following overrides strictly for mobile/tablet breakpoints:

# Global Overrides & Background
*   **Scroll Logic:** Disable all complex scroll-triggered section transitions (no horizontal slides, no panel reveals). Use standard, continuous vertical smooth scrolling (`scroll-behavior: smooth`).
*   **Interactive Background:** 
    *   Disable the mouse cursor tracking interaction. 
    *   Implement an automated animation: Random rectangles light up multiple at a time, then slowly dim out. 
    *   Animation detail: The light-up effect must start as a thin horizontal line and expand vertically to fill the rectangle, then fade.
    *   Brightness: Cap the intensity of the light to 70% of the desktop version.

# Top Navigation & Loader
*   **Loader:** Remove the zoom-in effect. The Matrix rain should simply fade/blend smoothly into the Hero section.
*   **Navbar:** 
    *   Remove the center navigation labels (Work, About, Contact).
    *   Keep "Ayush's Portfolio" on the left.
    *   Keep the "Resume" download button on the right.

# Section 1: Hero
*   **Background:** Remove the CRT monitor background image completely.
*   **Layout:** Break the two displays into a vertical stack (`flex-col`). 
*   **Order:** Place the Profile Photo element on top, and the Text element on the bottom. Keep the dark UI styling, ensuring it looks like well-designed, standalone glass/dark-mode cards.

# Section 2: Work Experience
*   **Layout:** Stack the 3 experience cards vertically.
*   **Interaction (Exclusive Accordion):** 
    *   **Default State:** All 3 cards are collapsed. Only the Job Title, Company, and Dates are visible.
    *   **Expanded State:** When a user taps a card, it expands to show the full details and takes up the full height of the container. The other two unselected cards must fade away/hide completely (`opacity: 0; height: 0; pointer-events: none;`) while this card is open. Add a "close" toggle to revert to default.

# Section 3: Chosen Works
*   **Layout:** Remove the sticky scroll and CRT display logic entirely. Use a standard vertical layout.
*   **Header:** Add a simple section header: "Chosen Works".
*   **Content:** Render the 4 projects as full-width, vertically stacked cards.
*   **Card UI:** Each card should display the Image, the Project Title, and the Tags. **Hide the body description text** completely to save vertical space.

# Section 4: Hire Me For
*   **Layout & Interaction:** Remove the 2x2 grid. Stack the 4 cards vertically. Apply the exact same "Exclusive Accordion" interaction logic used in the Work Experience section (tapping one expands it and hides the others).

# Section 5: About Me
*   **Layout:** Keep the same layout logic as desktop, but scale the text sizing down for mobile readability. Ensure the infinite horizontal scrolling marquee of images remains fully functional and touches the screen edges.

# Section 6: Footer
*   **Layout Overhaul:** Completely remove the "Print CV" image-to-video logic and the panel reveal transition. 
*   **Sizing:** Remove `min-h-screen`. The footer should only be as tall as its content.
*   **UI:** Use a simple, clean dark background. 
*   **Content:** Add a short header: "Thank you for visiting." Group all contact details (Email, Phone, LinkedIn, Behance) together in a clean, vertically stacked or grid list. Keep the "Made with love..." text at the very bottom.

# Case Study Pages (`/case-study-1`, `/case-study-2`) & Password Screen
*   **Password Screen:** Optimize for mobile. Ensure the input field and text are perfectly centered with adequate touch padding (`p-6`).
*   **Case Study Layout:** 
    *   Completely hide/remove the Left Panel (the sticky 1/6th Table of Contents).
    *   Make the Right Panel (Content) take up 100% of the screen width (`w-full`).
    *   Ensure all text, headers, and embedded Figma iframes scale responsively to fit within the mobile viewport without horizontal scrolling.