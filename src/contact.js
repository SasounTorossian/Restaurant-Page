const content = document.getElementById("content")

// Addresses for contact.
const addresses = [
    "Saharah Desert",
    "Gobi Desert",
    "Mojave  Desert",
    "Namib Desert",
    "Patagonian Desert",
    "Arabian Desert",
    "Great Victoria Desert"
]

// Inputs for forms, can be changed.
const formInputs = [
    "Name",
    "Email",
    "Phone"
]

// List of deserts of google maps. Includes lat/lng and information.
const deserts = [
    {
        "name": "Sahara Desert", 
        "lat": 23, 
        "lng": 13,
        "info":
        '<div class="map-content">' +
            '<h1 class="map-heading">Sahara Desert</h1>'+
            '<br>' +
            '<p> The <b>Sahara</b> (/səˈhɑːrə/, /səˈhærə/; Arabic: الصحراء الكبرى‎, aṣ-ṣaḥrāʼ ' + 
                'al-kubrá, "the Greatest Desert") is a desert located on the African continent. ' + 
                'With an area of 9,200,000 square kilometres (3,600,000 sq mi), ' +
                 'it is the largesthot desert in the world and the third largest desert overall after Antarctica and the Arctic. ' +
                 'The name "Sahara" is derived from the Arabic word for "desert", ṣaḥra (صحرا /ˈsˤaħra/). </p>' +
                 '<br>' +
            '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Sahara">Sahara</a>' +
            '(last visited August 22, 2020).</p>' + 
        '</div> '
    },
    {
        "name": "Gobi Desert", 
        "lat": 42, 
        "lng": 103,
        "info":
        '<div class="map-content">' +
            '<h1 class="map-heading">Gobi Desert</h1>'+
            '<br>' +
            '<p> The <b>Gobi Desert</b> (/ˈɡoʊbi/) is a large desert or brushland region in East Asia. ' + 
                'It covers parts of Northern and Northeastern China and of Southern Mongolia. ' + 
                'The desert basins of the Gobi are bounded by the Altai Mountains and the grasslands and steppes of Mongolia on the north, ' +
                'by the Taklamakan Desert to the west, by the Hexi Corridor and Tibetan Plateau to the southwest and by the North China Plain to the southeast. ' +
                'The Gobi is notable in history as the location of several important cities along the Silk Road. </p>' +
                '<br>' +
            '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Gobi_Desert">Gobi Desert</a> ' +
            '(last visited August 22, 2020).</p>' + 
        '</div> '
    },
    {
        "name": "Sonoran Desert", 
        "lat": 32, 
        "lng": -112,
        "info":
        '<div class="map-content">' +
            '<h1 class="firstHeading">Sonoran Desert</h1>'+
            '<br>' +
            '<p> The <b>Sonoran Desert</b> (Spanish: Desierto de Sonora) is a North American desert which covers large parts of the Southwestern United States in Arizona and ' +    
                'California and of Northwestern Mexico in Sonora, Baja California, and Baja California Sur. It is the hottest desert in Mexico. ' +
                'It has an area of 260,000 square kilometers (100,000 sq mi). ' + 
                'The western portion of the United States–Mexico border passes through the Sonoran Desert. </p>'+
                '<br>' +
            '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Sonoran_Desert">Sonora Desert</a> '+
            '(last visited August 22, 2020).</p>' + 
        '</div> '
    },
    {
        "name": "Mojave  Desert", 
        "lat": 35, 
        "lng": -115,
        "info":
        '<div class="map-content">' +
            '<h1 class="map-heading">Mojave Desert</h1>'+
            '<br>' +
            '<p> The <b>Mojave Desert</b> (/moʊˈhɑːvi, mə-/ moh-HAH-vee, mə-; Mohave: Hayikwiir Mat\'aar)' +
                 'is an arid rain-shadow desert and the driest desert in North America. ' + 
                 'It is in the Southwestern United States, primarily within southeastern California and southern Nevada, ' + 
                 'and it occupies 47,877 sq mi (124,000 km2). Small areas also extend into Utah and Arizona. ' + 
                 'Its boundaries are generally noted by the presence of Joshua trees, ' + 
                 'which are native only to the Mojave Desert and are considered an indicator species, ' + 
                 'and it is believed to support an additional 1,750 to 2,000 species of plants. ' + 
                 'The central part of the desert is sparsely populated, ' +
                 'while its peripheries support large communities such as Las Vegas, Barstow, Lancaster, Palmdale, Victorville, and St. George.</p>' +
                 '<br>' +
            '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Mojave_Desert">Mojave Desert</a>' +
            '(last visited August 22, 2020).</p>' + 
        '</div> '
    },
    {
        "name": "Namib Desert", 
        "lat": -24,
        "lng": 15,
        "info":
        '<div class="map-content">' +
            '<h1 class="map-heading">Namib Desert</h1>'+
            '<br>' +
            '<p> The <b>Namib</b> (/ˈnæmiːb/; Portuguese: Namibe) is a coastal desert in southern Africa. ' +
                'The name Namib is of Khoekhoegowab origin and means "vast place". According to the broadest definition, ' +
                'the Namib stretches for more than 2,000 kilometres (1,200 mi) along the Atlantic coasts of Angola, Namibia, ' +
                'and South Africa, extending southward from the Carunjamba River in Angola, through Namibia and to the Olifants River in Western Cape, ' +
                'South Africa. The Namib\'s northernmost portion, which extends 450 kilometres (280 mi) from the Angola-Namibia border, ' +
                'is known as Moçâmedes Desert, while its southern portion approaches the neighboring Kalahari Desert. From the Atlantic coast eastward,' +
                'the Namib gradually ascends in elevation, reaching up to 200 kilometres (120 mi) inland to the foot of the Great Escarpment. ' +
                'Annual precipitation ranges from 2 millimetres (0.079 in) in the most arid regions to 200 millimetres (7.9 in) at the escarpment, ' +
                'making the Namib the only true desert in southern Africa. Having endured arid or semi-arid conditions for roughly 55–80 million years, ' +
                'the Namib may be the oldest desert in the world and contains some of the world\'s driest regions, ' +
                'with only western South America\'s Atacama Desert to challenge it for age and aridity benchmarks. </p>' +
                '<br>' +
            '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Namib">Namib</a>' +
            '(last visited August 22, 2020).</p>' + 
        '</div> '
    },
    {
        "name": "Patagonian Desert", 
        "lat": -41,
        "lng": -69,
        "info":
        '<div class="map-content">' +
            '<h1 class="map-heading">Patagonian Desert</h1>'+
            '<br>' +
            '<p> The <b>Patagonian Desert</b>, also known as the Patagonian Steppe is the largest desert in Argentina and is the 8th largest desert in the world by area, ' +
                'occupying 673,000 square kilometers (260,000 mi2). It is located primarily in Argentina and is bounded by the Andes, ' + 
                'to its west, and the Atlantic Ocean to its east, in the region of Patagonia, southern Argentina. ' +
                'To the north the desert grades into the Cuyo Region and the Monte. ' +
                'The central parts of the steppe are dominated by shrubby and herbaceous plant species albeit to the west, where precipitation is higher, ' +
                'bushes are replaced by grasses. Topographically the deserts consist of alternating tablelands and massifs dissected by river valleys and canyons. ' +
                'The more western parts of the steppe host lakes of glacial origin and grades into barren mountains or cold temperate forests along valleys.</p>' +
                '<br>' +
            '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Patagonian_Desert">Patagonian Desert</a>' +
            '(last visited August 22, 2020).</p>' + 
        '</div> '
    },
    {
        "name": "Arabian Desert", 
        "lat": 28, 
        "lng": 42,
        "info":
        '<div class="map-content">' +
            '<h1 class="map-heading">Arabian Desert</h1>' +
            '<br>' +
            '<p> The <b>Arabian Desert</b> (Arabic: ٱلصَّحْرَاء ٱلْعَرَبِيَّة‎) is a vast desert wilderness in Western Asia. ' +
                'It stretches from Yemen to the Persian Gulf and Oman to Jordan and Iraq. ' +
                'It occupies most of the Arabian Peninsula, with an area of 2,330,000 square kilometers (900,000 sq mi). ' +
                'It is the fifth largest desert in the world, and the largest in Asia. ' +
                'At its center is Ar-Rub\'al-Khali (The Empty Quarter), one of the largest continuous bodies of sand in the world. </p>' +
                '<br>' +
            '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Arabian_Desert">Arabian Desert</a>' +
            '(last visited August 22, 2020).</p>'+ 
        '</div> '
    },
    {
        "name": "Great Victoria Desert", 
        "lat": -29,
        "lng": 129,
        "info":
        '<div class="map-content">' +
            '<h1 class="map-heading">Great Victoria Desert</h1>'+
            '<br>' +
            '<p> The <b>Great Victoria Desert </b> is the largest desert in Australia and consists of many small sandhills, ' +
                'grassland plains, areas with a closely packed surface of pebbles (called desert pavement or gibber plains) and salt lakes. ' +
                'It is over 700 kilometres (430 mi) wide (from west to east) and covers an area of 348,750 square kilometres (134,650 sq mi) ' +
                'from the Eastern Goldfields region of Western Australia to the Gawler Ranges in South Australia. </p>'+
                '<br>' +
            '<p>Attribution: <a href="https://en.wikipedia.org/wiki/Great_Victoria_Desert">Great Victoria Desert</a> '+
            '(last visited August 22, 2020).</p>'+ 
        '</div> '
    }
]


