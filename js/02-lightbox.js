import { galleryItems } from './gallery-items.js';


const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
    const galleryItem = `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
    `;
    return galleryItem;
};

const galleryItemsMarkup = galleryItems.map(createGalleryItem).join('');
galleryList.innerHTML = galleryItemsMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
