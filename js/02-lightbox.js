import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = original;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = preview;
    image.alt = description;
    image.setAttribute('data-source', original);

    link.appendChild(image);
    galleryItem.appendChild(link);

    return galleryItem;
};

const galleryItemsMarkup = galleryItems.map(createGalleryItem);
galleryList.append(...galleryItemsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);
