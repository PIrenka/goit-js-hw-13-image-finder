import imagesTpl from '../tamplates/gallery-item.hbs';
import refs from './refs';

function updateImagesMarkup(images) {
  const markup = imagesTpl(images);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateImagesMarkup;
