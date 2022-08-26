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
			return `<a class = 'gallery__item' 
        href = '${original}'>
        <img src = '${preview}'
        class = 'gallery__image'
        alt = '${description}'/>
        </a>`;
		})
		.join("");
}

galleryRoot.addEventListener("click", getModalImage);

getModalImage(evt) {
    evt.preventDefault()
}