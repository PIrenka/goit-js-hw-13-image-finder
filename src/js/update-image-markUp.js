import imagesTpl from '../tamplates/gallery-item.hbs';
import refs from './refs';

function updateImagesMarkup(hits) {
  const markup = imagesTpl(hits);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateImagesMarkup;
