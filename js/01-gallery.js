import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
//  Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryRoot = document.querySelector(".gallery");

const cardsMarkup = makeGalleryMarkup(galleryItems);

galleryRoot.insertAdjacentHTML("beforeend", cardsMarkup);
// galleryRoot.insertAdjacentHTML("beforeend", cardsMarkup);

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
	const instance = basicLightbox.create(`
    <div class="modal">
      <img src = "${evt.target.dataset.source}">
    </div>
`);

	instance.show();
}
