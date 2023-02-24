import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const imageMarkup = createImgCardsMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", imageMarkup);

function createImgCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a></li>`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

gallery.on("show.simplelightbox", function () {});
