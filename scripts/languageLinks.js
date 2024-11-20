const languageLinks = document.querySelectorAll(".submenu-link");
const menuCheckbox = document.querySelector(".MenuToggle input");

languageLinks.forEach((link) =>
  link.addEventListener("click", () => (menuCheckbox.checked = false)),
);
