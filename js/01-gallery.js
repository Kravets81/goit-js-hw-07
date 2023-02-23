import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const imageMarkup = createImgCardsMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", imageMarkup);
galleryRef.addEventListener("click", onGalleryContainerClick);

function createImgCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onGalleryContainerClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show(() => console.log("lightbox now visible"));

  galleryRef.addEventListener("keydown", (event) => {
    if (event.code !== "Escape") {
      return;
    }

    instance.close(() => console.log("lightbox not visible anymore"));
  });
}
