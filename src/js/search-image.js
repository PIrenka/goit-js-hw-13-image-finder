import refs from './refs';
import lightBox from './lightbox';
import api from './apiService';
import updateImagesMarkup from '../js/update-image-markUp';
import '../sass/main.scss';
import infinityScroll from './scroll';

import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/BrightTheme.css';

refs.searchForm.addEventListener('submit', searchFounder);

function searchFounder(event) {
  console.log('searchFounder');

  event.preventDefault();
  const form = event.currentTarget;
  api.query = form.elements.query.value;
  if (api.query === '') {
    notice({ text: 'input is empty', delay: 1500 });
    refs.galleryContainer.innerHTML = '';
    return;
  }

  refs.galleryContainer.innerHTML = '';
  fetchImage();
  api.resetPage();
  form.reset();
  lightBox();
  return;
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
