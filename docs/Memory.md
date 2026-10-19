# Memory.md --- Project Memory and Continuity Log

## Purpose

This file is the persistent project memory for the Muhammad Farhan
Portfolio Website. The AI coding assistant must maintain it as the
project evolves so work can continue accurately across sessions without
repeatedly rediscovering decisions.

## Mandatory Update Rule

After completing any meaningful task, implementation step, test, or
decision, update this file before finishing the response.

The AI must: 1. Read this file at the beginning of every work session,
along with `Requirement.md`, `Design.md`, `Phase.md`, and `Rule.md`. 2.
Record only verified facts, implemented changes, confirmed decisions,
test results, and genuine blockers. 3. Update the relevant sections
rather than blindly appending repeated information. 4. Preserve useful
existing history; do not erase earlier decisions unless they are
superseded. Mark superseded decisions clearly. 5. Never claim a feature
is implemented or tested unless the repository and test results verify
it. 6. If the environment cannot write files, explicitly tell the owner
that `Memory.md` was not updated and provide the proposed update for
them to save. 7. Keep the file concise, factual, and useful for the next
session. 8. Never store passwords, API keys, access tokens, secrets,
customer data, or private client information here.

## Project Identity

-   **Project:** Muhammad Farhan Professional Portfolio Website
-   **Owner:** Muhammad Farhan
-   **Purpose:** Present confirmed e-commerce marketplace experience,
    skills, projects, education, CV, and contact options to
    international clients.
-   **Project source of truth:** `Requirement.md`, `Design.md`,
    `Phase.md`, and `Rule.md`.
-   **Roadmap constraint:** Exactly four phases, as defined in
    `Phase.md`. Do not add a fifth phase.

## Confirmed Owner Information

-   Professional title: E-commerce Freelancer \| eBay & Etsy Specialist
-   Location: Multan, Punjab, Pakistan
-   Education: BS Computer Science, Emerson University Multan
-   Academic batch: 2024--2028
-   Current semester: 5th Semester
-   Email: farhanchandia098@gmail.com
-   WhatsApp: +923220796724
-   Instagram: https://www.instagram.com/farhan_chandia_4
-   LinkedIn: https://www.linkedin.com/in/muhammad-farhan-a19639357
-   Profile photo: Awaiting owner upload
-   Final CV PDF: Awaiting owner upload

Do not infer or invent additional personal details, qualifications,
certifications, achievements, clients, metrics, or skills.

## Confirmed Content Boundaries

-   eBay: client account management is confirmed.
-   Etsy: marketplace experience is confirmed; specific duties must not
    be invented.
-   E-commerce: describe marketplace operations and business support
    only at the confirmed/general level.
-   Web development: basic knowledge only; do not list specific
    technologies until confirmed.
-   Projects and screenshots: use clearly labeled placeholders until
    real, approved materials are supplied.
-   Protect client confidentiality and redact sensitive screenshots.

## Current Project Status

-   **Current phase:** Phase 4 --- Testing, Deployment, and Handover.
-   **Phase status:** Phase 1 and Phase 2 complete. Phase 3 WhatsApp
    handoff is implemented, but server-side delivery/security is not.
    Phase 4 testing and handover documentation are implemented; Phase 4
    is not fully complete until the site is deployed and verified on its
    public URL.
-   **Current implementation stack:** Plain HTML, CSS, and JavaScript;
    no build step or third-party dependencies.
-   **Repository/folder structure:** Root `index.html`, `styles.css`,
    `script.js`, `project-data.js`, `README.md`, and `DEPLOYMENT.md`;
    existing `assets/` and `docs/` directories retained.
-   **Latest completed task:** Phase 4 responsive/accessibility and link
    verification plus static deployment and owner handover guidance.
-   **Latest verified tests:** Browser checked responsive widths
    320–1440 px without horizontal overflow; required and malformed
    input errors, focus movement to invalid first field, optional phone
    validation, prepared WhatsApp destination/message, no WhatsApp
    opener on invalid submission, no unresolved internal anchors, safe
    `target="_blank"` rel attributes, one h1 and metadata, reduced-motion
    transition, no browser errors, and no editor diagnostics. Actual
    WhatsApp delivery and public hosting remain unverified.
-   **Known missing assets:** Approved final profile photo, finalized CV
    status, and real project screenshots/details. Files named
    `ProfileImage.jpeg` and `Muhammad_Farhan_CV.pdf` are present in
    `assets/`, but have not been confirmed as approved publication
    assets and are not linked by the site.
-   **Pending confirmations:** Specific Etsy tasks, additional eBay
    services, and specific web development technologies.

## Current Roadmap

1.  **Phase 1 --- Foundation and Project Setup:** project structure,
    stack, design tokens, shared layout, responsive navigation, footer,
    placeholders, and local run instructions.
