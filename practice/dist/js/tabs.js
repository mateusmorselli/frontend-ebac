function tabHider(){var e=document.querySelectorAll("[data-tab-id]");for(let t=0;t<e.length;t++)e[t].classList.remove("personagens__content--is-active")}function buttonActiveHider(){var e=document.querySelectorAll("[data-tab-button]");for(let t=0;t<e.length;t++)e[t].classList.remove("personagens__tabs__button--is-active")}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll("[data-tab-button]");for(let t=0;t<e.length;t++)e[t].addEventListener("click",function(t){var e=t.target.dataset.tabButton,e=document.querySelector(`[data-tab-id=${e}]`);tabHider(),e.classList.add("personagens__content--is-active"),buttonActiveHider(),t.target.classList.add("personagens__tabs__button--is-active")})});