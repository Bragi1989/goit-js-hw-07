import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>
    `;
  })
  .join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.classList.contains('gallery__image')) {
    const imageUrl = e.target.getAttribute('data-source');
    const imageAlt = e.target.getAttribute('alt');

    const instance = basicLightbox.create(`
      <img src="${imageUrl}" alt="${imageAlt}" />
    `);

    instance.show();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    basicLightbox.close();
  }
});
console.log(galleryItems);
