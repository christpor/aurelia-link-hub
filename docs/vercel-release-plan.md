# GitHub and Vercel Release Plan

**Status:** Completed through direct production deployment. The final production alias is `https://aurelia-link-hub.vercel.app` and the verified deployment ID is `dpl_M8Qr4ipCCcy4rLnptReXvPxtwYnW`.

## Verified local release evidence

| Item | Result | Evidence |
|---|---|---|
| Project location | `/home/ubuntu/brand-link-hub` | Managed static React/Vite project. |
| Static output | `dist/public` | The Vite configuration sets `client/` as the source root and `dist/public` as the build output. |
| Type check | Passed | `pnpm check` completed with exit code 0 on 2026-08-22. |
| Production build | Passed | `pnpm build` completed with exit code 0 on 2026-08-22. |
| Visual review | Passed | Desktop 1280×720 and mobile 375×812 full-page inspections completed. |
| Asset condition | Passed | All `/manus-storage/` paths were removed; public stock campaign and product imagery rendered successfully on the final Vercel alias. |

## Proposed release path

The completed path is a **direct Vercel deployment** through the approved connector. Git linking was unavailable because the Vercel workspace did not have a GitHub Login Connection. The verified source is public on GitHub `main`, and Vercel deployed the static Vite build with `pnpm build`, `dist/public`, and an SPA fallback rewrite for direct unknown routes.

| Stage | Change | Verification | Rollback |
|---|---|---|---|
| 1. Source inspection | Check current remotes, authentication, ignored files, and intended target. | No secrets, build output, or dependency folders in the proposed source set. | Stop without external change. |
| 2. Repository publication | Create or reuse only the specifically approved repository and push `main`. | Canonical repository URL, branch, and commit SHA. | Do not force-push; revert with a new commit only if needed. |
| 3. Vercel preview | Create/link the approved project and deploy to the approved preview or production target. | Deployment reaches `READY`; fetch final URL returns 2xx. | Promote nothing; delete only with separately approved destructive action. |
| 4. Asset and interaction check | Request the final alias and image paths; verify campaign, product, logo, link, and newsletter surfaces. | All prominent assets load and no console/runtime failures block core interactions. | Keep or return to prior deployment; fix source before a new release. |

## Required approval record

The following fields are intentionally unresolved. They are required before GitHub publication or Vercel deployment because those are external, potentially public actions.

| Approval field | Current state | Needed confirmation |
|---|---|---|
| GitHub owner and repository name | Approved | `christpor/aurelia-link-hub`. |
| Repository visibility | Approved | Public. |
| Source push | Approved | Push the verified source to `main`. |
| Vercel team | Approved | `porkh377-2742's projects` (`team_WYxqfRT5HsdijR11tIMxUyZM`). |
| Vercel project name | Approved | `aurelia-link-hub`. |
| Deployment target | Approved | Production. |
| Deployment mode | Approved | Direct Vercel deployment through the configured connector; Git linking remains blocked by Vercel's GitHub Login Connection requirement. |

## Residual risks

The application contains demonstration content, including product names, prices, email copy, social links, and `example.com` destinations. The newsletter handler intentionally does not transmit email addresses. Before a business launch, the brand owner should replace placeholder destinations, select a newsletter provider, and connect analytics with approved consent handling.
