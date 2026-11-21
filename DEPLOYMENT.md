# Deployment and handover

## Current delivery model

The portfolio is a static site made of HTML, CSS, and JavaScript. There
is no build command, server runtime, environment variable, or backend.
The contact form only prepares a WhatsApp click-to-chat message;
visitors must review it and press Send in WhatsApp.

## Before publishing

The profile image and CV in `assets/` are linked on the portfolio.
Include the entire `assets/` folder in the published site so the image
and CV links work.

Also review the site for approved real project descriptions and
screenshots. Current project cards are placeholders. Do not publish
confidential marketplace/account information.

## Publish as a static site with Netlify Drop

1. Confirm the publication checks above and save the latest project
   files.
2. Open the local site with `Start-Process .\index.html` from PowerShell
   and run through the checks in the handover checklist below.
3. Sign in to a Netlify account and open
   [Netlify Drop](https://app.netlify.com/drop).
4. Drag the project folder contents (`index.html`, `styles.css`,
   `script.js`, `project-data.js`, and approved public assets, if any)
   into the deploy area. Do not upload the `docs/` folder unless those
   internal planning documents are intentionally meant to be public.
5. Open the generated HTTPS site URL and verify the profile image, CV
   link, navigation, project details, contact form, and WhatsApp handoff.
6. To publish updates, repeat the drag-and-drop deployment with the
   updated public site files. Configure a custom domain in Netlify only
   if one is available and desired.

The deployment process itself has not been run because no hosting
account or public domain is configured in this project.

## Hosting elsewhere

The public site files can be uploaded to any static web host. Set its
document/publish root to the folder containing `index.html`. Do not run
a build command. Ensure `index.html`, `styles.css`, `script.js`, and
`project-data.js` are in that same public root. Follow the chosen
provider's HTTPS and custom-domain setup instructions.

## Handover checklist

- [ ] Confirm the profile image displays and the CV opens or downloads
  from the deployed site.
- [ ] Supply approved project details/screenshots; replace the
  placeholders in `project-data.js` and redact client information.
- [ ] Confirm any additional eBay services, specific Etsy tasks, or
  specific web-development technologies before advertising them.
- [ ] Check all header/footer links, contact destinations, form
  validation, project dialog keyboard close, and narrow-screen layout on
  the deployed URL.
- [ ] Submit a test inquiry only if you are comfortable sending it to
  the WhatsApp account. The visitor has to press Send in WhatsApp.
- [ ] Add a backend/API integration and server-side validation/spam
  protections before describing contact as automatic delivery.

## Remaining limitations

- The WhatsApp handoff is user-sent, not automatic or delivery-confirmed.
- Client-side validation can be bypassed and is not a substitute for
  server-side validation or spam protection.
- No form submission is stored by this static site.
- Real project materials remain pending.
- A public deployment has not been created or verified.
