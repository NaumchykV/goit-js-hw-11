import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import searchImages from './js/pixabay-api';
import { createImages, clearImages } from './js/render-functions';

const form = document.querySelector('.gallery-form');
const input = document.querySelector('.gallery-input');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  clearImages();
  loader.classList.remove('hiden');
  event.preventDefault();
  let searchWord = input.value.trim();
  searchImages(`${searchWord}`).then(data => {
    if (data.total === 0) {
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      loader.classList.add('hiden');
      return;
    }
    if (searchWord === '') {
      iziToast.error({
        position: 'topRight',
        message: 'Please fill the input',
      });
      loader.classList.add('hiden');
      return;
    } else {
      createImages(data);
    }
    loader.classList.add('hiden');
  });
}
