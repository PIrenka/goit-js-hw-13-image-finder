const apiKey = '20341513-7d48bbe81977c2377736c4eb0';
export default {
  searchQuery: '',
  page: 1,
  perPage: 12,
  apiService() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${apiKey}`;

    return fetch(url)
      .then(res => res.json())
      .then(({ images }) => {
        this.page += 1;
        return images;
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
