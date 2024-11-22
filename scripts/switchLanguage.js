import { languages } from "./languages.js";

const textElements = document.querySelectorAll("[data-text]");
const submenuLinks = document.querySelectorAll(".submenu-link");

const savedLanguage = localStorage.getItem("newbornLanguage") || "en";

const applyLanguage = (language) => {
  textElements.forEach((element) => {
    const textKey = element.getAttribute("data-text");
    const translatedText = languages[language][textKey];

    if (translatedText) element.textContent = translatedText;
  });
};

applyLanguage(savedLanguage);

submenuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedLang = link.dataset.lang;
    event.target.offsetParent.togglePopover();
    handleLanguageChange(selectedLang);
  });
});

const handleLanguageChange = (language) => {
  localStorage.setItem("newbornLanguage", language);
  applyLanguage(language);
};
