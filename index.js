import{a as d,S as f,i as n}from"./assets/vendor-B7mYVNgO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=e(s);fetch(s.href,t)}})();const m="55068673-7a1553b3dfa5acdc200b34057",h="https://pixabay.com/api/";function y(a){return d.get(h,{params:{key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const p=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(a){const r=a.map(e=>`
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
</li>`).join("");p.insertAdjacentHTML("beforeend",r),g.refresh()}function b(){p.innerHTML=""}function v(){u.classList.remove("is-hidden")}function l(){u.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(b(),v(),!r){l(),n.error({message:"Enter search word!"});return}y(r).then(e=>{if(!e.hits||e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(e.hits)}).catch(e=>{console.error(e),n.error({message:"Error loading images",position:"topRight"})}).finally(()=>{l(),c.reset()})});
//# sourceMappingURL=index.js.map
