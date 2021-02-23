import * as basicLightbox from 'basiclightbox';
import refs from './refs';
import 'basicLightbox/src/styles/main.scss';

const lightBox = () => {
  refs.galleryContainer.addEventListener('click', openModal);
  function openModal(event) {
    if (event.target.nodeName !== 'IMG') {
      console.log('enter');
      return;
    }

    const { source } = event.target.dataset;
    const { alt } = event.target;
    basicLightbox
      .create(
        `
		<img width="1200" height="900" src="${source}" alt='${alt}'>
	`,
      )
      .show();
  }
};

export default lightBox;
