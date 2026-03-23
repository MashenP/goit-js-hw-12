import{a as w,S,i as a}from"./assets/vendor-B7mYVNgO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))p(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&p(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const R="55068673-7a1553b3dfa5acdc200b34057",q="https://pixabay.com/api/";async function f(t,o=1){return(await w.get(q,{params:{key:R,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}const h=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".load-more"),B=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(t){const o=t.map(e=>`
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
</li>`).join("");h.insertAdjacentHTML("beforeend",o),B.refresh()}function E(){h.innerHTML=""}function L(){m.classList.remove("is-hidden")}function c(){m.classList.add("is-hidden")}function b(){g.classList.remove("is-hidden")}function i(){g.classList.add("is-hidden")}const v=document.querySelector(".form"),M=document.querySelector(".load-more");i();let d="",n=1,u=0;v.addEventListener("submit",$);M.addEventListener("click",O);async function $(t){t.preventDefault();const o=t.target.elements["search-text"].value.trim();if(!o){c(),a.error({message:"Enter search word!",position:"topRight"});return}d=o,n=1,E(),i();try{L();const e=await f(d,n);if(u=e.totalHits,!e.hits||e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(e.hits),u>n*15?b():a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),v.reset()}catch{a.error({message:"Error loading images",position:"topRight"})}finally{c()}}async function O(){i(),n+=1;try{L();const t=await f(d,n);if(!t.hits||t.hits.length===0){a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),i();return}y(t.hits),P(),n*15>=u?(i(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch{a.error({message:"Error loading images",position:"topRight"})}finally{c()}}function P(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