2.  **Phase 2 --- Portfolio Pages and Content:** Home, About,
    Skills/Services, Projects, CV, Contact UI, and WhatsApp/social
    links.
3.  **Phase 3 --- Contact Form, Security, and Functional Integration:**
    real backend/email integration, validation, spam protection, and
    secure handling.
4.  **Phase 4 --- Testing, Deployment, and Handover:**
    responsive/accessibility checks, SEO, deployment guide, maintenance
    guide, and remaining-assets checklist.

Do not advance the current phase unless its completion criteria have
been checked and documented.

## Technical Decisions

Record each confirmed decision with its reason and date. Do not present
a proposal as a final decision.

  -----------------------------------------------------------------------
  Date              Decision          Reason            Status
  ----------------- ----------------- ----------------- -----------------
  2026-10-19        Plain HTML, CSS,  Lightweight,      Confirmed;
                    and JavaScript    maintainable,     no build step or
                                      and no build      dependencies
                                      tooling needed    
  2026-10-19        Contact form      Owner selected    Confirmed:
                    prepares          WhatsApp          visitor must
                    WhatsApp          click-to-chat     review and send
                    message; visitor  over automatic    in WhatsApp;
                    presses Send      API sending       no automatic
                                                        delivery

  -----------------------------------------------------------------------

## Implementation Log

Add newest entries first. Use this format:

### YYYY-MM-DD --- Short task title

-   **Phase:**
-   **Changes made:**
-   **Files created/modified:**
-   **Verification performed:**
-   **Result:** Pass / Partial / Fail / Not tested
-   **Known issues or blockers:**
-   **Next step:**

### 2026-10-19 --- Phase 4 verification and handover prepared

-   **Phase:** Phase 4 --- Testing, Deployment, and Handover.
-   **Changes made:** Added `DEPLOYMENT.md` with static-host deployment
    guidance, owner-maintenance/publication checklist, and limitations.
    Linked it from `README.md`. Added client-side optional-phone format
    validation after browser verification identified an incompatible
    HTML pattern syntax.
-   **Files created/modified:** Added `DEPLOYMENT.md`; updated
    `README.md`, `index.html`, `script.js`, and `docs/Memory.md`.
-   **Verification performed:** Tested responsive widths, form
    validation/focus/WhatsApp URL construction, internal links,
    external-link safety attributes, SEO metadata, reduced-motion
    styling, browser console/runtime, and editor diagnostics.
-   **Result:** Partial. Local tests and handover notes pass; public
    deployment was not performed.
-   **Known issues or blockers:** No hosting account/domain is
    configured. Existing photo and CV files are unconfirmed and must be
    excluded from a public deployment copy unless approved. The
    WhatsApp form is a user-sent click-to-chat handoff, not automatic
    delivery; no backend, server-side validation, or spam protections
    are present.
-   **Next step:** Before public launch, confirm assets and deploy the
    approved public files to the selected host; verify all flows on that
    HTTPS URL. Keep the contact integration limitations clear.

### 2026-10-19 --- Phase 3 WhatsApp contact handoff implemented

-   **Phase:** Phase 3 --- Contact Form, Security, and Functional
    Integration.
-   **Changes made:** Added labeled first name, email, optional phone,
    and message fields; inline accessible validation; WhatsApp message
    preparation addressed to the approved number; alternate prepared
    message link; honest instructions that visitors must press Send;
    and a no-JavaScript direct-contact fallback. Documented the
    client-side-only behavior and its security limitations.
-   **Files created/modified:** Modified `index.html`, `styles.css`,
    `script.js`, `README.md`, and `docs/Memory.md`.
-   **Verification performed:** In a browser, checked required-field
    errors, malformed email rejection, valid message encoding,
    optional phone handling, correct WhatsApp URL, fallback link,
    responsive layouts, and browser/editor diagnostics. The WhatsApp
    opener was intercepted during tests; no real message was sent.
-   **Result:** Partial. Requested WhatsApp click-to-chat flow works as
    prepared; Phase 3 completion criteria for backend confirmation,
    server-side validation, and server-side spam protection are not met.
-   **Known issues or blockers:** This static client-side form does not
    send messages automatically, provide backend acceptance, rate-limit
    requests, or offer server-side spam protection. Visitors must send
    the prepared message themselves in WhatsApp. It must not be
    described as an automatically delivered form.
-   **Next step:** Phase 3's server-side contact and spam-protection
    requirements need an owner-selected, configured backend and
    WhatsApp Business API if automatic sending is required. Otherwise
    retain this explicitly manual WhatsApp handoff and report the
    remaining limitation.

### 2026-10-19 --- Phase 2 portfolio content implemented

