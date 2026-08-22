# Aurelia Link Hub — Design Exploration

## Three potential directions

| Theme Name | Very Brief Intro | Probability |
|---|---|---:|
| Verdant Editorial | A composed fashion-editorial system where dark ink, botanical green, and restrained cream make each link feel considered and premium. It brings the cadence of a seasonal lookbook to a mobile conversion surface. | 0.06 |
| Citrus Studio | A sunny modular system with intense citrus, cobalt notes, and clipped photography. It would make campaigns feel energetic and product-led. | 0.03 |
| Gallery Receipt | A stark art-book approach inspired by exhibition ephemera: dense type, invisible rules, and utilitarian metadata. It would prioritize cultural credibility over warmth. | 0.08 |

## Chosen direction — Verdant Editorial

**Design Movement.** Contemporary editorial luxury, taking cues from independent design magazines, a botanical apothecary, and restrained Swiss composition rather than typical link-tree layouts.

**Core Principles.** The interface will be purposefully vertical and sequential, not a centered stack of generic buttons. Hierarchy will be set through type scale, tonal blocks, and narrow editorial rules. Product images carry the visual energy while content surfaces are tactile—paper, ink, and soft shadow. Every interactive element is explicit, generously sized, and visibly focused.

**Color Philosophy.** A warm parchment base creates calm and makes photographic product color feel credible. Near-black forest ink carries body copy and navigation. The signature bottle green concentrates on priority actions and moments of state, while a dusty sage becomes a quieter organizing plane. The contrast system will remain dark-on-light except inside the ink and green campaign areas, where type becomes cream.

**Layout Paradigm.** A narrow mobile reading column is offset by a full-bleed campaign strip and a horizontally scrollable product film. On wide screens, the content becomes a two-rail editorial composition: a sticky identity rail and an active content rail. The result is a hub with a clear beginning, pace, and exit rather than a centered card collection.

**Signature Elements.** A split-ring monogram leads the identity. Hairline rules with tiny field labels structure the page. Product cards use clipped top corners and numbered index marks to give the commerce area a contact-sheet feeling.

**Interaction Philosophy.** Interactions are calm, tactile, and legible. Links lift a few pixels and show a directional arrow; active carousel navigation updates a compact live label; newsletter submission gives an immediate inline status rather than a disruptive modal. The analytics activity strip is intentionally visible in prototype mode to make measurement behavior inspectable.

**Animation.** Initial content uses a single upward fade with small stagger intervals. Hover states use 160–220ms transform and color transitions with a crisp custom ease. Nothing automatically moves: campaign progression is user-triggered. Reduced-motion preferences remove transitions and the entrance effect.

**Typography System.** `DM Serif Display` provides warm, high-contrast campaign and section titles. `Manrope` handles metadata, controls, and body copy at compact but readable sizes. Editorial labels use uppercase Manrope with expanded tracking. There is no default Inter usage.

**Brand Essence.** Aurelia is a considered social-commerce gateway for a modern lifestyle brand that wants campaigns, products, and editorial worlds to feel equally intentional. **Measured, cultivated, decisive.**

**Brand Voice.** Headlines are sensory but precise; calls to action name the destination and avoid conversion clichés. Example headline: “Objects for the daylight hours.” Example CTA: “Enter the August edit”.

**Wordmark & Logo.** The mark is an open Aurelia ring: a thick bottle-green circle interrupted by a sharp sunlight ray. The wordmark uses a custom-looking serif treatment with a small spaced subtitle, never a default sans wordmark.

**Signature Brand Color.** **Aurelia Bottle Green — #123D32.**
