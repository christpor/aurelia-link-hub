# GitHub and Vercel Release Plan

**Status:** Approved for release; external publication has not yet been performed.

## Verified local release evidence

| Item | Result | Evidence |
|---|---|---|
| Project location | `/home/ubuntu/brand-link-hub` | Managed static React/Vite project. |
| Static output | `dist/public` | The Vite configuration sets `client/` as the source root and `dist/public` as the build output. |
| Type check | Passed | `pnpm check` completed with exit code 0 on 2026-08-22. |
| Production build | Passed | `pnpm build` completed with exit code 0 on 2026-08-22. |
| Visual review | Passed | Desktop 1280×720 and mobile 375×812 full-page inspections completed. |
| Asset condition | Requires deployment-path verification | The app currently resolves generated imagery through project-managed `/manus-storage/` paths. The Vercel preview must confirm all five campaign/product/mark assets return successfully before production publication. |

## Proposed release path

The proposed path is **Git-linked Vercel deployment**. After the user confirms the repository identity, privacy setting, source push, Vercel team, project name, and target, the source will be placed in the named GitHub repository on `main`. The matching Vercel project will then be created or linked to that repository and configured with the static build command `pnpm build` and output directory `dist/public`.

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
| Deployment mode | Approved | Git-linked Vercel deployment. |

## Residual risks

The application contains demonstration content, including product names, prices, email copy, social links, and `example.com` destinations. The newsletter handler intentionally does not transmit email addresses. The release should remain in preview until the brand owner replaces this content, selects a newsletter provider, connects analytics with approved consent handling, and confirms that project-managed image paths are reachable on the Vercel deployment.
