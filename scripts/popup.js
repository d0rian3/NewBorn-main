const allImages = document.querySelectorAll(".gallery img");
const popup = document.querySelector(".pop-up");
const popupText = document.querySelector(".pop-up span");
const popupImage = document.querySelector(".pop-up img");

allImages.forEach(
  (img) =>
    (img.onclick = () => {
      popup.style.display = "block";
      popupImage.src = img.getAttribute("src");
    }),
);

popupText.onclick = () => (popup.style.display = "none");

popup.onclick = (event) => {
  if (event.target === event.currentTarget) popup.style.display = "none";
};
