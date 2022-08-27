import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);
//  Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryRoot = document.querySelector(".gallery");

const cardsMarkup = makeGalleryMarkup(galleryItems);

galleryRoot.insertAdjacentHTML("beforeend", cardsMarkup);

function makeGalleryMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
		})
		.join("");
}

galleryRoot.addEventListener("click", getModalImage);

function getModalImage(evt) {
	evt.preventDefault();
	const isGallerySwatchEl = evt.target.classList.contains("gallery__image");

	if (!isGallerySwatchEl) {
		return;
	}

	const instance = basicLightbox.create(`
	
      <img src = "${evt.target.dataset.source}">

	  `);

	window.addEventListener("keydown", escapeModalClose);
	function escapeModalClose(evt) {
		if (evt.code === "Escape") {
			instance.close();
		}
	}
	instance.show();
}
