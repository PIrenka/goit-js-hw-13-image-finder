// const searchForm = document.querySelector('.search-form');
// const galleryContainer = document.querySelector('.gallery');

// const galleryItem = document.querySelector('.gallery-item');
// const btnSearch = document.querySelector('.btn-search');
// const btnLoader = document.querySelector('.btn-loader');
import refs from './refs';

import lightBox from './lightbox';
import api from './apiService';
import updateImagesMarkup from '../js/update-image-markUp';
import '../sass/main.scss';
import infinityScroll from './scroll';

refs.searchForm.addEventListener('submit', searchFounder);
// refs.btnSearch.addEventListener('click', searchFounder);
// refs.btnLoader.addEventListener('click', fetchImage);

function searchFounder(event) {
  console.log('searchFounder');

  event.preventDefault();
  const form = event.currentTarget;
  api.query = form.elements.query.value;
  refs.galleryContainer.innerHTML = '';
  api.resetPage();
  form.reset();
  fetchImage();
  lightBox();
}
let scrollScr = false;
function fetchImage() {
  api.fetchImages().then(image => {
    updateImagesMarkup(image);

    if (refs.galleryContainer.childNodes.length > 0) {
      if (scrollScr) {
        window.scrollTo({
          top:
            document.documentElement.scrollTop +
            document.documentElement.clientHeight,
          behavior: 'smooth',
        });
      }
    }
    scrollScr = true;
    infinityScroll();
  });
}

export default fetchImage;