const renderContactPage = () => {
    // find and remove current-tab class from nav-bar. Add current-tab class to home-tab 
    const currentTab = document.querySelector(".current-tab")
    if (currentTab != null) currentTab.classList.remove("current-tab")
    document.getElementById("contact-tab").classList.add("current-tab")

    /**If current-page class was not removed previously, return
     * else, create new home page and add current-page class to it
     */
    if(document.querySelector(".current-page") != null) return
    const contactPage = document.createElement("div")
    contactPage.id = "contact-page"
    contactPage.classList.add("current-page")

    // Start creating html sctructure for contact page.
    const contactDetails = document.createElement("div")
    contactDetails.id = "contact-details"
    contactPage.appendChild(contactDetails)

    const contactInfo = document.createElement("div")
    contactInfo.id = "contact-info"
    contactDetails.appendChild(contactInfo)

    const contactAddr = document.createElement("div")
    contactAddr.classList.add("contact")
    const strongAddr = document.createElement("strong")
    strongAddr.textContent = "Locations:"
    contactAddr.appendChild(strongAddr)
    addresses.forEach(address => {
        const add = document.createElement("p")
        add.textContent = address
        contactAddr.appendChild(add)
    })
    contactInfo.appendChild(contactAddr)

    const contactTime = document.createElement("div")
    contactTime.classList.add("contact")
    const strongTime = document.createElement("strong")
    strongTime.textContent = "Opening-Times:"
    contactTime.appendChild(strongTime)
    const time_1 = document.createElement("p")
    time_1.textContent = "Lunch: 11:30am - 2:30pm"  
    contactTime.appendChild(time_1)
    const time_2 = document.createElement("p")
    time_2.textContent = "Dinner: 5:30pm - 11:00pm"  
    contactTime.appendChild(time_2)
    contactInfo.appendChild(contactTime)

    const contactEmail = document.createElement("div")
    contactEmail.classList.add("contact")
    const strongEmail = document.createElement("strong")
    strongEmail.textContent = "Email:"
    contactEmail.appendChild(strongEmail)
    const Email = document.createElement("p")
    Email.textContent = "leDesertAride@gmail.com"  
    contactEmail.appendChild(Email)
    contactInfo.appendChild(contactEmail)

    const contactTel = document.createElement("div")
    contactTel.classList.add("contact")
    const strongTel = document.createElement("strong")
    strongTel.textContent = "Telephone:"
    contactTel.appendChild(strongTel)
    const tel = document.createElement("p")
    tel.textContent = "+235-665-5512-4"  
    contactTel.appendChild(tel)
    contactInfo.appendChild(contactTel)


    // Create form input on contact page.
    const form = document.createElement("form")
    form.id = "contact-form"
    const contact = document.createElement("strong")
    contact.textContent = "Contact Us:"
    form.appendChild(contact)

    formInputs.forEach(finput => {
        const formDiv = document.createElement("div")
        formDiv.classList.add("form-div")
        const inputBox = document.createElement("div")
        inputBox.classList.add("inputBox")
        formDiv.appendChild(inputBox)

        const input = document.createElement("input")
        input.setAttribute("type", "text");
        input.setAttribute("required", "required");
        input.setAttribute("autocomplete", "nope");
        inputBox.appendChild(input)

        const span_1 = document.createElement("span")
        span_1.classList.add("text")
        span_1.textContent = finput
        inputBox.appendChild(span_1)

        const span_2 = document.createElement("span")
        span_2.classList.add("line")
        inputBox.appendChild(span_2)
        form.appendChild(formDiv)
    })

    const formDivText = document.createElement("div")
    formDivText.classList.add("form-div")
    const inputBoxText = document.createElement("div")
    inputBoxText.classList.add("inputBox")
    inputBoxText.classList.add("textarea")
    formDivText.appendChild(inputBoxText)

    const textarea = document.createElement("textarea")
    textarea.setAttribute("required", "required");
    textarea.setAttribute("autocomplete", "nope");
    inputBoxText.appendChild(textarea)

    const span_1 = document.createElement("span")
    span_1.classList.add("text")
    span_1.textContent = "Message"
    inputBoxText.appendChild(span_1)

    const span_2 = document.createElement("span")
    span_2.classList.add("line")
    inputBoxText.appendChild(span_2)
    form.appendChild(formDivText)

    const formDivSub = document.createElement("form")
    formDivSub.classList.add("form-div")
    const inputSub = document.createElement("input")
    inputSub.setAttribute("type", "button");
    inputSub.setAttribute("value", "Send");
    formDivSub.appendChild(inputSub)
    form.appendChild(formDivSub)

    // On pressing submit button, clear the form.
    inputSub.addEventListener('click', (e) => {
        let frm = document.querySelector("#contact-form")
        frm.reset()
    })

    contactDetails.appendChild(form)


    // Code for embedded google map.
    const mapDiv = document.createElement("div")
    mapDiv.id = "contact-map"

    // Find all google apis, remove them, and reload them.
    removeGoogleMapScript()
    addGoogleMapScript()

    window.myMap = function() {
        // Map zoom level and position
        let mapCenter= {
            zoom: 1.3,
            center: new google.maps.LatLng(0,0),
        }

        // Create map object with correct center and zoom
        let map = new google.maps.Map(
            document.getElementById("contact-map"), 
            mapCenter
        )

        // Create markers for each desert object.
        deserts.forEach(desert => {
            const marker = new google.maps.Marker({
                position: {lat: desert.lat, lng: desert.lng},
                map: map,
                title: desert.name
            })
            
            // create info window on markers containg desert information
            const infowindow = new google.maps.InfoWindow({
                content: desert.info
            });

            // Reveal info window if clicking on marker, remove if clicking on map
            marker.addListener('click', () => infowindow.open(map, marker))
            map.addListener('click', () => infowindow.close())
        })
    }
    contactPage.appendChild(mapDiv)

    /**Append current page to content div. 
     * Add screen-hidden class to currentpage to hide it first, 
     * then allow it to transition in over 500ms.
     * When animation is finished, remove screen-hidden class from current page.
     */
    content.appendChild(contactPage)
    contactPage.classList.add("screen-hidden")
    requestAnimationFrame(() => contactPage.classList.remove("screen-hidden"))
}

/**Removes all traced of google api from html in order to prevent
 * multiple loads of the api, which could cause issues later on.
 */
function removeGoogleMapScript() {
    let keywords = ['maps.googleapis']

    //Remove google from BOM (window object)
    window.google = undefined

    //Remove google map scripts from DOM
    let scripts = document.head.getElementsByTagName("script")
    for (let i = scripts.length - 1; i >= 0; i--) {
        let scriptSource = scripts[i].getAttribute('src')
        if (scriptSource != null) {
            if (keywords.filter(item => scriptSource.includes(item)).length) {
                scripts[i].remove()
            }
        }
    }
}

/**Create google api url using api key.
 * Set source of script to url, and defer until html is loaded.
 */
function addGoogleMapScript() {
    const key = "AIzaSyBgXyqkZVXE515nBZW12GKBFkf4vEa4-xg"
    const url = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=myMap`
    const script = document.createElement('script');
    script.src = url
    script.defer = true
    document.head.appendChild(script)
}

export {
    renderContactPage
}