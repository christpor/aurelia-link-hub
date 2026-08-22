# Aurelia Link Hub — Evidence-Led Decision Brief

**Status:** Directional recommendation, validated only in the documented local prototype context.  
**Decision owner:** The user, pending brand-content and release approval.  
**Scope:** A public, mobile-first link-in-bio site that centralizes campaign links, product destinations, editorial content, and newsletter capture.

## Executive recommendation

The recommended direction is a single-column, **Verdant Editorial** link hub that applies an explicit action hierarchy: featured campaign first, priority destinations second, shoppable products third, editorial/supporting destinations fourth, and newsletter capture last. The delivered prototype uses a manually controlled campaign switcher, large tap targets, structured product cards, and provider-neutral click events. This balances the requested campaign visibility and shoppable surface against the accessibility risks of a timed carousel.

The recommendation remains conditional. It should be revised if user testing shows that visitors primarily arrive for one destination, if the brand supplies a different visual system, or if the selected email and analytics platforms impose implementation requirements.

## Problem frame

| Field | Record |
|---|---|
| Decision question | Which interaction and information architecture should the link hub use to make social traffic discover campaigns, products, content, and email signup with measurable outbound activity? |
| Desired outcome | A responsive, brand-forward social gateway in which high-priority destinations are clear at first scan and each outbound destination is measurement-ready. |
| Constraints | No approved brand identity, destination URLs, product catalog, analytics property, email provider, or consent configuration was supplied. The implementation therefore retains editable sample content and does not claim live commerce or email capture. |
| Acceptance condition | The current prototype builds successfully, preserves a mobile-first hierarchy, has no auto-advancing campaign content, labels the email input, and emits inspectable events for link activation. |
| Failure cost | Misleading marketing measurement, inaccessible campaign navigation, a visually off-brand release, or publishing placeholder destinations. |

## Evidence register

| ID | Claim | Evidence and source tier | Limitation | Design consequence |
|---|---|---|---|---|
| E1 | UTM attribution needs consistent source, medium, and campaign conventions, but internal UTM use can misrepresent metrics by creating a new session. | University of Minnesota marketing guidelines describe required UTM fields and explicitly caution against using UTMs on internal links. [1] Tier 2 institutional guidance. | Guidance is specific to analytics attribution, rather than a universal on-page event schema. | The page uses an internal semantic event and leaves outbound campaign parameters configurable per destination. |
| E2 | Auto-rotating carousels can disorient keyboard and screen-reader users; manual navigation, previous/next controls, a bypass, and appropriate announcement behavior reduce the risk. | Centre for Excellence in Universal Design carousel guidance. [2] Tier 2 institutional guidance. | It also recommends avoiding carousels where possible. | The site presents only two campaign cards, never auto-rotates, provides labelled manual controls, and offers a skip link to primary paths. |
| E3 | Form controls need labels that identify their purpose; an explicit `label[for]` to matching input `id` is the generally preferred pattern. | W3C WAI forms tutorial. [3] Tier 1 standards-body guidance. | It does not specify a particular newsletter provider’s API or privacy terms. | The native email control has a visible `Email address` label, `type="email"`, browser validation, and an inline status response. |

## Hypotheses and smallest tests

| Hypothesis | Supporting mechanism | Counter-hypothesis | Smallest validation test |
|---|---|---|---|
| Tiered paths improve findability for mixed social traffic. | A visitor can identify a campaign, a shop destination, and a journal destination without parsing one undifferentiated list. | A short, flat list could be faster if one user intent dominates. | Ask five representative visitors to locate each of the three destinations; record time and misroutes. |
| A manual campaign feature retains visual focus without the harm of timed movement. | It gives the visitor control over pace while maintaining a premium campaign moment. | The extra interaction still adds friction compared with a static hero. | Observe keyboard and touch users moving between campaign cards; replace with a static feature if it is ignored or confused. |
| Local semantic click events provide a durable analytics handoff. | The event carries a label, group, destination, and time without rewriting the navigated URL. | The future analytics provider may need a different schema or consent gate. | Map one live event to the selected provider and reconcile its count with outbound destination activity in a defined test period. |

## Option comparison

