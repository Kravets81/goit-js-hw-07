import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const imageMarkup = createImgCardsMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", imageMarkup);
galleryRef.addEventListener("click", onGalleryContainerClick);

function createImgCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}

function onGalleryContainerClick(event) {
  event.preventDefault();

  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  gallery.on("show.simplelightbox", function () {});
}
