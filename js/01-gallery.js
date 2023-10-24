import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

document.querySelector(".gallery").addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    event.preventDefault();
    const imageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${imageUrl}" width="800" height="600">
    `);

    instance.show();
  }
});
