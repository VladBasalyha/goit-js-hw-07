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

gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
	// do something…
});
