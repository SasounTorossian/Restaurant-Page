const content = document.getElementById("content")

const renderHomePage = () => {
    const homePage = document.createElement("div")
    homePage.id = "home-page"
    homePage.classList.add("current-page")

    // First section
    const pimg1 = document.createElement("div")
    pimg1.classList.add("pimg1")
    pimg1.classList.add("parallax")
    pimg1.setAttribute("data-z-index", "0")
    pimg1.setAttribute("data-parallax", "scroll")
    pimg1.setAttribute("data-image-src", "./images/images-home-page/desert-dunes-lake-blue-sky-hot-day-1920x1080_898588-mm-90.jpg")

    const ptext1 = document.createElement("div")
    ptext1.classList.add("ptext")

    const span1 = document.createElement("span")
    span1.classList.add("border")
    span1.textContent = "Welcome to the Sands of Luxury"
    
    ptext1.appendChild(span1)
    pimg1.appendChild(ptext1)
    homePage.appendChild(pimg1)

    const section1 = document.createElement("section")
    section1.classList.add("section")
    section1.classList.add("section-light")

    const h2_1 = document.createElement("h2")
    h2_1.textContent = "Our History"
    section1.appendChild(h2_1)

    const p1 = document.createElement("p")
    p1.textContent = "le Désert Aride was founded by 2 lost tourists name John Doe and David Guetta, along with their guide Mohammed bin Abubakr. After surviving for multiple days on nothing but insects and camel testicles, the three adventures decided to open up a chain of restaurants throughout the world's deserts. Today, their dream of exquisite desert food has come to life, with locations in the Sahara, Namib, Gobi, and other such deserts."
    section1.appendChild(p1)
    homePage.appendChild(section1)

    //Second section
    const pimg2 = document.createElement("div")
    pimg2.classList.add("pimg2")
    pimg2.classList.add("parallax")
    pimg2.setAttribute("data-z-index", "0")
    pimg2.setAttribute("data-parallax", "scroll")
    pimg2.setAttribute("data-image-src", "./images/images-home-page/desert_dunes_sand_141784_1920x1080.jpg")

    const ptext2 = document.createElement("div")
    ptext2.classList.add("ptext")

    const span2 = document.createElement("span")
    span2.classList.add("border")
    span2.textContent = "The Best Food, if we Find Any"
    
    ptext2.appendChild(span2)
    pimg2.appendChild(ptext2)
    homePage.appendChild(pimg2)

    const section2 = document.createElement("section")
    section2.classList.add("section")
    section2.classList.add("section-light")

    const h2_2 = document.createElement("h2")
    h2_2.textContent = "The Best Ingredients"
    section2.appendChild(h2_2)

    const p2 = document.createElement("p")
    p2.textContent = "We do our best to scavenge and find the best ingredients from the surrounding wasteland. This makes our dishes unique in that they are incredibly rare. Here at le Désert Aride, we strive for the finest food to leave a sandy taste in your mouth."
    section2.appendChild(p2)
    homePage.appendChild(section2)

    //Third section
    const pimg3 = document.createElement("div")
    pimg3.classList.add("pimg3")
    pimg3.classList.add("parallax")
    pimg3.setAttribute("data-z-index", "0")
    pimg3.setAttribute("data-parallax", "scroll")
    pimg3.setAttribute("data-image-src", "./images/images-home-page/Sand-dunes-Sahara-Morocco-Merzouga.jpg")

    const ptext3 = document.createElement("div")
    ptext3.classList.add("ptext")

    const span3 = document.createElement("span")
    span3.classList.add("border")
    span3.textContent = "Welcome the Sands of Luxury"
    
    ptext3.appendChild(span3)
    pimg3.appendChild(ptext3)
    homePage.appendChild(pimg3)

    const section3 = document.createElement("section")
    section3.classList.add("section")
    section3.classList.add("section-light")

    const h2_3 = document.createElement("h2")
    h2_3.textContent = "Come Get Lost in the Sands of Time"
    section3.appendChild(h2_3)

    const p3 = document.createElement("p")
    p3.textContent = "Upon wandering into le Désert Aride, you will be greeted by a wandering nomad who will designate a spot for you to sit down. At this point you will point at any living thing you can find, and we will do our best to capture it and cook it for you. Such is the experience of le Désert Aride."
    section3.appendChild(p3)
    homePage.appendChild(section3)

    content.appendChild(homePage)
}

export {
    renderHomePage
}