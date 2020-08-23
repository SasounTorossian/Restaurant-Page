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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderContactPage\", function() { return renderContactPage; });\nconst content = document.getElementById(\"content\")\r\n\r\nlet addresses = [\r\n    \"Saharah Desert\",\r\n    \"Gobi Desert\",\r\n    \"Mojave  Desert\",\r\n    \"Namib Desert\",\r\n    \"Patagonian Desert\",\r\n    \"Arabian Desert\",\r\n    \"Great Victoria Desert\"\r\n]\r\n\r\nlet formInputs = [\r\n    \"Name\",\r\n    \"Email\",\r\n    \"Phone\"\r\n]\r\n\r\nlet deserts = [\r\n    {\r\n        \"name\": \"Sahara Desert\", \r\n        \"lat\": 23, \r\n        \"lng\": 13,\r\n        \"info\":\r\n        '<div class=\"map-content\">' +\r\n            '<h1 class=\"map-heading\">Sahara Desert</h1>'+\r\n            '<br>' +\r\n            '<p> The <b>Sahara</b> (/səˈhɑːrə/, /səˈhærə/; Arabic: الصحراء الكبرى‎, aṣ-ṣaḥrāʼ ' + \r\n                'al-kubrá, \"the Greatest Desert\") is a desert located on the African continent. ' + \r\n                'With an area of 9,200,000 square kilometres (3,600,000 sq mi), ' +\r\n                 'it is the largesthot desert in the world and the third largest desert overall after Antarctica and the Arctic. ' +\r\n                 'The name \"Sahara\" is derived from the Arabic word for \"desert\", ṣaḥra (صحرا /ˈsˤaħra/). </p>' +\r\n                 '<br>' +\r\n            '<p>Attribution: <a href=\"https://en.wikipedia.org/wiki/Sahara\">Sahara</a>' +\r\n            '(last visited August 22, 2020).</p>' + \r\n        '</div> '\r\n    },\r\n    {\r\n        \"name\": \"Gobi Desert\", \r\n        \"lat\": 42, \r\n        \"lng\": 103,\r\n        \"info\":\r\n        '<div class=\"map-content\">' +\r\n            '<h1 class=\"map-heading\">Gobi Desert</h1>'+\r\n            '<br>' +\r\n            '<p> The <b>Gobi Desert</b> (/ˈɡoʊbi/) is a large desert or brushland region in East Asia. ' + \r\n                'It covers parts of Northern and Northeastern China and of Southern Mongolia. ' + \r\n                'The desert basins of the Gobi are bounded by the Altai Mountains and the grasslands and steppes of Mongolia on the north, ' +\r\n                'by the Taklamakan Desert to the west, by the Hexi Corridor and Tibetan Plateau to the southwest and by the North China Plain to the southeast. ' +\r\n                'The Gobi is notable in history as the location of several important cities along the Silk Road. </p>' +\r\n                '<br>' +\r\n            '<p>Attribution: <a href=\"https://en.wikipedia.org/wiki/Gobi_Desert\">Gobi Desert</a> ' +\r\n            '(last visited August 22, 2020).</p>' + \r\n        '</div> '\r\n    },\r\n    {\r\n        \"name\": \"Sonoran Desert\", \r\n        \"lat\": 32, \r\n        \"lng\": -112,\r\n        \"info\":\r\n        '<div class=\"map-content\">' +\r\n            '<h1 class=\"firstHeading\">Sonoran Desert</h1>'+\r\n            '<br>' +\r\n            '<p> The <b>Sonoran Desert</b> (Spanish: Desierto de Sonora) is a North American desert which covers large parts of the Southwestern United States in Arizona and ' +    \r\n                'California and of Northwestern Mexico in Sonora, Baja California, and Baja California Sur. It is the hottest desert in Mexico. ' +\r\n                'It has an area of 260,000 square kilometers (100,000 sq mi). ' + \r\n                'The western portion of the United States–Mexico border passes through the Sonoran Desert. </p>'+\r\n                '<br>' +\r\n            '<p>Attribution: <a href=\"https://en.wikipedia.org/wiki/Sonoran_Desert\">Sonora Desert</a> '+\r\n            '(last visited August 22, 2020).</p>' + \r\n        '</div> '\r\n    },\r\n    {\r\n        \"name\": \"Mojave  Desert\", \r\n        \"lat\": 35, \r\n        \"lng\": -115,\r\n        \"info\":\r\n        '<div class=\"map-content\">' +\r\n            '<h1 class=\"map-heading\">Mojave Desert</h1>'+\r\n            '<br>' +\r\n            '<p> The <b>Mojave Desert</b> (/moʊˈhɑːvi, mə-/ moh-HAH-vee, mə-; Mohave: Hayikwiir Mat\\'aar)' +\r\n                 'is an arid rain-shadow desert and the driest desert in North America. ' + \r\n                 'It is in the Southwestern United States, primarily within southeastern California and southern Nevada, ' + \r\n                 'and it occupies 47,877 sq mi (124,000 km2). Small areas also extend into Utah and Arizona. ' + \r\n                 'Its boundaries are generally noted by the presence of Joshua trees, ' + \r\n                 'which are native only to the Mojave Desert and are considered an indicator species, ' + \r\n                 'and it is believed to support an additional 1,750 to 2,000 species of plants. ' + \r\n                 'The central part of the desert is sparsely populated, ' +\r\n                 'while its peripheries support large communities such as Las Vegas, Barstow, Lancaster, Palmdale, Victorville, and St. George.</p>' +\r\n                 '<br>' +\r\n            '<p>Attribution: <a href=\"https://en.wikipedia.org/wiki/Mojave_Desert\">Mojave Desert</a>' +\r\n            '(last visited August 22, 2020).</p>' + \r\n        '</div> '\r\n    },\r\n    {\r\n        \"name\": \"Namib Desert\", \r\n        \"lat\": -24,\r\n        \"lng\": 15,\r\n        \"info\":\r\n        '<div class=\"map-content\">' +\r\n            '<h1 class=\"map-heading\">Namib Desert</h1>'+\r\n            '<br>' +\r\n            '<p> The <b>Namib</b> (/ˈnæmiːb/; Portuguese: Namibe) is a coastal desert in southern Africa. ' +\r\n                'The name Namib is of Khoekhoegowab origin and means \"vast place\". According to the broadest definition, ' +\r\n                'the Namib stretches for more than 2,000 kilometres (1,200 mi) along the Atlantic coasts of Angola, Namibia, ' +\r\n                'and South Africa, extending southward from the Carunjamba River in Angola, through Namibia and to the Olifants River in Western Cape, ' +\r\n                'South Africa. The Namib\\'s northernmost portion, which extends 450 kilometres (280 mi) from the Angola-Namibia border, ' +\r\n                'is known as Moçâmedes Desert, while its southern portion approaches the neighboring Kalahari Desert. From the Atlantic coast eastward,' +\r\n                'the Namib gradually ascends in elevation, reaching up to 200 kilometres (120 mi) inland to the foot of the Great Escarpment. ' +\r\n                'Annual precipitation ranges from 2 millimetres (0.079 in) in the most arid regions to 200 millimetres (7.9 in) at the escarpment, ' +\r\n                'making the Namib the only true desert in southern Africa. Having endured arid or semi-arid conditions for roughly 55–80 million years, ' +\r\n                'the Namib may be the oldest desert in the world and contains some of the world\\'s driest regions, ' +\r\n                'with only western South America\\'s Atacama Desert to challenge it for age and aridity benchmarks. </p>' +\r\n                '<br>' +\r\n            '<p>Attribution: <a href=\"https://en.wikipedia.org/wiki/Namib\">Namib</a>' +\r\n            '(last visited August 22, 2020).</p>' + \r\n        '</div> '\r\n    },\r\n    {\r\n        \"name\": \"Patagonian Desert\", \r\n        \"lat\": -41,\r\n        \"lng\": -69,\r\n        \"info\":\r\n        '<div class=\"map-content\">' +\r\n            '<h1 class=\"map-heading\">Patagonian Desert</h1>'+\r\n            '<br>' +\r\n            '<p> The <b>Patagonian Desert</b>, also known as the Patagonian Steppe is the largest desert in Argentina and is the 8th largest desert in the world by area, ' +\r\n                'occupying 673,000 square kilometers (260,000 mi2). It is located primarily in Argentina and is bounded by the Andes, ' + \r\n                'to its west, and the Atlantic Ocean to its east, in the region of Patagonia, southern Argentina. ' +\r\n                'To the north the desert grades into the Cuyo Region and the Monte. ' +\r\n                'The central parts of the steppe are dominated by shrubby and herbaceous plant species albeit to the west, where precipitation is higher, ' +\r\n                'bushes are replaced by grasses. Topographically the deserts consist of alternating tablelands and massifs dissected by river valleys and canyons. ' +\r\n                'The more western parts of the steppe host lakes of glacial origin and grades into barren mountains or cold temperate forests along valleys.</p>' +\r\n                '<br>' +\r\n            '<p>Attribution: <a href=\"https://en.wikipedia.org/wiki/Patagonian_Desert\">Patagonian Desert</a>' +\r\n            '(last visited August 22, 2020).</p>' + \r\n        '</div> '\r\n    },\r\n    {\r\n        \"name\": \"Arabian Desert\", \r\n        \"lat\": 28, \r\n        \"lng\": 42,\r\n        \"info\":\r\n        '<div class=\"map-content\">' +\r\n            '<h1 class=\"map-heading\">Arabian Desert</h1>' +\r\n            '<br>' +\r\n            '<p> The <b>Arabian Desert</b> (Arabic: ٱلصَّحْرَاء ٱلْعَرَبِيَّة‎) is a vast desert wilderness in Western Asia. ' +\r\n                'It stretches from Yemen to the Persian Gulf and Oman to Jordan and Iraq. ' +\r\n                'It occupies most of the Arabian Peninsula, with an area of 2,330,000 square kilometers (900,000 sq mi). ' +\r\n                'It is the fifth largest desert in the world, and the largest in Asia. ' +\r\n                'At its center is Ar-Rub\\'al-Khali (The Empty Quarter), one of the largest continuous bodies of sand in the world. </p>' +\r\n                '<br>' +\r\n            '<p>Attribution: <a href=\"https://en.wikipedia.org/wiki/Arabian_Desert\">Arabian Desert</a>' +\r\n            '(last visited August 22, 2020).</p>'+ \r\n        '</div> '\r\n    },\r\n    {\r\n        \"name\": \"Great Victoria Desert\", \r\n        \"lat\": -29,\r\n        \"lng\": 129,\r\n        \"info\":\r\n        '<div class=\"map-content\">' +\r\n            '<h1 class=\"map-heading\">Great Victoria Desert</h1>'+\r\n            '<br>' +\r\n            '<p> The <b>Great Victoria Desert </b> is the largest desert in Australia and consists of many small sandhills, ' +\r\n                'grassland plains, areas with a closely packed surface of pebbles (called desert pavement or gibber plains) and salt lakes. ' +\r\n                'It is over 700 kilometres (430 mi) wide (from west to east) and covers an area of 348,750 square kilometres (134,650 sq mi) ' +\r\n                'from the Eastern Goldfields region of Western Australia to the Gawler Ranges in South Australia. </p>'+\r\n                '<br>' +\r\n            '<p>Attribution: <a href=\"https://en.wikipedia.org/wiki/Great_Victoria_Desert\">Great Victoria Desert</a> '+\r\n            '(last visited August 22, 2020).</p>'+ \r\n        '</div> '\r\n    }\r\n]\r\n\r\n\r\nconst renderContactPage = () => {\r\n    const currentTab = document.querySelector(\".current-tab\")\r\n    if (currentTab != null) currentTab.classList.remove(\"current-tab\")\r\n    document.getElementById(\"contact-tab\").classList.add(\"current-tab\")\r\n\r\n    const contactPage = document.createElement(\"div\")\r\n    contactPage.id = \"contact-page\"\r\n    contactPage.classList.add(\"current-page\")\r\n\r\n    const contactDetails = document.createElement(\"div\")\r\n    contactDetails.id = \"contact-details\"\r\n    contactPage.appendChild(contactDetails)\r\n\r\n    const contactInfo = document.createElement(\"div\")\r\n    contactInfo.id = \"contact-info\"\r\n    contactDetails.appendChild(contactInfo)\r\n\r\n    const contactAddr = document.createElement(\"div\")\r\n    contactAddr.classList.add(\"contact\")\r\n    const strongAddr = document.createElement(\"strong\")\r\n    strongAddr.textContent = \"Addresses:\"\r\n    contactAddr.appendChild(strongAddr)\r\n    addresses.forEach(address => {\r\n        const add = document.createElement(\"p\")\r\n        add.textContent = address\r\n        contactAddr.appendChild(add)\r\n    })\r\n    contactInfo.appendChild(contactAddr)\r\n\r\n    const contactTime = document.createElement(\"div\")\r\n    contactTime.classList.add(\"contact\")\r\n    const strongTime = document.createElement(\"strong\")\r\n    strongTime.textContent = \"Opening-times:\"\r\n    contactTime.appendChild(strongTime)\r\n    const time = document.createElement(\"p\")\r\n    time.textContent = \"Mon-Sat, 12:00 - 22:00\"  \r\n    contactTime.appendChild(time)\r\n    contactInfo.appendChild(contactTime)\r\n\r\n\r\n    const contactTel = document.createElement(\"div\")\r\n    contactTel.classList.add(\"contact\")\r\n    const strongTel = document.createElement(\"strong\")\r\n    strongTel.textContent = \"Telephone:\"\r\n    contactTel.appendChild(strongTel)\r\n    const tel = document.createElement(\"p\")\r\n    tel.textContent = \"123456789\"  \r\n    contactTel.appendChild(tel)\r\n    contactInfo.appendChild(contactTel)\r\n\r\n\r\n    // FORM\r\n    const form = document.createElement(\"form\")\r\n    form.id = \"contact-form\"\r\n    const contact = document.createElement(\"strong\")\r\n    contact.textContent = \"Contact Us:\"\r\n    form.appendChild(contact)\r\n\r\n    formInputs.forEach(finput => {\r\n        const formDiv = document.createElement(\"div\")\r\n        formDiv.classList.add(\"form-div\")\r\n        const inputBox = document.createElement(\"div\")\r\n        inputBox.classList.add(\"inputBox\")\r\n        formDiv.appendChild(inputBox)\r\n\r\n        const input = document.createElement(\"input\")\r\n        input.setAttribute(\"type\", \"text\");\r\n        input.setAttribute(\"required\", \"required\");\r\n        input.setAttribute(\"autocomplete\", \"nope\");\r\n        inputBox.appendChild(input)\r\n\r\n        const span_1 = document.createElement(\"span\")\r\n        span_1.classList.add(\"text\")\r\n        span_1.textContent = finput\r\n        inputBox.appendChild(span_1)\r\n\r\n        const span_2 = document.createElement(\"span\")\r\n        span_2.classList.add(\"line\")\r\n        inputBox.appendChild(span_2)\r\n        form.appendChild(formDiv)\r\n    })\r\n\r\n    const formDivText = document.createElement(\"div\")\r\n    formDivText.classList.add(\"form-div\")\r\n    const inputBoxText = document.createElement(\"div\")\r\n    inputBoxText.classList.add(\"inputBox\")\r\n    inputBoxText.classList.add(\"textarea\")\r\n    formDivText.appendChild(inputBoxText)\r\n\r\n    const textarea = document.createElement(\"textarea\")\r\n    textarea.setAttribute(\"required\", \"required\");\r\n    textarea.setAttribute(\"autocomplete\", \"nope\");\r\n    inputBoxText.appendChild(textarea)\r\n\r\n    const span_1 = document.createElement(\"span\")\r\n    span_1.classList.add(\"text\")\r\n    span_1.textContent = \"Message\"\r\n    inputBoxText.appendChild(span_1)\r\n\r\n    const span_2 = document.createElement(\"span\")\r\n    span_2.classList.add(\"line\")\r\n    inputBoxText.appendChild(span_2)\r\n    form.appendChild(formDivText)\r\n\r\n\r\n    const formDivSub = document.createElement(\"form\")\r\n    formDivSub.classList.add(\"form-div\")\r\n    const inputSub = document.createElement(\"input\")\r\n    inputSub.setAttribute(\"type\", \"submit\");\r\n    inputSub.setAttribute(\"value\", \"Send\");\r\n    formDivSub.appendChild(inputSub)\r\n    form.appendChild(formDivSub)\r\n\r\n    contactDetails.appendChild(form)\r\n\r\n\r\n    // MAP\r\n    const mapDiv = document.createElement(\"div\")\r\n    mapDiv.id = \"contact-map\"\r\n\r\n    let script = document.createElement('script');\r\n    script.src = \"https://maps.googleapis.com/maps/api/js?key=AIzaSyBgXyqkZVXE515nBZW12GKBFkf4vEa4-xg&callback=myMap\"\r\n    script.defer = true\r\n\r\n    window.myMap = function() {\r\n        let mapProp= {\r\n            zoom: 1.3,\r\n            center: new google.maps.LatLng(0,0),\r\n        }\r\n\r\n        let map = new google.maps.Map(\r\n            document.getElementById(\"contact-map\"), \r\n            mapProp\r\n        )\r\n\r\n        deserts.forEach(desert => {\r\n            const marker = new google.maps.Marker({\r\n                position: {lat: desert.lat, lng: desert.lng},\r\n                map: map,\r\n                title: desert.name\r\n            })\r\n            \r\n            const infowindow = new google.maps.InfoWindow({\r\n                content: desert.info\r\n            });\r\n\r\n            marker.addListener('click', () => infowindow.open(map, marker))\r\n            map.addListener('click', () => infowindow.close())\r\n        })\r\n    }\r\n\r\n    document.head.appendChild(script)\r\n    contactPage.appendChild(mapDiv)\r\n    content.appendChild(contactPage)\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/contact.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderHomePage\", function() { return renderHomePage; });\nconst content = document.getElementById(\"content\")\r\n\r\nconst renderHomePage = () => {\r\n    const currentTab = document.querySelector(\".current-tab\")\r\n    if (currentTab != null) currentTab.classList.remove(\"current-tab\")\r\n    document.getElementById(\"home-tab\").classList.add(\"current-tab\")\r\n\r\n\r\n    const homePage = document.createElement(\"div\")\r\n    homePage.id = \"home-page\"\r\n    homePage.classList.add(\"current-page\")\r\n\r\n    // First section\r\n    const pimg1 = document.createElement(\"div\")\r\n    pimg1.classList.add(\"pimg1\")\r\n    pimg1.classList.add(\"parallax\")\r\n    pimg1.setAttribute(\"data-z-index\", \"0\")\r\n    pimg1.setAttribute(\"data-parallax\", \"scroll\")\r\n    pimg1.setAttribute(\"data-image-src\", \"./images/images-home-page/desert-dunes-lake-blue-sky-hot-day-1920x1080_898588-mm-90.jpg\")\r\n\r\n    const ptext1 = document.createElement(\"div\")\r\n    ptext1.classList.add(\"ptext\")\r\n\r\n    const span1 = document.createElement(\"span\")\r\n    span1.classList.add(\"border\")\r\n    span1.textContent = \"Welcome to the Sands of Luxury\"\r\n    \r\n    ptext1.appendChild(span1)\r\n    pimg1.appendChild(ptext1)\r\n    homePage.appendChild(pimg1)\r\n\r\n    const section1 = document.createElement(\"section\")\r\n    section1.classList.add(\"section\")\r\n    section1.classList.add(\"section-light\")\r\n\r\n    const h2_1 = document.createElement(\"h2\")\r\n    h2_1.textContent = \"Our History\"\r\n    section1.appendChild(h2_1)\r\n\r\n    const p1 = document.createElement(\"p\")\r\n    p1.textContent = \"le Désert Aride was founded by 2 lost tourists name John Doe and David Guetta, along with their guide Mohammed bin Abubakr. After surviving for multiple days on nothing but insects and camel testicles, the three adventures decided to open up a chain of restaurants throughout the world's deserts. Today, their dream of exquisite desert food has come to life, with locations in the Sahara, Namib, Gobi, and other such deserts.\"\r\n    section1.appendChild(p1)\r\n    homePage.appendChild(section1)\r\n\r\n    //Second section\r\n    const pimg2 = document.createElement(\"div\")\r\n    pimg2.classList.add(\"pimg2\")\r\n    pimg2.classList.add(\"parallax\")\r\n    pimg2.setAttribute(\"data-z-index\", \"0\")\r\n    pimg2.setAttribute(\"data-parallax\", \"scroll\")\r\n    pimg2.setAttribute(\"data-image-src\", \"./images/images-home-page/desert_dunes_sand_141784_1920x1080.jpg\")\r\n\r\n    const ptext2 = document.createElement(\"div\")\r\n    ptext2.classList.add(\"ptext\")\r\n\r\n    const span2 = document.createElement(\"span\")\r\n    span2.classList.add(\"border\")\r\n    span2.textContent = \"The Best Food, if we Find Any\"\r\n    \r\n    ptext2.appendChild(span2)\r\n    pimg2.appendChild(ptext2)\r\n    homePage.appendChild(pimg2)\r\n\r\n    const section2 = document.createElement(\"section\")\r\n    section2.classList.add(\"section\")\r\n    section2.classList.add(\"section-light\")\r\n\r\n    const h2_2 = document.createElement(\"h2\")\r\n    h2_2.textContent = \"The Best Ingredients\"\r\n    section2.appendChild(h2_2)\r\n\r\n    const p2 = document.createElement(\"p\")\r\n    p2.textContent = \"We do our best to scavenge and find the best ingredients from the surrounding wasteland. This makes our dishes unique in that they are incredibly rare. Here at le Désert Aride, we strive for the finest food to leave a sandy taste in your mouth.\"\r\n    section2.appendChild(p2)\r\n    homePage.appendChild(section2)\r\n\r\n    //Third section\r\n    const pimg3 = document.createElement(\"div\")\r\n    pimg3.classList.add(\"pimg3\")\r\n    pimg3.classList.add(\"parallax\")\r\n    pimg3.setAttribute(\"data-z-index\", \"0\")\r\n    pimg3.setAttribute(\"data-parallax\", \"scroll\")\r\n    pimg3.setAttribute(\"data-image-src\", \"./images/images-home-page/Sand-dunes-Sahara-Morocco-Merzouga.jpg\")\r\n\r\n    const ptext3 = document.createElement(\"div\")\r\n    ptext3.classList.add(\"ptext\")\r\n\r\n    const span3 = document.createElement(\"span\")\r\n    span3.classList.add(\"border\")\r\n    span3.textContent = \"Welcome the Sands of Luxury\"\r\n    \r\n    ptext3.appendChild(span3)\r\n    pimg3.appendChild(ptext3)\r\n    homePage.appendChild(pimg3)\r\n\r\n    const section3 = document.createElement(\"section\")\r\n    section3.classList.add(\"section\")\r\n    section3.classList.add(\"section-light\")\r\n\r\n    const h2_3 = document.createElement(\"h2\")\r\n    h2_3.textContent = \"Come Get Lost in the Sands of Time\"\r\n    section3.appendChild(h2_3)\r\n\r\n    const p3 = document.createElement(\"p\")\r\n    p3.textContent = \"Upon wandering into le Désert Aride, you will be greeted by a wandering nomad who will designate a spot for you to sit down. At this point you will point at any living thing you can find, and we will do our best to capture it and cook it for you. Such is the experience of le Désert Aride.\"\r\n    section3.appendChild(p3)\r\n    homePage.appendChild(section3)\r\n\r\n    content.appendChild(homePage)\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar.js */ \"./src/nav-bar.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_nav_bar_js__WEBPACK_IMPORTED_MODULE_0__[\"renderNavBar\"])()\r\nObject(_home_js__WEBPACK_IMPORTED_MODULE_1__[\"renderHomePage\"])()\r\n// renderContactPage()\r\nObject(_footer_js__WEBPACK_IMPORTED_MODULE_4__[\"renderFooter\"])()\r\n\r\nconst content = document.getElementById(\"content\")\r\n\r\nconst tabs = document.querySelectorAll(\".tab\")\r\ntabs.forEach(tab => {\r\n    tab.addEventListener('click', (e) => {\r\n        const selectedTab = e.target.id\r\n\r\n        content.removeChild(document.querySelector(\".current-page\"))\r\n        content.removeChild(document.getElementById(\"footer\"))\r\n        \r\n        if(selectedTab == \"home-tab\") Object(_home_js__WEBPACK_IMPORTED_MODULE_1__[\"renderHomePage\"])()\r\n        else if(selectedTab == \"menu-tab\") Object(_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"renderMenuPage\"])()\r\n        else if(selectedTab == \"contact-tab\") Object(_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"renderContactPage\"])()\r\n\r\n        parSaveLoad(selectedTab)\r\n\r\n        Object(_footer_js__WEBPACK_IMPORTED_MODULE_4__[\"renderFooter\"])()\r\n    })\r\n})\r\n\r\n// parallax.js library created parallax-mirror element for each\r\n// parallax image. These are appended to start of body tag and track\r\n// position of scroll wheel to produce parallax effect in images.\r\nfunction parSaveLoad(selectedTab) {\r\n    // Parallax saving and loading code.\r\n    const body = document.querySelector(\"body\")\r\n    let parList = document.querySelectorAll(\".parallax-mirror\")\r\n\r\n    // Initialize static variable to retain variable state between calls\r\n    if(typeof parSaveLoad.parSaved == \"undefined\") parSaveLoad.parSaved = 0\r\n\r\n    // If not home-tab, save list in parSaved variable and remove parallax elements\r\n    // If home-tab, load list and prepend them to beginning of body\r\n    if(parList.length != 0 && selectedTab != \"home-tab\") {\r\n        parSaveLoad.parSaved = parList\r\n        parList.forEach(p => p.remove())\r\n    }\r\n    else if (parList.length == 0 && selectedTab == \"home-tab\") {\r\n        parList = parSaveLoad.parSaved\r\n        parList.forEach(p => body.prepend(p))\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: renderMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMenuPage\", function() { return renderMenuPage; });\nconst content = document.getElementById(\"content\")\r\n\r\nlet menu = {\r\n    starters: [\r\n        {\r\n            \"name\": \"Cactus salad Ⓥ\",\r\n            \"ing\": \"A salad made from the succulent pads of the prickly pear, sword pear, and saguaro. Served with a sweet chilli marinade\",\r\n            \"price\": \"7\"\r\n        },\r\n        {\r\n            \"name\": \"Toasted Arizona desert hairy scorpion\",\r\n            \"ing\": \"Three large hadrurus arizonensis scorpions harvested from the Mojave Desert toasted until golden brown, served with a small side of desert turf grass.\",\r\n            \"price\": \"8\"\r\n        },\r\n        {\r\n            \"name\": \"Regal horned lizard barbeque\",\r\n            \"ing\": \"One large phrynosoma solare marinated for 24 hours in aloe vera paste, barbequed until crispy.\",\r\n            \"price\": \"10\"\r\n        },\r\n        {\r\n            \"name\": \"Namib Desert beetle fry-up\",\r\n            \"ing\": \"100g of the finest stenocara gracilipes beetles captured from the Namib Desert, fried in palm oil and served sizzling.\",\r\n            \"price\": \"12\"\r\n        }\r\n    ],\r\n\r\n    mains: [\r\n        {\r\n            \"name\": \"Date jam served with pita Ⓥ\",\r\n            \"ing\": \"A jam made with ripe dates and served with 2 large freshly made pitas.\",\r\n            \"price\": \"12\"\r\n        },\r\n        {\r\n            \"name\": \"Mesquite soup Ⓥ\",\r\n            \"ing\": \"Out finest mesquite seeds cooked in desert water and served with olive oil and a slice of lemon.\",\r\n            \"price\": \"12\"\r\n        },\r\n\r\n        {\r\n            \"name\": \"Bactrian camel Kabsa\",\r\n            \"ing\": \"A 250g cut of Camelus bactrianus loin imported from the Gobi Desert, marinated in spices and grilled over a fire. Served with 350g of rice.\",\r\n            \"price\": \"20\"\r\n        },\r\n        {\r\n            \"name\": \"Nile crocodile stew\",\r\n            \"ing\": \"A stew made with the tender flesh of a captured crocodylus niloticus crocodile from the Nile River. Cooked with plenty of salt, herbs, and spices. A procession will be held after the meal for those who were killed while capturing the crocodile (RIP  Ahmed).\",\r\n            \"price\": \"35\"\r\n        },\r\n    ],\r\n\r\n    desserts: [\r\n        {\r\n            \"name\": \"Wolfberry soufflé Ⓥ\",\r\n            \"ing\": \"A sublime soufflé made using freshly harvested and imported Lycium exsertum berries straight from the lower Sonora Desert.\",\r\n            \"price\": \"12\"\r\n        },\r\n        {\r\n            \"name\": \"Tequila chocolate truffles Ⓥ\",\r\n            \"ing\": \"Decadent chocolate truffles made using fresh tequila pressed in-house from newly harvested agave.\",\r\n            \"price\": \"14\"\r\n        },\r\n        {\r\n            \"name\": \"Dromedary camel yoghurt Ⓥ\",\r\n            \"ing\": \"A cool yoghurt made from freshly squeezed camel milk. Served with cucumbers and parsley.\",\r\n            \"price\": \"14\"\r\n        },\r\n        {\r\n            \"name\": \"Vanilla ice cream served with jewel scarabs\",\r\n            \"ing\": \"150g of freshly made vanilla ice cream topped with ruteline genus chrysina golden scarabs for zest and beauty.\",\r\n            \"price\": \"15\"\r\n        }\r\n\r\n    ],\r\n}\r\n\r\n/*\r\nDOM representaiton of menu structure:\r\n\r\nmenu-page\r\n    |->menu-type\r\n        |-> menu_header \r\n        |-> menu-item\r\n            |-> menu-desc\r\n            |   |-> menu-name      \r\n            |   |-> menu-ing\r\n            |-----> menu-price\r\n*/\r\n\r\nconst renderMenuPage = () => {\r\n    const currentTab = document.querySelector(\".current-tab\")\r\n    if (currentTab != null) currentTab.classList.remove(\"current-tab\")\r\n    document.getElementById(\"menu-tab\").classList.add(\"current-tab\")\r\n\r\n    const menuPage = document.createElement(\"div\")\r\n    menuPage.id = \"menu-page\"\r\n    menuPage.classList.add(\"current-page\")\r\n\r\n    for (let type in menu) {\r\n        let typeUppercase = type.charAt(0).toUpperCase() + type.slice(1)\r\n        \r\n        const menuType = document.createElement(\"div\")\r\n        menuType.id = type\r\n        menuType.classList.add(\"menu-type\")\r\n        const menuTypeP = document.createElement(\"p\")\r\n        menuTypeP.textContent = typeUppercase\r\n        menuTypeP.classList.add(\"menu-header\")\r\n        menuType.appendChild(menuTypeP)\r\n        \r\n        menu[type].forEach(dish => {\r\n            const menuItem = document.createElement(\"div\")\r\n            menuItem.classList.add(\"menu-item\")\r\n        \r\n            const menuDesc = document.createElement(\"div\")\r\n            menuDesc.classList.add(\"menu-desc\")\r\n        \r\n            const menuName = document.createElement(\"div\")\r\n            menuName.classList.add(\"menu-name\")\r\n            const menuNameP = document.createElement(\"p\")\r\n            menuNameP.textContent = dish.name\r\n            menuName.appendChild(menuNameP)\r\n            menuDesc.appendChild(menuName)\r\n        \r\n            const menuIng = document.createElement(\"div\")\r\n            menuIng.classList.add(\"menu-ing\")\r\n            const menuIngP = document.createElement(\"p\")\r\n            menuIngP.textContent = dish.ing\r\n            menuIng.appendChild(menuIngP)\r\n            menuDesc.appendChild(menuIng)\r\n        \r\n            const menuPrice = document.createElement(\"div\")\r\n            menuPrice.classList.add(\"menu-price\")\r\n            const menuPriceP = document.createElement(\"p\")\r\n            menuPriceP.textContent = dish.price\r\n            menuPrice.appendChild(menuPriceP)\r\n        \r\n            menuItem.appendChild(menuDesc)\r\n            menuItem.appendChild(menuPrice)\r\n            menuType.appendChild(menuItem)\r\n        })\r\n        menuPage.appendChild(menuType)\r\n    }\r\n    content.appendChild(menuPage)\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/menu.js?");

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