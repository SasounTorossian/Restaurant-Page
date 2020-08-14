/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: renderContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderContactPage\", function() { return renderContactPage; });\nconst content = document.getElementById(\"content\")\r\n\r\n\r\nconst renderContactPage = () => {\r\n    const contactPage = document.createElement(\"div\")\r\n    contactPage.id = \"contact-page\"\r\n    contactPage.classList.add(\"current-page\")\r\n    contactPage.textContent = \"TESTING CONTENT\"\r\n\r\n    content.appendChild(contactPage)\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: renderFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderFooter\", function() { return renderFooter; });\nconst content = document.getElementById(\"content\")\r\n\r\nconst renderFooter= () => {\r\n    const footer = document.createElement(\"div\")\r\n    footer.id = \"footer\"\r\n    const p = document.createElement(\"p\")\r\n    p.textContent = \"A project by Sasoun Torossian. 2020\"\r\n\r\n    footer.appendChild(p)\r\n    content.appendChild(footer)\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: renderHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderHomePage\", function() { return renderHomePage; });\nconst content = document.getElementById(\"content\")\r\n\r\nconst renderHomePage = () => {\r\n    const homePage = document.createElement(\"div\")\r\n    homePage.id = \"home-page\"\r\n    homePage.classList.add(\"current-page\")\r\n\r\n    // First section\r\n    const pimg1 = document.createElement(\"div\")\r\n    pimg1.classList.add(\"pimg1\")\r\n    pimg1.classList.add(\"parallax\")\r\n    pimg1.setAttribute(\"data-z-index\", \"0\")\r\n    pimg1.setAttribute(\"data-parallax\", \"scroll\")\r\n    pimg1.setAttribute(\"data-image-src\", \"./images/images-home-page/desert-dunes-lake-blue-sky-hot-day-1920x1080_898588-mm-90.jpg\")\r\n\r\n    const ptext1 = document.createElement(\"div\")\r\n    ptext1.classList.add(\"ptext\")\r\n\r\n    const span1 = document.createElement(\"span\")\r\n    span1.classList.add(\"border\")\r\n    span1.textContent = \"Welcome to the Sands of Luxury\"\r\n    \r\n    ptext1.appendChild(span1)\r\n    pimg1.appendChild(ptext1)\r\n    homePage.appendChild(pimg1)\r\n\r\n    const section1 = document.createElement(\"section\")\r\n    section1.classList.add(\"section\")\r\n    section1.classList.add(\"section-light\")\r\n\r\n    const h2_1 = document.createElement(\"h2\")\r\n    h2_1.textContent = \"Our History\"\r\n    section1.appendChild(h2_1)\r\n\r\n    const p1 = document.createElement(\"p\")\r\n    p1.textContent = \"le Désert Aride was founded by 2 lost tourists name John Doe and David Guetta, along with their guide Mohammed bin Abubakr. After surviving for multiple days on nothing but insects and camel testicles, the three adventures decided to open up a chain of restaurants throughout the world's deserts. Today, their dream of exquisite desert food has come to life, with locations in the Sahara, Namib, Gobi, and other such deserts.\"\r\n    section1.appendChild(p1)\r\n    homePage.appendChild(section1)\r\n\r\n    //Second section\r\n    const pimg2 = document.createElement(\"div\")\r\n    pimg2.classList.add(\"pimg2\")\r\n    pimg2.classList.add(\"parallax\")\r\n    pimg2.setAttribute(\"data-z-index\", \"0\")\r\n    pimg2.setAttribute(\"data-parallax\", \"scroll\")\r\n    pimg2.setAttribute(\"data-image-src\", \"./images/images-home-page/desert_dunes_sand_141784_1920x1080.jpg\")\r\n\r\n    const ptext2 = document.createElement(\"div\")\r\n    ptext2.classList.add(\"ptext\")\r\n\r\n    const span2 = document.createElement(\"span\")\r\n    span2.classList.add(\"border\")\r\n    span2.textContent = \"The Best Food, if we Find Any\"\r\n    \r\n    ptext2.appendChild(span2)\r\n    pimg2.appendChild(ptext2)\r\n    homePage.appendChild(pimg2)\r\n\r\n    const section2 = document.createElement(\"section\")\r\n    section2.classList.add(\"section\")\r\n    section2.classList.add(\"section-light\")\r\n\r\n    const h2_2 = document.createElement(\"h2\")\r\n    h2_2.textContent = \"The Best Ingredients\"\r\n    section2.appendChild(h2_2)\r\n\r\n    const p2 = document.createElement(\"p\")\r\n    p2.textContent = \"We do our best to scavenge and find the best ingredients from the surrounding wasteland. This makes our dishes unique in that they are incredibly rare. Here at le Désert Aride, we strive for the finest food to leave a sandy taste in your mouth.\"\r\n    section2.appendChild(p2)\r\n    homePage.appendChild(section2)\r\n\r\n    //Third section\r\n    const pimg3 = document.createElement(\"div\")\r\n    pimg3.classList.add(\"pimg3\")\r\n    pimg3.classList.add(\"parallax\")\r\n    pimg3.setAttribute(\"data-z-index\", \"0\")\r\n    pimg3.setAttribute(\"data-parallax\", \"scroll\")\r\n    pimg3.setAttribute(\"data-image-src\", \"./images/images-home-page/Sand-dunes-Sahara-Morocco-Merzouga.jpg\")\r\n\r\n    const ptext3 = document.createElement(\"div\")\r\n    ptext3.classList.add(\"ptext\")\r\n\r\n    const span3 = document.createElement(\"span\")\r\n    span3.classList.add(\"border\")\r\n    span3.textContent = \"Welcome the Sands of Luxury\"\r\n    \r\n    ptext3.appendChild(span3)\r\n    pimg3.appendChild(ptext3)\r\n    homePage.appendChild(pimg3)\r\n\r\n    const section3 = document.createElement(\"section\")\r\n    section3.classList.add(\"section\")\r\n    section3.classList.add(\"section-light\")\r\n\r\n    const h2_3 = document.createElement(\"h2\")\r\n    h2_3.textContent = \"Come Get Lost in the Sands of Time\"\r\n    section3.appendChild(h2_3)\r\n\r\n    const p3 = document.createElement(\"p\")\r\n    p3.textContent = \"Upon wandering into le Désert Aride, you will be greeted by a wandering nomad who will designate a spot for you to sit down. At this point you will point at any living thing you can find, and we will do our best to capture it and cook it for you. Such is the experience of le Désert Aride.\"\r\n    section3.appendChild(p3)\r\n    homePage.appendChild(section3)\r\n\r\n    content.appendChild(homePage)\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar.js */ \"./src/nav-bar.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_nav_bar_js__WEBPACK_IMPORTED_MODULE_0__[\"renderNavBar\"])()\r\nObject(_home_js__WEBPACK_IMPORTED_MODULE_1__[\"renderHomePage\"])()\r\nObject(_footer_js__WEBPACK_IMPORTED_MODULE_4__[\"renderFooter\"])()\r\n\r\nconst content = document.getElementById(\"content\")\r\n\r\nconst tabs = document.querySelectorAll(\".tab\")\r\ntabs.forEach(tab => {\r\n    tab.addEventListener('click', (e) => {\r\n        const selectedTab = e.target.id\r\n    \r\n        parSaveLoad(selectedTab)\r\n\r\n        content.removeChild(document.querySelector(\".current-page\"))\r\n        content.removeChild(document.getElementById(\"footer\"))\r\n        \r\n        if(selectedTab == \"home-tab\") Object(_home_js__WEBPACK_IMPORTED_MODULE_1__[\"renderHomePage\"])()\r\n        else if(selectedTab == \"menu-tab\") Object(_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"renderMenuPage\"])()\r\n        else if(selectedTab == \"contact-tab\") Object(_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"renderContactPage\"])()\r\n\r\n        Object(_footer_js__WEBPACK_IMPORTED_MODULE_4__[\"renderFooter\"])()\r\n    })\r\n})\r\n\r\n// parallax.js library created parallax-mirror element for each\r\n// parallax image. These are appended to start of body tag and track\r\n// position of scroll wheel to produce parallax effect in images.\r\nfunction parSaveLoad(selectedTab) {\r\n    // Parallax saving and loading code.\r\n    const body = document.querySelector(\"body\")\r\n    let parList = document.querySelectorAll(\".parallax-mirror\")\r\n\r\n    // Initialize static variable to retain variable state between calls\r\n    if(typeof parSaveLoad.parSaved == \"undefined\") parSaveLoad.parSaved = 0\r\n\r\n    // If not home-tab, save list in parSaved variable and remove parallax elements\r\n    // If home-tab, load list and prepend them to beginning of body\r\n    if(parList.length != 0 && \r\n        selectedTab != \"home-tab\") {\r\n        parSaveLoad.parSaved = parList\r\n        parList.forEach(p => p.remove())\r\n    }\r\n    else if (parList.length == 0 &&\r\n        selectedTab == \"home-tab\") {\r\n        parList = parSaveLoad.parSaved\r\n        parList.forEach(p => body.prepend(p))\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: renderMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMenuPage\", function() { return renderMenuPage; });\nconst content = document.getElementById(\"content\")\r\n\r\n\r\nconst renderMenuPage = () => {\r\n    const menuPage = document.createElement(\"div\")\r\n    menuPage.id = \"menu-page\"\r\n    menuPage.classList.add(\"current-page\")\r\n    menuPage.textContent = \"TESTING MENU\"\r\n\r\n    content.appendChild(menuPage)\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/nav-bar.js":
/*!************************!*\
  !*** ./src/nav-bar.js ***!
  \************************/
