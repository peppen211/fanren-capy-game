# Ashen Oath Art Foundation

The current art package is a source-art milestone, not a runtime integration milestone.

## Pipeline status
- Chapter 1 environment concept: generated and packaged as WebP.
- Ashen Knight: 4x2 generated pose sheet packaged; frame boundaries and alpha still require validation.
- Ash Wraith: 4-frame sheet packaged; alignment and alpha require validation.
- Skeletal Revenant: 4-pose source sheet packaged, but the visible checkerboard is not transparency. Reference-only until background cleanup.
- Life/mana orb: ornate frame packaged; red HP fill and curved blue MP crescent are still separate implementation tasks.

## Runtime integration gates
1. Validate and slice sprite frames.
2. Standardize sprite scale, foot anchors, and animation timing.
3. Add distinct monster silhouettes and elite/boss art.
4. Implement orb liquids as clipped layers beneath the frame.
5. Replace battle-scene placeholder drawing with image/sprite rendering.
6. Verify the portrait battlefield and fixed HUD on mobile.
7. Deploy preview only after integration and visual QA.

See `asset-manifest.json` for machine-readable paths and statuses.
