# Portfolio Website --- Design Specification

## 1. Visual Direction

Create a calm, premium, trustworthy portfolio for an early-career
e-commerce freelancer. Avoid clutter, exaggerated claims, busy
gradients, and unnecessary decorative elements.

## 2. Brand Tokens

-   **Primary navy:** `#142B4A`
-   **Deep navy:** `#0B1B30`
-   **Accent teal:** `#2A9D98`
-   **Main background:** `#FFFFFF`
-   **Soft background:** `#F4F7FA`
-   **Main text:** `#1C2733`
-   **Muted text:** `#5D6B7A`
-   **Borders:** `#E1E7ED`
-   **Success:** `#247A52`
-   **Error:** `#B42318`

Use teal as a restrained highlight for links, focus states, and
primary-action details rather than as a large background color.

## 3. Typography

Use a clean sans-serif family such as Inter, system-ui, or a similar
available font. Establish a clear type scale: - Large hero heading with
comfortable line height - Medium section headings - Readable body copy -
Small, high-contrast labels and metadata

Avoid tiny text and long lines. Keep body text comfortable to read on
mobile.

## 4. Layout and Spacing

-   Use a centered content container with a consistent maximum width.
-   Keep generous vertical spacing between major sections.
-   Use a simple grid for service and project cards.
-   Stack columns on small screens.
-   Keep card padding and corner radii consistent.
-   Use whitespace to create hierarchy instead of excessive borders or
    shadows.

## 5. Navigation

-   Clean top navigation with name/wordmark on the left.
-   Links for Home, About, Services/Skills, Projects, CV, and Contact.
-   On mobile, use an accessible menu button and make sure navigation
    can be operated by keyboard.
-   Clearly indicate the current page or section where practical.

## 6. Home Page

### Hero

-   Two-column layout on desktop: introduction on the left and profile
    photo on the right.
-   Stack the content on mobile, with the text and primary action easy
    to reach.
-   Headline: "Helping Businesses Grow Through E-commerce"
-   Use the approved supporting introduction from `Requirement.md`.
-   Main CTA: View My Projects.
-   Secondary actions: About Me, Download My CV, Contact Me on WhatsApp.
-   Until a photo is supplied, show a tasteful labeled placeholder
    rather than a stock person photo.

### Lower Sections

-   Short introduction
-   Confirmed skills and services
-   Featured projects, using labeled placeholders until real work is
    supplied
-   Clear contact CTA

Do not show fake statistics, testimonial cards, ratings, client logos,
or revenue results.

## 7. About Page

Present education and professional background in a simple readable
layout. Separate confirmed experience from interests and future goals.
Do not imply that technical interests are advanced professional
services.

## 8. Services and Skills Cards

Use four consistent cards: eBay, Etsy, E-commerce, and Web
Development. - Show only confirmed activities. - For unconfirmed items,
display a neutral note such as "Additional services to be confirmed"
during development; remove or replace this note before launch. - Mark
web development knowledge as basic.

## 9. Project Gallery

-   Responsive grid with consistent image aspect ratios.
-   Project title and category visible without opening the project.
-   Detail view/lightbox should show description, role, tools,
    screenshots, and optional URL when provided.
-   Use a neutral placeholder illustration or labeled empty state; never
    imply placeholder content is a real client project.
-   Provide a simple documented content source or data structure for
    adding, editing, and removing projects.
-   Do not expose sensitive client information in images or
    descriptions.

## 10. CV Section

-   Clean preview panel with filename/status.
-   Download button should be disabled or clearly marked "CV coming
    soon" until the real PDF is supplied.
-   Provide a print-friendly layout if the CV is also presented as an
    HTML page.
-   Avoid making a fake CV file.

## 11. Contact Page

-   Clear, low-friction form with labels above inputs.
-   Inline validation messages and an accessible status region.
-   Distinguish validation errors, sending state, actual success, and
    backend failure.
-   Do not show success until the server confirms acceptance.
-   Display direct email, WhatsApp, location, Instagram, and LinkedIn
    links.

## 12. Interaction and Motion

-   Subtle button and card hover states.
-   Short transitions; respect `prefers-reduced-motion`.
-   Visible keyboard focus rings.
-   Lightbox must close with an explicit close button and Escape key.
-   Ensure interactive elements have meaningful accessible names.

## 13. Responsive Behavior

-   **Mobile:** single-column content, compact navigation,
    touch-friendly controls.
-   **Tablet:** flexible two-column sections where space permits.
-   **Desktop:** spacious grid and two-column hero.
-   Avoid horizontal scrolling and test at narrow viewport widths.

## 14. Imagery

Use only: - Owner-supplied profile photo - Owner-supplied project
screenshots - Owner-supplied CV - Neutral design placeholders clearly
labeled as placeholders

Optimize image dimensions and file size. Add descriptive alt text. Never
use confidential account screens without redaction.

## 15. Quality Checklist

-   Consistent spacing, colors, and typography
-   No fabricated portfolio content
-   Mobile layout verified
-   Keyboard and focus behavior verified
-   Contrast and form labels checked
-   Broken links and missing files checked
-   Reduced-motion preference respected
