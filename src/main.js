import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreBtn,
  hideLoadMoreBtn,
} from "./js/render-functions.js";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

hideLoadMoreBtn();

let currentQuery = "";
let currentPage = 1;
let totalHits = 0;

form.addEventListener("submit", onSearch);
loadMoreBtn.addEventListener("click", onLoadMore);

async function onSearch(e) {
  e.preventDefault();

  const query = e.target.elements["search-text"].value.trim();
  if (!query) {
    hideLoader();
    iziToast.error({
      message: "Enter search word!",
      position: 'topRight',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;

  clearGallery();
  hideLoadMoreBtn();

  try {
    showLoader();

    const data = await getImagesByQuery(currentQuery, currentPage);

    totalHits = data.totalHits;

    if (!data.hits || data.hits.length === 0) {
      iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: 'topRight',
      });
      return;
    }
    createGallery(data.hits);

    if (totalHits > currentPage * 15) {
      showLoadMoreBtn();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: "Error loading images",
      position: 'topRight',
    });
  } finally {
    hideLoader();
    form.reset();
  }
}

async function onLoadMore() {
  currentPage += 1;
  try {
    showLoader()

    const data = await getImagesByQuery(currentQuery, currentPage);
    
    createGallery(data.hits);

    smoothScroll();

    const loadedImages = currentPage * 15;
    
    if (loadedImages >= totalHits) {
      hideLoadMoreBtn();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } 
  } catch (error) {
    iziToast.error({
      message: "Error loading images",
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function smoothScroll() {
  const card = document.querySelector(".gallery-item");
  if (!card) {
    return;
  }

  const { height } = card.getBoundingClientRect();
  window.scrollBy({
    top: height * 2,
    behavior: "smooth"
  });
} 