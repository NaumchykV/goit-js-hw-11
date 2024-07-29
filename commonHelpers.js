import{S as c,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function d(s){return fetch(`https://pixabay.com/api/?key=45140381-2d1d7d148fe8b2b4910dcca17&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>{iziToast.error({position:"topRight",message:`${r}`})})}function u(s){let o=new c(".gallery a",{overlay:!1,overlayOpacity:.7,nav:!0,captions:!0,captionsData:"alt",captionDelay:350});const i=document.querySelector(".gallery");let r=s.hits.map(e=>`<div class="gallery-list">
      <a href="${e.largeImageURL}">
      <img class="image" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class ="gallery-list-text">
      <div class="gallery-list-stat">
      <h5>likes</h5>
      <p>${e.likes}</p></div>
      <div class="gallery-list-stat">
      <h5>views</h5>
      <p>${e.views}</p></div>
      <div class="gallery-list-stat">
      <h5>comments</h5>
      <p>${e.comments}</p></div>
      <div class="gallery-list-stat">
      <h5>downloads</h5>
      <p>${e.downloads}</p></div></div></div>`).join("");i.insertAdjacentHTML("afterbegin",r),o.refresh()}function m(){const s=document.querySelector(".gallery");s.innerHTML=""}const f=document.querySelector(".gallery-form"),p=document.querySelector(".gallery-input"),n=document.querySelector(".loader");f.addEventListener("submit",g);function g(s){m(),n.classList.remove("hiden"),s.preventDefault();let o=p.value.trim();d(`${o}`).then(i=>{i.total===0&&l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),o===""?l.error({position:"topRight",message:"Please fill the input"}):u(i)}).catch(i=>{l.error({position:"topRight",message:"Виникла помилка під час отримання зображень. Будь ласка, спробуйте пізніше."})}).finally(()=>{n.classList.add("hiden")})}
//# sourceMappingURL=commonHelpers.js.map
