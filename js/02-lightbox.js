import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRoot = document.querySelector(".gallery");
const cardsMarkup = makeGalleryMarkup(galleryItems);

galleryRoot.insertAdjacentHTML("beforeend", cardsMarkup);

function makeGalleryMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`;
		})
		.join("");
}

galleryRoot = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
});
