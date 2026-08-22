# Manus POR Interaction and Visual Audit — Aurelia Link Hub

## Baseline evidence before repair

| Screen or control | Viewport or device | State exercised | Result | Evidence | Severity | Next action |
|---|---|---|---|---|---|---|
| Home route | Desktop 1280×720 | Full-page default render. | Pass, local only. | Initial full-page review found the Verdant Editorial hierarchy coherent. | None | Repeat against the final production alias after media repair. |
| Home route | Mobile 375×812 | Full-page default render. | Pass, local only. | Initial mobile full-page review showed a coherent campaign-to-newsletter reading path. | None | Repeat against the final production alias after media repair. |
| Production home route | Vercel alias | Direct HTTP fetch. | Pass for document delivery. | `https://aurelia-link-hub.vercel.app` returned HTML with HTTP 200. | None | Recheck after final deployment. |
| Campaign/product image | Vercel alias | Direct HTTP fetch. | Fail. | `/manus-storage/aurelia-campaign-atelier_1f6a8945.jpg` returned HTTP 404. | High | Replace all `/manus-storage` visual references and recheck every visible asset. |
| Replacement campaign/product media | Local runtime and source endpoint checks | All four public stock-image URLs and CSS brand mark. | Pass locally. | The four Unsplash endpoints returned successful responses; desktop and mobile screenshots show the updated campaign and product media. | None | Verify equivalent 2xx media responses from the final Vercel alias. |
| Manual campaign control | Desktop local preview | Next control from campaign 01 to 02. | Pass. | Browser interaction updated the indicator from `01 / 02` to `02 / 02`, changed the heading to “The room, in a softer key.”, and loaded the second public image. | None | Reverify once on the final Vercel alias. |
| Newsletter form | Desktop local preview | Invalid `not-an-email` entry and valid `reader@example.com` submission. | Pass for prototype behavior. | Invalid native-email submission did not create a success status; valid submission produced the inline text “You’re on the studio list.” without transmitting subscriber data. | None | Reverify the valid confirmation on the final Vercel alias; connect an approved email provider before business launch. |
| Smart link and analytics preview | Desktop local preview | Activated “Shop new arrivals” with navigation safely intercepted. | Pass for prototype behavior. | The analytics panel added a `07:26 AM` event for “Shop new arrivals” with the category “Priority paths.” | None | Reverify a representative event on the final Vercel alias. |
| Skip link and focus visibility | Desktop local preview | Focused and activated with the Enter key. | Pass. | Browser focus succeeded and keyboard activation changed the URL to `#top-links` while moving to the priority-paths target. | None | Reverify on the final Vercel alias. |
| Not-found fallback | Desktop local preview | Direct-load unmatched path and use the recovery control. | Pass. | `/not-a-route` displayed the 404 view; its Go Home control returned to `/` and restored the campaign page. | None | Reverify the fallback on the final Vercel alias. |
