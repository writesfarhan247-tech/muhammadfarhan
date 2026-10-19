# Portfolio Website --- Development Rules

These rules apply throughout all four phases.

## 1. Truth and Content Integrity

-   Use only facts confirmed by Muhammad Farhan.
-   Never invent client names, work dates, qualifications, certificates,
    achievements, statistics, revenue results, testimonials, or tools.
-   Describe web development as **basic knowledge** until specific
    technologies and ability are confirmed.
-   Describe Etsy as marketplace experience; do not claim specific Etsy
    duties until confirmed.
-   Keep "to be supplied" and "to be confirmed" items visibly marked
    during development.
-   Do not turn placeholders into claims of completed work.

## 2. Scope Control

-   `Requirement.md` defines required functionality and acceptance
    criteria.
-   `Design.md` defines the visual direction.
-   `Phase.md` must contain exactly four phases.
-   Do not add a fifth phase or expand the scope without approval.
-   If a feature is not implemented, document it as pending instead of
    claiming it works.

## 3. Code Quality

-   Prefer readable, maintainable HTML, CSS, and JavaScript unless the
    chosen builder or framework offers a clear advantage.
-   Use reusable components and consistent naming.
-   Avoid unnecessary dependencies.
-   Keep content and project data easy to update.
-   Add concise comments where behavior is not obvious.
-   Remove dead code and test after significant changes.

## 4. Responsive Design

-   Design mobile-first where practical.
-   Test mobile, tablet, and desktop layouts.
-   Prevent horizontal overflow.
-   Use touch-friendly controls and readable text.
-   Keep navigation usable at small widths.

## 5. Accessibility

-   Use semantic HTML and a logical heading hierarchy.
-   Associate every form input with a visible label.
-   Ensure keyboard access and visible focus states.
-   Provide meaningful alt text for informative images.
-   Maintain sufficient color contrast.
-   Use accessible status messages for form feedback.
-   Respect `prefers-reduced-motion`.
-   Do not rely on color alone to communicate errors or success.

## 6. Security and Privacy

-   Never put API keys, passwords, tokens, or email-service secrets in
    client-side code or public repositories.
-   Validate and sanitize untrusted form input on the server.
-   Use server-side spam protection and rate limiting where supported.
-   Do not expose client passwords, customer information, private
    financial details, or confidential dashboard screenshots.
-   Redact sensitive data from project images before publishing.
-   If an admin panel is implemented, require secure authentication and
    authorization; never rely on hiding an admin link.
-   Do not collect unnecessary personal information.

## 7. Functional Honesty

-   A form is not functional merely because it displays a success
    message.
-   Show submission success only after the backend/provider confirms
    acceptance.
-   A CV download must point to the actual supplied CV file.
-   Do not claim file uploads or project management work unless
    implemented and tested.
-   WhatsApp must use the approved number and prefilled message.
-   Verify every external link.

## 8. Project Gallery Rules

-   Use real, approved projects only.
-   Clearly label placeholder cards as examples/placeholders.
-   Support title, description, role, tools, screenshots, and optional
    project URL.
-   Make project entries easy to add, edit, and remove through a
    documented data file or secure admin system.
-   Do not publish confidential client data.

## 9. Assets and File Handling

-   Use the profile photo, project screenshots, and CV provided by the
    owner.
-   Until then, use clearly labeled placeholders.
-   Optimize images while preserving legibility.
-   Use sensible filenames and keep assets organized.
-   Never invent a download path or link.

## 10. Testing and Documentation

-   Test all navigation, CTA buttons, social links, WhatsApp links,
    lightbox controls, and form states.
-   Check console/runtime errors and missing assets.
-   Document setup, environment variables, local development,
    deployment, and content updates.
-   Keep a final list of missing assets and information that requires
    owner confirmation.

## 11. Definition of Done

A task is complete only when: - It meets the requirements and design
guidance. - It works as implemented and has been tested. - It does not
introduce unsupported claims or expose private data. - Any remaining
limitation is documented clearly.
