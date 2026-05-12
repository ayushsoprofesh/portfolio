export const HALFTONE_SETTINGS = {
  // --- Grid & Dots ---
  dotSpacing: 5,             // Lower = more dense dots, Higher = sparse dots (performance impact)
  maxDotRadiusMultiplier: 0.55, // Size of the largest dots relative to spacing. Max is ~0.5.
  
  // --- Animation ---
  rippleSpeed: 20,            // Speed at which the ripple expands
  springStiffness: 0.50,      // How fast dots scale back to their target size
  movementSpring: 0.2,        // How fast dots return to their original position after being pushed
  
  // --- Interaction ---
  repelRadius: 90,            // How close the cursor needs to be to affect dots
  repelStrength: 25,          // How far dots are pushed away from the cursor

  // --- Image Processing ---
  contrast: 1.0,              // 1.0 = normal, > 1.0 = higher contrast
  gamma: 0.7,                 // 1.0 = normal, < 1.0 = darker midtones, > 1.0 = brighter midtones
  darknessThreshold: 55       // Minimum darkness (0-255) for a dot to appear (hides background noise)
};
