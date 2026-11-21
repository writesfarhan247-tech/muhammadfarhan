const header = document.querySelector("[data-site-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navList = document.querySelector("[data-nav-list]");
const year = document.querySelector("[data-current-year]");
const projectGrid = document.querySelector("[data-project-grid]");
const projectDialog = document.querySelector("[data-project-dialog]");
const dialogImage = document.querySelector("[data-dialog-image]");
const dialogControls = document.querySelector("[data-dialog-controls]");
const dialogImageCount = document.querySelector("[data-image-count]");
const dialogProjectLink = document.querySelector("[data-dialog-link]");
const dialogPlaceholderNote = document.querySelector("[data-dialog-placeholder-note]");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const whatsappFallback = document.querySelector("[data-whatsapp-fallback]");
let activeProject = null;
let activeImageIndex = 0;
let contactFormSubmitted = false;

const contactFields = [
  {
    input: document.querySelector("#contact-first-name"),
    error: document.querySelector("#first-name-error"),
    requiredMessage: "Enter your first name."
  },
  {
    input: document.querySelector("#contact-email"),
    error: document.querySelector("#email-error"),
    requiredMessage: "Enter your email address.",
    invalidMessage: "Enter a valid email address."
  },
  {
    input: document.querySelector("#contact-phone"),
    error: document.querySelector("#phone-error"),
    invalidMessage: "Use 7–40 digits and common phone punctuation (spaces, +, -, parentheses, or periods)."
  },
  {
    input: document.querySelector("#contact-message"),
    error: document.querySelector("#message-error"),
    requiredMessage: "Enter a short message."
  }
];

function setMenuOpen(isOpen) {
  header.dataset.menuOpen = String(isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

function renderProjectCards() {
  projectGrid.replaceChildren();

  for (const [index, project] of window.portfolioProjects.entries()) {
    const card = document.createElement("article");
    card.className = "project-card";

    const trigger = document.createElement("button");
    trigger.className = "project-card__trigger";
    trigger.type = "button";
    trigger.dataset.projectIndex = String(index);
    trigger.setAttribute("aria-haspopup", "dialog");
    trigger.setAttribute(
      "aria-label",
      project.screenshots.length
        ? `View ${project.category} project and screenshots`
        : `View placeholder details for ${project.category}`
    );

    const visual = document.createElement("span");
    visual.className = "project-card__visual";
    visual.setAttribute("aria-hidden", "true");

    if (project.screenshots.length) {
      visual.classList.add("project-card__visual--screenshots");
      for (const screenshot of project.screenshots) {
        const image = document.createElement("img");
        image.src = screenshot.src;
        image.alt = "";
        visual.append(image);
      }
    } else {
      visual.textContent = "Image placeholder";
    }

    const category = document.createElement("span");
    category.className = "project-card__category";
    category.textContent = project.category;

    const title = document.createElement("span");
    title.className = "project-card__title";
    title.textContent = project.title;

    const note = document.createElement("span");
    note.className = "project-card__note";
    note.textContent = project.screenshots.length
      ? `${project.screenshots.length} project screenshots`
      : "Placeholder — not a client project";

    trigger.append(visual, category, title, note);
    card.append(trigger);
    projectGrid.append(card);
  }
}

function showProjectImage() {
  const screenshots = activeProject.screenshots;
  const screenshot = screenshots[activeImageIndex];

  if (!screenshot) {
    dialogImage.replaceChildren(document.createTextNode("Project screenshot placeholder"));
    dialogImage.className = "dialog-image-placeholder";
    dialogImage.setAttribute("role", "img");
    dialogImage.setAttribute("aria-label", "Project screenshot placeholder; awaiting owner-supplied image");
    dialogImageCount.textContent = "No project screenshots supplied";
    dialogControls.hidden = true;
    return;
  }

  const image = document.createElement("img");
  image.src = screenshot.src;
  image.alt = screenshot.alt;
  dialogImage.replaceChildren(image);
  dialogImage.className = "dialog-image";
  dialogImage.removeAttribute("role");
  dialogImage.removeAttribute("aria-label");
  dialogImageCount.textContent = `${activeImageIndex + 1} of ${screenshots.length}`;
  dialogControls.hidden = screenshots.length < 2;
}

function openProjectDialog(project) {
  activeProject = project;
  activeImageIndex = 0;
  projectDialog.querySelector("[data-dialog-category]").textContent = project.category;
  projectDialog.querySelector("[data-dialog-title]").textContent = project.title;
  projectDialog.querySelector("[data-dialog-description]").textContent = project.description;
  projectDialog.querySelector("[data-dialog-role]").textContent = project.role;
  projectDialog.querySelector("[data-dialog-tools]").textContent = project.tools;
  dialogPlaceholderNote.hidden = Boolean(project.screenshots.length || project.url);
  dialogProjectLink.hidden = !project.url;

  if (project.url) {
    dialogProjectLink.href = project.url;
  } else {
    dialogProjectLink.removeAttribute("href");
  }

  showProjectImage();
  projectDialog.showModal();
}

function getFieldError(field) {
  const value = field.input.value.trim();

  if (field.input.required && !value) {
    return field.requiredMessage;
  }

  if (field.input.type === "email" && value && !field.input.validity.valid) {
    return field.invalidMessage;
  }

  if (field.input.type === "tel" && value && !/^[0-9+().\s-]{7,40}$/.test(value)) {
    return field.invalidMessage;
  }

  return "";
}

function updateFieldError(field) {
  const message = getFieldError(field);
  field.error.textContent = message;
  field.input.setAttribute("aria-invalid", String(Boolean(message)));
  return message;
}

function prepareWhatsAppMessage() {
  const values = Object.fromEntries(new FormData(contactForm).entries());
  const message = [
    "Portfolio contact request",
    `Name: ${String(values.firstName).trim()}`,
    `Email: ${String(values.email).trim()}`,
    `Phone: ${String(values.phone).trim() || "Not provided"}`,
    "",
    "Message:",
    String(values.message).trim()
  ].join("\n");
  const whatsappUrl = new URL("https://wa.me/923220796724");
  whatsappUrl.searchParams.set("text", message);
  return whatsappUrl.href;
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

navList.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
    if (projectDialog.open) {
      projectDialog.close();
    }
  }
});

for (const field of contactFields) {
  field.input.addEventListener("input", () => {
    if (contactFormSubmitted) {
      updateFieldError(field);
    }
  });

  field.input.addEventListener("blur", () => {
    if (contactFormSubmitted) {
      updateFieldError(field);
    }
  });
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  contactFormSubmitted = true;
  const invalidFields = contactFields.filter((field) => updateFieldError(field));

  if (invalidFields.length) {
    formStatus.textContent = "Please correct the highlighted fields before continuing.";
    invalidFields[0].input.focus();
    return;
  }

  const whatsappUrl = prepareWhatsAppMessage();
  whatsappFallback.href = whatsappUrl;
  whatsappFallback.hidden = false;
  formStatus.textContent = "Your message is ready in WhatsApp. Review it there and press Send to deliver it.";

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

projectGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-project-index]");
  if (trigger) {
    openProjectDialog(window.portfolioProjects[Number(trigger.dataset.projectIndex)]);
  }
});

projectDialog.querySelector("[data-dialog-close]").addEventListener("click", () => {
  projectDialog.close();
});

projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) {
    projectDialog.close();
  }
});

projectDialog.querySelector("[data-image-previous]").addEventListener("click", () => {
  activeImageIndex = (activeImageIndex - 1 + activeProject.screenshots.length) % activeProject.screenshots.length;
  showProjectImage();
});

projectDialog.querySelector("[data-image-next]").addEventListener("click", () => {
  activeImageIndex = (activeImageIndex + 1) % activeProject.screenshots.length;
  showProjectImage();
});

year.textContent = String(new Date().getFullYear());
renderProjectCards();
contactForm.hidden = false;
