import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".load-more");

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
       img => `
<li class="gallery-item">
  <a class="gallery-link" href="${img.largeImageURL}">
    <img
      class="gallery-image"
      src="${img.webformatURL}"
      alt="${img.tags}"
    />
  </a>

  <div class="info">
    <p class="info-item">
      <span class="label">Likes</span>
      <span class="value">${img.likes}</span>
    </p>
    <p class="info-item">
      <span class="label">Views</span>
      <span class="value">${img.views}</span>
    </p>
    <p class="info-item">
      <span class="label">Comments</span>
      <span class="value">${img.comments}</span>
    </p>
    <p class="info-item">
      <span class="label">Downloads</span>
      <span class="value">${img.downloads}</span>
    </p>
  </div>
</li>`
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader() {
  loader.classList.remove("is-hidden");
}

export function hideLoader() {
  loader.classList.add("is-hidden");
}

export function showLoadMoreBtn() {
  loadMoreBtn.classList.remove("is-hidden");
}

export function hideLoadMoreBtn() {
  loadMoreBtn.classList.add("is-hidden");
}