| Option | Mechanism | Strength | Main risk | Decision |
|---|---|---|---|---|
| Flat button list | Sends all destinations into one equal list. | Lowest implementation and scanning cost. | Campaigns and product context lose hierarchy; it weakly meets the requested gallery and carousel features. | Deferred. |
| Timed campaign carousel + rich animation | Uses automatic motion to foreground campaigns. | Potentially high visual attention. | Conflicts with the accessibility evidence and produces avoidable control complexity. | Rejected. |
| **Verdant Editorial, manual feature switcher + grouped links** | Uses a user-controlled campaign moment, intent grouping, and product film to guide prioritization. | Fulfills the requested feature set while retaining user control and mobile readability. | Must be rebranded and wired to approved links/platforms before public use. | Selected as a reversible prototype. |

## Fair challenge and resolution

| Claim | Strongest objection | Response | Resolution |
|---|---|---|---|
| The requested campaign carousel should ship. | Accessibility guidance advises avoiding carousels and warns that timed rotation impedes some users. [2] | Constrain the pattern: two manual cards, no timer, labelled buttons, live update only after user action, and a page-level skip path. | **Revised.** |
| Every link should use UTM parameters. | Internal UTMs can break session attribution. [1] | Store link-group semantics in the click-event payload; only use approved campaign parameters on outbound destinations. | **Supported with constraint.** |
| Newsletter signup is production-ready. | The form has no selected provider, consent copy, or retention policy. | The submission is intentionally a prototype confirmation only; the README marks the integration boundary. | **Unresolved for production.** |

## Premortem and controls

| Failure path | Early signal | Control | Stop or rollback condition |
|---|---|---|---|
| Approved campaign or product URL is wrong. | Test click does not arrive at the intended destination. | Maintain an owner-reviewed destination sheet and test all links before release. | Do not publish; replace the destination and rerun the link test. |
| Event data is not usable in the nominated analytics property. | Click counts do not appear or disagree with controlled test clicks. | Create a provider adapter and test event names, consent behavior, and outbound-link capture in preview. | Disable reporting claims and revisit the schema before launch. |
| Brand content is mismatched. | Owner identifies a palette, type, image, or copy conflict. | Keep all content in structured arrays near the start of `Home.tsx`; provide a visual review gate. | Do not release until the brand owner approves the substitutions. |
| Newsletter collection violates marketing policy. | Privacy/legal reviewer cannot approve the destination or disclosure copy. | Connect only to an approved provider with approved consent language and a privacy link. | Keep submit handler in prototype state; do not collect addresses. |

## Validation record

| Check | Method | Result | Scope limitation |
|---|---|---|---|
| Type safety | `pnpm check` | Passed on 2026-08-22. | Does not test browser behavior. |
| Production build | `pnpm build` | Passed on 2026-08-22. | Reported a JavaScript chunk-size warning; build remains successful. |
| Desktop hierarchy | Full-page visual review at 1280×720. | Passed; independent review found the design strongly aligned with the documented direction. | Visual review is not a substitute for usability testing. |
| Mobile hierarchy | Full-page visual inspection at 375×812. | Passed; campaign, priority links, products, newsletter, social links, and tracking preview remain visible in a coherent sequence. | Only one viewport was inspected. |

## Acceptance checks for branded release

| Acceptance check | Measurement method | Review point | Stop condition |
|---|---|---|---|
| Every visible destination routes to an approved URL. | Link inventory with a controlled click test. | Before publishing. | Any placeholder or failed destination. |
| The top three paths are findable by target users. | Five-participant task test. | Before full campaign rollout. | Fewer than four participants complete each task without help. |
| Analytics records the approved event fields without internal UTM contamination. | Controlled event test in the selected analytics property. | Preview deployment. | No event appears, or event values are inconsistent. |
| Newsletter capture sends data only to an approved destination with approved disclosure copy. | Provider integration test and owner policy sign-off. | Before enabling real submission. | Provider, consent language, or privacy URL is missing. |

## References

[1]: [University of Minnesota — UTM Tracking Guidelines](https://umarcomm.umn.edu/resources/utm-tracking-guidelines)  
[2]: [Centre for Excellence in Universal Design — Make carousels accessible](https://universaldesign.ie/communications-digital/web-and-mobile-accessibility/web-accessibility-techniques/developers-introduction-and-index/ensure-custom-widgets-are-accessible/make-carousels-accessible)  
[3]: [W3C WAI — Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/)
