import{a as w,S,i as a}from"./assets/vendor-B7mYVNgO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&p(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const q="55068673-7a1553b3dfa5acdc200b34057",R="https://pixabay.com/api/";async function f(s,o=1){return(await w.get(R,{params:{key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),y=document.querySelector(".load-more"),B=new S(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(e=>`
<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
  </a>

  <div class="info">
    <p class="info-item">
      <span class="label">Likes</span>
      <span class="value">${e.likes}</span>
    </p>
    <p class="info-item">
      <span class="label">Views</span>
      <span class="value">${e.views}</span>
    </p>
    <p class="info-item">
      <span class="label">Comments</span>
      <span class="value">${e.comments}</span>
    </p>
    <p class="info-item">
      <span class="label">Downloads</span>
      <span class="value">${e.downloads}</span>
    </p>
  </div>
</li>`).join("");m.insertAdjacentHTML("beforeend",o),B.refresh()}function E(){m.innerHTML=""}function L(){h.classList.remove("is-hidden")}function c(){h.classList.add("is-hidden")}function b(){y.classList.remove("is-hidden")}function i(){y.classList.add("is-hidden")}const v=document.querySelector(".form"),M=document.querySelector(".load-more");i();let d="",n=1,u=0;v.addEventListener("submit",$);M.addEventListener("click",O);async function $(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){c(),a.error({message:"Enter search word!",position:"topRight"});return}d=o,n=1,E(),i();try{L();const e=await f(d,n);if(u=e.totalHits,!e.hits||e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits),u>n*15?b():a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{a.error({message:"Error loading images",position:"topRight"})}finally{c(),v.reset()}}async function O(){i(),n+=1;try{L();const s=await f(d,n);g(s.hits),P(),n*15>=u?(i(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch{a.error({message:"Error loading images",position:"topRight"})}finally{c()}}function P(){const s=document.querySelector(".gallery-item");if(!s)return;const{height:o}=s.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
