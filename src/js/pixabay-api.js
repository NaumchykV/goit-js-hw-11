export default function searchImages(query) {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '45140381-2d1d7d148fe8b2b4910dcca17';

  return fetch(
    `${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: `${error}`,
      });
    });
}