/*! exports provided: renderNavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNavBar\", function() { return renderNavBar; });\nconst content = document.getElementById(\"content\")\r\n\r\nconst renderNavBar = () => {\r\n    const navBar = document.createElement(\"div\")\r\n    navBar.id = \"nav-bar\"\r\n\r\n    const navBarLogo = document.createElement(\"div\")\r\n    navBarLogo.id = \"nav-bar-logo\"\r\n    const navBarLogoImg = document.createElement(\"img\")\r\n    navBarLogoImg.src = \"./images/images-nav-bar/logo.png\"\r\n    navBarLogoImg.height = \"60\"\r\n    navBarLogoImg.classList.add(\"logo-img\")\r\n    navBarLogo.appendChild(navBarLogoImg)\r\n\r\n    const navBarLogoTitle = document.createElement(\"h2\")\r\n    navBarLogoTitle.textContent = \"le Désert Aride\"\r\n    navBarLogoTitle.classList.add(\"logo-title\")\r\n    navBarLogo.appendChild(navBarLogoTitle)\r\n\r\n    navBar.appendChild(navBarLogo)\r\n\r\n\r\n\r\n    const homeTab = document.createElement(\"div\")\r\n    homeTab.id = \"home-tab\"\r\n    homeTab.classList.add(\"tab\")\r\n    homeTab.textContent = \"Home\"\r\n    navBar.appendChild(homeTab)\r\n\r\n    const menuTab = document.createElement(\"div\")\r\n    menuTab.id = \"menu-tab\"\r\n    menuTab.classList.add(\"tab\")\r\n    menuTab.textContent = \"Menu\"\r\n    navBar.appendChild(menuTab)\r\n\r\n    const contactTab = document.createElement(\"div\")\r\n    contactTab.id = \"contact-tab\"\r\n    contactTab.classList.add(\"tab\")\r\n    contactTab.textContent = \"Contact Us\"\r\n    navBar.appendChild(contactTab)\r\n\r\n    const gitTab = document.createElement(\"div\")\r\n    gitTab.id = \"git-tab\"\r\n    // gitTab.classList.add(\"tab\")\r\n    const gitTabLink = document.createElement(\"a\")\r\n    gitTabLink.id = \"git-link\"\r\n    gitTabLink.href = \"https://github.com/SasounTorossian\"\r\n    const gitTabImg = document.createElement(\"img\")\r\n    gitTabImg.id = \"git-img\"\r\n    gitTabImg.src = \"./images/images-nav-bar/Github Logo.png\"\r\n    gitTabImg.height = \"60\"\r\n    gitTabLink.appendChild(gitTabImg)\r\n    gitTab.appendChild(gitTabLink)\r\n    navBar.appendChild(gitTab)\r\n    \r\n    content.appendChild(navBar)\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/nav-bar.js?");

/***/ })

/******/ });