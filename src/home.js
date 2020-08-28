const content = document.getElementById("content")

// sections which include image source, image text, header and sections text
const sections = [
    {
        "img": "./images/images-home-page/desert-1.jpg", 
        "pImg": "Welcome to Fine Desert Dining",
        "hBody": "Our History",
        "pBody": "le Désert Aride was founded by 2 lost tourists name Pierr Brodeur  and Hans Müller, along with their guide Maalik bin Abubakr. After surviving for multiple days on nothing but the finest insects, oasis water, and camel testicles, the three adventures finally decided to open up a chain of restaurants throughout the world's deserts. Today, their dream of exquisite desert food has come to life, with locations in the Sahara, Namib, Gobi, and other such deserts. We hope you enjoy your stay with us, and remember this experience for the rest of your life."
    },
    {
        "img": "./images/images-home-page/desert-2.jpg", 
        "pImg": "The Sandiest Cuisine you will Ever Experience",
        "hBody": "The Best Ingredients",
        "pBody": "We use only the finest ingredients from the local area, as well as importing unique ingredients from abroad. This makes our dishes incredibly rare, which is reflected in the pricing. Guests are also welcome to eat any insects or plants they manage to scavenge while seated. Here at le Désert Aride, we strive for the finest food to leave a sandy taste in your mouth."
    },
    {
        "img": "./images/images-home-page/desert-3.jpg", 
        "pImg": "Come for the Experience, Stay due to Heatstroke",
        "hBody": "Come Get Lost in the Sands of Time",
        "pBody": "Upon wandering into le Désert Aride establishments found only in the finest deserts around the world, you will be greeted by a wandering nomad who will designate a spot for you to sit down. At this point you will be given a menu, and 45 min to decide what delectable meal you would like to seduce your tastebuds with. While there is no formal dress code, we do encourage guests to come prepared for temperatures up to 47°C (117 °F). Such is the experience of le Désert Aride."
    },
    
]

const renderHomePage = () => {
    // find and remove current-tab class from nav-bar. Add current-tab class to home-tab 
    const currentTab = document.querySelector(".current-tab")
    if (currentTab != null) currentTab.classList.remove("current-tab")
    document.getElementById("home-tab").classList.add("current-tab")

    /**If current-page class was not removed previously, return
     * else, create new home page and add current-page class to it
     */
    if(document.querySelector(".current-page") != null) return
    const homePage = document.createElement("div")
    homePage.id = "home-page"
    homePage.classList.add("current-page")

    /* Create sections based off "sections" array of objects.
        Initially add parallax data to each image for effect*/ 
    sections.forEach((sec, index) => {
        const pimg = document.createElement("div")
        pimg.classList.add(`pimg${index+1}`)
        pimg.classList.add("parallax")
        pimg.setAttribute("data-z-index", "0")
        pimg.setAttribute("data-parallax", "scroll")
        pimg.setAttribute("data-image-src", sec.img)

        const ptext = document.createElement("div")
        ptext.classList.add("ptext")

        const span = document.createElement("span")
        span.classList.add("border")
        span.textContent = sec.pImg
        
        ptext.appendChild(span)
        pimg.appendChild(ptext)
        homePage.appendChild(pimg)

        const section = document.createElement("section")
        section.classList.add("section")
        section.classList.add("section-light")

        const h2 = document.createElement("h2")
        h2.textContent = sec.hBody
        section.appendChild(h2)

        const p = document.createElement("p")
        p.textContent = sec.pBody
        section.appendChild(p)
        homePage.appendChild(section)

    })

    /**Append current page to content div. 
     * Add screen-hidden class to currentpage to hide it first, 
     * then allow it to transition in over 500ms.
     * When animation is finished, remove screen-hidden class from current page.
     */
    content.appendChild(homePage)
    homePage.classList.add("screen-hidden")
    requestAnimationFrame(() => homePage.classList.remove("screen-hidden"))
}

export {
    renderHomePage
}