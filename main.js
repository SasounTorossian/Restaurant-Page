!function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const o=document.getElementById("content");(()=>{const t=document.createElement("div");t.id="nav-bar";const e=document.createElement("div");e.id="nav-bar-logo";const n=document.createElement("img");n.src="./images/images-nav-bar/logo.png",n.height="60",n.classList.add("logo-img"),e.appendChild(n);const a=document.createElement("h2");a.textContent="le Désert Aride",a.classList.add("logo-title"),e.appendChild(a),t.appendChild(e);const d=document.createElement("div");d.id="home-tab",d.classList.add("tab");const c=document.createElement("button");c.classList.add("tab-button"),c.textContent="Home",d.appendChild(c),t.appendChild(d);const i=document.createElement("div");i.id="menu-tab",i.classList.add("tab");const r=document.createElement("button");r.classList.add("tab-button"),r.textContent="Menu",i.appendChild(r),t.appendChild(i);const l=document.createElement("div");l.id="contact-tab",l.classList.add("tab");const s=document.createElement("button");s.classList.add("tab-button"),s.textContent="Contact Us",l.appendChild(s),t.appendChild(l);const u=document.createElement("div");u.id="git-tab",u.classList.add("tab");const m=document.createElement("img");m.src="./images/images-nav-bar/Github Logo.png",m.height="60",m.classList.add("tab-button"),u.appendChild(m),t.appendChild(u),o.appendChild(t)})()}]);