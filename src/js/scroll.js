import refs from './refs';
import fetchImage from './search-image';

export default function infinityScroll() {
  console.log('infinityScroll');

  let options = {
    rootMargin: '5px',
    root: null,
    threshold: 1,
  };
  let obs = function (entries, observer) {
    entries.forEach(entry => {
      console.log('obs', observer);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        fetchImage();
      }
    });
  };
  const observer = new IntersectionObserver(obs, options);
  observer.observe(refs.galleryContainer.lastElementChild);
}