-   **Phase:** Phase 2 --- Portfolio Pages and Content.
-   **Changes made:** Replaced the initial content scaffold with the
    approved biography and education details, confirmed skills/services,
    labeled project placeholders with a data-driven accessible detail
    dialog and screenshot navigation, CV pending state, and direct
    email, WhatsApp, Instagram, and LinkedIn links. Updated project
    maintenance and local-run documentation.
-   **Files created/modified:** Modified `index.html`, `styles.css`,
    `script.js`, `README.md`, and `docs/Memory.md`; added
    `project-data.js`.
-   **Verification performed:** Checked browser rendering, project
    dialog Escape/close behavior and image navigation, responsive menu,
    internal targets, external destinations, CV link absence, responsive
    overflow at 320–1440 px, browser runtime errors, and editor
    diagnostics.
-   **Result:** Pass. Phase 2 completion criteria met.
-   **Known issues or blockers:** Contact form/backend intentionally
    remains for Phase 3. Profile photo and CV files exist in the
    workspace but remain unused pending owner confirmation; real
    projects/screenshots and unconfirmed service details are not
    published as facts.
-   **Next step:** Begin Phase 3 when authorized. Select an email/backend
    provider; supply any required credentials through secure environment
    variables, never browser code.

### 2026-10-19 --- Phase 1 foundation implemented

-   **Phase:** Phase 1 --- Foundation and Project Setup.
-   **Changes made:** Added a semantic, responsive site shell with
    shared design tokens, reusable buttons/cards, mobile navigation,
    footer, SEO metadata, and clearly labeled profile, CV, and project
    placeholders. Documented the stack and local run command.
-   **Files created/modified:** Created root `index.html`, `styles.css`,
    `script.js`, and `README.md`; updated `docs/Memory.md`.
-   **Verification performed:** Opened the site locally in a browser;
    tested responsive widths of 320, 390, 768, and 1440 px, mobile menu
    open/close and Escape behavior, internal anchor targets, metadata,
    and browser errors; checked changed files with editor diagnostics.
-   **Result:** Pass. Phase 1 completion criteria met.
-   **Known issues or blockers:** The `assets/` directory contains a
    profile image and PDF, but project documentation says the final
    assets are awaiting confirmation. They remain unused pending owner
    confirmation. Contact backend, final content, and later-phase
    functionality are intentionally not implemented.
-   **Next step:** Phase 2 was completed in a later implementation log
    entry; photo and CV publication approval remains unresolved.

Initial entry: \### 2026-10-19 --- Planning documents prepared -
**Phase:** Before Phase 1 - **Changes made:** Prepared project
requirements, design specification, four-phase roadmap, and development
rules. - **Files created/modified:** `Requirement.md`, `Design.md`,
`Phase.md`, `Rule.md`. - **Verification performed:** Files were
generated and packaged for download; website repository implementation
has not yet been verified. - **Result:** Planning documents created;
website implementation not started/verified. - **Known issues or
blockers:** Owner photo, final CV, and real project materials are still
pending. - **Next step:** Inspect the actual project workspace and begin
Phase 1 only.

## Current Blockers and Open Questions

Keep only unresolved items here. Remove or mark an item resolved once
verified.

-   The owner must confirm whether the existing profile image and PDF
    are approved for publication before replacing their placeholders;
    otherwise exclude them from the public deployment copy.
-   Real project details and screenshots must be supplied before
    publishing project cards as genuine work.
-   Confirm additional eBay services, specific Etsy duties, and any web
    development technologies before advertising them.
-   Select a hosting account/domain and verify the public HTTPS deploy.
-   The contact form intentionally prepares a WhatsApp click-to-chat
    message; the visitor presses Send. Server-side validation, backend
    delivery confirmation, and spam protection remain unimplemented.

## Next Session Instructions

At the start of the next session: 1. Read this file and the four
source-of-truth documents. 2. Inspect the current repository and compare
it with the last recorded implementation log. 3. Verify the current
phase and avoid repeating already completed work. 4. Continue the next
unfinished task in the current phase. 5. Test changes where possible. 6.
Update this file with verified progress, files changed, test results,
blockers, and the next step. 7. Do not claim completion if verification
has not occurred.

## Update Template

Copy this structure for each meaningful update:

### YYYY-MM-DD --- \[Task\]

-   **Phase:**
-   **Changes made:**
-   **Files created/modified:**
-   **Verification performed:**
-   **Result:** Pass / Partial / Fail / Not tested
-   **Known issues or blockers:**
-   **Next step:**

## Memory Integrity Rules

-   This file is a project log, not a replacement for source code or the
    requirements.
-   `Requirement.md` defines what the website must do.
-   `Design.md` defines how it should look and feel.
-   `Phase.md` defines the only four allowed development phases.
-   `Rule.md` defines implementation and quality constraints.
-   If project files conflict, report the conflict and ask for
    clarification when it materially affects implementation.
-   Do not record speculative assumptions as facts.
-   Do not store secrets or confidential customer/client information.
