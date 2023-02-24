import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const imageMarkup = createImgCardsMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", imageMarkup);
galleryRef.addEventListener("click", myFunction);

function myFunction(event) {
  onGalleryContainerClick(event);
}

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

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show(() => console.log("lightbox now visible"));

  function onEscKeyPress(event) {
    if (event.code !== "Escape") return;
    instance.close();
  }
}
