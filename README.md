# Muhammad Farhan — Portfolio

This is a lightweight, static portfolio built with plain HTML, CSS, and JavaScript. It has no build step, package installation, or third-party runtime dependencies.

## Run locally

In PowerShell, from the project folder:

```powershell
Start-Process .\index.html
```

The site can also be hosted as static files. No environment variables are currently required.

## Project structure

```text
index.html       Portfolio sections, shared navigation/footer, metadata
styles.css       Design tokens, responsive styles, and shared components
script.js        Mobile navigation, project dialog, and contact validation
project-data.js  Editable project entries for the gallery
assets/          Owner-provided files, pending confirmation for publication
docs/            Requirements, design, roadmap, rules, and project memory
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for static hosting steps, the
remaining-assets checklist, and publication cautions.

## Update project entries

Edit `window.portfolioProjects` in `project-data.js`. Each entry supports:

```js
{
  title: "Approved project title",
  category: "eBay Account Management",
  description: "Owner-approved, non-confidential project description.",
  role: "Confirmed role",
  tools: "Confirmed tools",
  screenshots: [
    { src: "assets/approved-project-image.jpg", alt: "Descriptive image text" }
  ],
  url: ""
}
```

To add a project, add another entry. To edit one, update its fields. To remove one, delete its entry. Valid categories include `eBay Account Management`, `Etsy Projects`, `E-commerce`, and `Web Development`. Use only owner-approved images and redact client/customer information before publishing. The existing entries are explicit placeholders, not real project claims. Multiple screenshots can be navigated in the detail dialog. Set `url` only to an approved public project URL.

## Profile photo and CV

The current site uses a labeled profile placeholder and a disabled CV state. Workspace files named `assets/ProfileImage.jpeg` and `assets/Muhammad_Farhan_CV.pdf` are not linked because the project records still require owner confirmation that they are approved final assets. After confirmation, replace the profile placeholder markup in `index.html` with an image using descriptive alt text and update its styling as needed. For an approved CV, update the CV section to link to the confirmed PDF; do not point to an unapproved or fabricated file.

## Contact and integrations

The contact form validates its fields in the browser, then opens a WhatsApp click-to-chat link addressed to the approved number with the visitor's entered details prefilled. The visitor must review and press Send in WhatsApp. The form also displays a link to the prepared message as an alternative. The website does not claim that a message was delivered. If JavaScript is disabled, the form stays hidden and a direct WhatsApp link is provided instead.

This is not automatic WhatsApp sending or a server-backed form: there is no WhatsApp Business API integration, backend validation, rate limiting, or server-side spam protection. No form submission is sent to or stored by this static site. The prepared message is handed to WhatsApp only when its link is opened. No credentials or environment variables are used.

Direct email, WhatsApp, Instagram, and LinkedIn links use the details supplied in the requirements. The displayed WhatsApp click-to-chat links use the approved phone number and prefilled message.
