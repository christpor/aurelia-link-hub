# Aurelia Link Hub

**Aurelia Link Hub** is a static React/Vite source project for a brand link-in-bio experience. It brings featured campaigns, tracked outbound links, a shoppable product gallery, tiered navigation, and a newsletter-feedback pattern into one mobile-conscious editorial interface. The recorded production site is available at [aurelia-link-hub.vercel.app](https://aurelia-link-hub.vercel.app).

> This repository is a **prototype source**. Its external destinations, product data, and newsletter processing are intentionally not connected to production business systems.

## Included interface behavior

| Area | What the source implements | Boundary to preserve |
|---|---|---|
| Smart links | Campaign, priority, gallery, and social links create a local preview entry and dispatch a provider-neutral `aurelia:smart-link` browser event. | Connect this event to an approved analytics provider with appropriate consent handling. |
| Featured campaigns | Two campaigns with manual previous/next controls, a live position indicator, and no automatic rotation. | Replace the campaign copy, images, and destinations in [`Home.tsx`](client/src/pages/Home.tsx). |
| Shoppable gallery | Two product cards with public stock imagery, product metadata, and outbound-link affordances. | Replace the sample names, prices, imagery, and destinations with catalog-approved data. |
| Newsletter feedback | A labelled native email control and an inline prototype success message. | Connect a provider, consent language, and delivery workflow before collecting subscriber data. |
| Route recovery | The Vercel configuration routes unknown direct paths to the client application, which presents its own recovery view. | Keep the SPA rewrite when changing static-hosting configuration. |

## Run locally

The repository uses `pnpm` and defines its development, type-check, build, and preview commands in [`package.json`](package.json).

```bash
pnpm install --frozen-lockfile
pnpm dev
```

For a release-oriented local check, run:

```bash
pnpm check
pnpm build
pnpm preview
```

The manifest does not declare a Node.js version. Use a Node.js environment compatible with the listed Vite, React, and TypeScript dependencies.

## Project map

| Path | Reader purpose |
|---|---|
| [`client/src/pages/Home.tsx`](client/src/pages/Home.tsx) | The primary link-hub content, campaign and product data, smart-link event handling, and newsletter prototype. |
| [`client/src/index.css`](client/src/index.css) | The Verdant Editorial visual system and responsive styling. |
| [`client/src/App.tsx`](client/src/App.tsx) | Client routes, including the fallback route. |
| [`vercel.json`](vercel.json) | Vite build settings, static output directory, and SPA fallback rewrite. |
| [`docs/por-review-artifact.json`](docs/por-review-artifact.json) | Production verification record and explicitly scoped exclusions. |
| [`release-artifact.json`](release-artifact.json) | Recorded GitHub and Vercel release details. |

## Deployment context

The source-controlled [Vercel configuration](vercel.json) uses Vite, performs `pnpm install --frozen-lockfile`, runs `pnpm build`, publishes `dist/public`, and includes an SPA rewrite for direct unknown routes. The existing Vercel release was performed through a direct deployment route; the configuration does not represent an ongoing Git-linked deployment relationship.

## Prototype content and integrations

All campaign and product URLs in the source use demonstration destinations. Product names, prices, social links, and newsletter copy are likewise sample content. The newsletter handler only updates local UI state; it does not transmit an email address. The smart-link event is intentionally provider-neutral and does not configure an analytics vendor.

Before using this project as a business-facing hub, provide approved destinations and product data, connect a newsletter provider, and add analytics with the brand’s consent and privacy requirements.

## Documentation

The repository keeps detailed release and verification material outside this entry document:

| Document | Purpose |
|---|---|
| [`docs/por-completion-decision.md`](docs/por-completion-decision.md) | Completion decision and remaining prototype exclusions. |
| [`docs/por-interaction-visual-audit.md`](docs/por-interaction-visual-audit.md) | Recorded interface, media, and route checks. |
| [`docs/vercel-release-plan.md`](docs/vercel-release-plan.md) | Deployment configuration and release context. |
| [`docs/readme/README-evidence.json`](docs/readme/README-evidence.json) | Evidence ledger for this README’s material claims. |
| [`docs/readme/README-brief.md`](docs/readme/README-brief.md) | Reader journey and content-boundary rationale. |

## License note

The package metadata declares **MIT**, but no top-level `LICENSE` file was located during documentation review. Add an authoritative license file before relying on the metadata for distribution decisions.
