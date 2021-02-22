function fetchImages(searchQuery) {
  const key = '20341513-7d48bbe81977c2377736c4eb0';
  let pageStart = '1';
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageStart}&per_page=12&key=${key}`,
  )
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log('Something went wrong'));
}
export default { fetchImages };
