import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

const form = document.querySelector(".form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const query = event.target.elements["search-text"].value.trim();

  clearGallery();
  showLoader();

  if (!query) {
    hideLoader();
    iziToast.error({ message: "Enter search word!" });
    return;
  }

  getImagesByQuery(query)
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        iziToast.error({
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        message: "Error loading images", 
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
});