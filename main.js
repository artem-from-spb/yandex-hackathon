(()=>{var e={665:()=>{Array.from(document.querySelectorAll(".carousel")).forEach((function(e){var t=e,n=t.querySelector(".carousel__section"),r=t.querySelectorAll(".carousel__element"),o=t.querySelectorAll(".breadcrumbs__dot"),s=r[0].offsetWidth+20,c=0,i=0,a=0,d=0,l=0,u=0,m=0,p=!1,f=!1,v=!0,y=!0,_=0,L=0,E=--r.length*s,h=.35*r[0].offsetWidth,x=/([-0-9.]+(?=px))/;function b(e){o.forEach((function(e){return e.classList.remove("breadcrumbs__dot_active")})),o[e].classList.add("breadcrumbs__dot_active")}function q(){var e=g(),t=+n.style.transform.match(x)[0];if(d=a-e.clientX,a=e.clientX,u=l-e.clientY,l=e.clientY,!p&&!f){var o=Math.abs(u);o>7||0===d?(f=!0,v=!1):o<7&&(p=!0)}if(p){if(0===c){if(i<a)return void k(t,0);v=!0}if(c===--r.length){if(i>a)return void k(t,E);v=!0}if(i>a&&t<_||i<a&&t>L)return y=!1,S(),void(v=!0);n.style.transform="translate3d(".concat(t-d,"px, 0px, 0px)")}}function S(){m=i-a,f=!1,p=!1,document.removeEventListener("touchmove",q),document.removeEventListener("touchend",S),v?(Math.abs(m)>h&&(i<a?b(--c):i>a&&b(++c)),i!==a?(v=!1,y&&(n.style.transition="transform .5s"),n.style.transform="translate3d(-".concat(c*s,"px, 0px, 0px)")):v=!0):v=!0}function g(){return-1!==event.type.search("touch")?event.touches[0]:event}function k(e,t){e>=t&&e>t&&(n.style.transform="translate3d(".concat(t,"px, 0px, 0px)")),v=!1}n.style.transform="translate3d(0px, 0px, 0px)",n.addEventListener("transitionend",(function(){return v=!0})),t.addEventListener("touchstart",(function(){var e=g();v&&(y=!0,_=(c+1)*-s,L=(c-1)*-s,i=a=e.clientX,l=e.clientY,n.style.transition="",document.addEventListener("touchmove",q),document.addEventListener("touchend",S))}))}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}(()=>{"use strict";n(665);var e=document.getElementById("slides-container"),t=document.querySelector(".slide"),r=document.getElementById("slide-arrow-prev"),o=document.getElementById("slide-arrow-next"),s=document.querySelector(".success-popup__btn"),c=document.querySelectorAll(".current-offers__exist-vacancy-btn"),i=document.querySelectorAll(".current-offers__no-exist-vacancy-btn"),a=document.querySelector(".team-roles__btn-mentor"),d=document.querySelector(".team-roles__btn-reviewer"),l="team-roles__btn_disabled",u="team-roles__btn_enabled",m="team-roles_hidden",p=document.querySelector(".team-roles__img-boy"),f=document.querySelector(".team-roles__img-girl"),v=document.querySelector(".team-roles__duties-list-mentor"),y=document.querySelector(".team-roles__duties-list-reviewer"),_=document.querySelectorAll(".popup"),L=document.querySelector(".popup-details"),E=document.querySelector(".popup-no-vacancy"),h=document.querySelector(".popup-success"),x=document.querySelector(".exist-form"),b=document.querySelector(".no-exist-form");function q(e){e.classList.add("popup_opened"),document.addEventListener("keyup",A)}function S(){q(L)}function g(){q(E)}function k(e){e.classList.remove("popup_opened"),document.removeEventListener("keyup",A)}function A(e){"Escape"===e.code&&k(document.querySelector(".popup_opened"))}o.addEventListener("click",(function(){var n=t.clientWidth/4;e.scrollLeft+=n})),r.addEventListener("click",(function(){var n=t.clientWidth/4;e.scrollLeft-=n})),x.addEventListener("submit",(function(e){e.preventDefault(),k(L),q(h)})),b.addEventListener("submit",(function(e){e.preventDefault(),k(E),q(h)})),c.forEach((function(e){return e.addEventListener("click",S)})),i.forEach((function(e){return e.addEventListener("click",g)})),s.addEventListener("click",(function(){k(h)})),_.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&k(e),t.target.classList.contains("popup__container-btn")&&k(e)}))})),a.addEventListener("click",(function(){a.classList.remove(l),a.classList.add(u),d.classList.add(l),d.classList.remove(u),f.classList.remove(m),p.classList.add(m),v.classList.add(m),y.classList.remove(m),y.style.display="none",v.style.display="grid"})),d.addEventListener("click",(function(){d.classList.remove(l),d.classList.add(u),a.classList.add(l),a.classList.remove(u),p.classList.remove(m),f.classList.add(m),v.classList.remove(m),y.classList.add(m),y.style.display="grid",v.style.display="none"}))})()})();