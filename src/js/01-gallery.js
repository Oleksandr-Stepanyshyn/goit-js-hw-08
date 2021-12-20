import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const refs = {
    galleryList: document.querySelector(".gallery"),
};

const galleryMarkup = createGalleryMarkup(galleryItems);
console.log(galleryMarkup);
refs.galleryList.innerHTML = galleryMarkup;

function createGalleryMarkup(gallery) {
    return gallery.map(({ preview, original, description }) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a></li>`
}).join("");
};

var lightbox = new SimpleLightbox('.gallery li a', { captionsData: 'alt', captionDelay: 250 });
