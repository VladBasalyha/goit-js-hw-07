import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const newItems = [];

galleryItems.map((image) => {
	const newImage = document.createElement("img");
	newImage.src = `${image.preview}`;
	newItems.push(newImage);
});
gallery.append(...newItems);
