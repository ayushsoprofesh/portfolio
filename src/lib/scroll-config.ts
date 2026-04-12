/**
 * Configuration for the Virtual Scrolling Engine.
 * Tweak these values to change how scrolling feels across the application.
 */
export const ScrollConfig = {
  wheelMultiplier: 0.5,
  touchMultiplier: 1.5,

  spring: {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  },

  maxScrollVh: 13.5,

  // --- Wheel Snap Points ---
  // The predefined VH stops the page will aggressively snap to upon scrolling.
  // This array defines the exact scroll destinations for each "tick" of the wheel.
  snapPointsVh: [
    0,      // 0: Hero
    1.5,    // 1: Experience
    3.0,    // 2: Chosen Works Frame 0
    4.5,    // 3: Chosen Works Frame 1
    6.0,    // 4: Chosen Works Frame 2
    7.5,    // 5: Chosen Works Frame 3
    9.0,    // 6: Chosen Works Frame 4
    10.5,   // 7: Hire Me For
    12.0,   // 8: About Me
    13.5    // 9: Footer
  ],

  // --- Section Breakpoints (Visibility) ---
  // To keep transitions smooth, breakpoints are set HALFWAY between major sections.
  breakpoints: {
    heroPx: 120,          
    experienceVh: 2.25,   // Halfway between 1.5 and 3.0
    chosenWorksVh: 9.75,  // Halfway between 9.0 and 10.5
    hireMeForVh: 11.25,   // Halfway between 10.5 and 12.0
    aboutMeVh: 12.75,     // Halfway between 12.0 and 13.5
  },

  // --- Frame Animation for 'Chosen Works' ---
  chosenWorksFrames: {
    startVh: 3.0,
    endVh: 9.0,
    frameCount: 5,
  },

  // --- Side Navigation Dot Targets ---
  navTargetsVh: [
    0,      // 0: Hero
    1.5,    // 1: Experience
    3.0,    // 2: Chosen Works
    10.5,   // 3: Hire Me For
    12.0,   // 4: About Me
    13.5,   // 5: Footer
  ],
  
  // Snap cool-down in milliseconds
  snapCooldownMs: 1200
};
