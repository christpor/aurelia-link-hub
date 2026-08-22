# Aurelia Link Hub

This static React site is a responsive prototype for a brand link-in-bio experience. It uses a **Verdant Editorial** visual system: a warm parchment ground, bottle-green action states, editorial typography, and a deliberate vertical reading path.

## Features

| Feature | Current implementation | Production handoff |
|---|---|---|
| Smart links | Every campaign, priority, product, and social link emits a `aurelia:smart-link` browser event and is visibly previewed in the event drawer. | Route this event to the nominated analytics provider, with consent handling configured by the brand. |
| Featured campaigns | A two-card manual carousel with labelled controls and no auto-rotation. | Replace the campaign objects in `Home.tsx` with approved URLs and campaign imagery. |
| Shoppable gallery | Product cards with photo, product metadata, price, and outbound destination. | Replace placeholder product text, prices, images, and `example.com` destinations with catalog data. |
| Newsletter signup | Native `email` input, visible label, browser validation, and accessible inline confirmation. | Connect the submit handler to the nominated email platform after API and privacy approval. |
| Tiered groups | Priority and further-exploration groups with their own tracking context. | Update labels and link destinations according to campaign priority. |

## Analytics schema

The click event payload is intentionally provider-neutral:

```ts
{ label: string, group: string, destination: string, time: string }
```

The event is emitted with `window.dispatchEvent(new CustomEvent("aurelia:smart-link", { detail }))`. This approach leaves external UTM parameters to approved outbound campaigns and avoids adding internal UTMs to hub navigation.

## Placeholder content

The names, products, prices, email address, social destinations, and URLs are demonstration content because approved brand assets and destinations were not supplied. All outbound links currently use `example.com` or generic public channel URLs. Replace them before production release.

## Local commands

```bash
pnpm dev
pnpm check
pnpm build
```

## Research basis

The implementation follows an evidence ledger created during discovery. The key constraints are: no internal UTM mutation for hub links, a manual (not auto-rotating) campaign interaction, and an explicitly labelled newsletter input. See the project handoff notes for the source register and acceptance checks.

