import "jquery-parallax.js"
import {renderNavBar} from "./nav-bar.js"
import {renderHomePage} from "./home.js"
import {renderMenuPage} from "./menu.js"
import {renderContactPage} from "./contact.js"
import {renderFooter} from "./footer.js"

renderNavBar()
renderHomePage()
renderFooter()

const content = document.getElementById("content")

const tabs = document.querySelectorAll(".tab")
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        
        const selectedTab = e.target.id
        const currentPage = document.querySelector(".current-page")
        const footer = document.getElementById("footer")
        if (currentPage == null || footer == null) return

        currentPage.style.opacity = '0'
        footer.style.opacity = '0'

        // currentPage.remove()
        // footer.remove()
        setTimeout(function() {currentPage.remove()}, 500)
        setTimeout(function() {footer.remove()}, 500)
        // setTimeout(function() {content.removeChild(currentPage)}, 500)
        // setTimeout(function() {content.removeChild(footer)}, 500)


        // content.removeChild(currentPage)
        // content.removeChild(footer)
        
        if(selectedTab == "home-tab") setTimeout(renderHomePage, 500)
        else if(selectedTab == "menu-tab") setTimeout(renderMenuPage, 500) 
        else if(selectedTab == "contact-tab") setTimeout(renderContactPage, 500)  
        // setTimeout(function() {parSaveLoad(selectedTab)}, 1000)
        parSaveLoad(selectedTab)
        setTimeout(renderFooter, 500)  
    })
})

// parallax.js library created parallax-mirror element for each
// parallax image. These are appended to start of body tag and track
// position of scroll wheel to produce parallax effect in images.
function parSaveLoad(selectedTab) {
    // Parallax saving and loading code.
    const body = document.querySelector("body")
    let parList = document.querySelectorAll(".parallax-mirror")

    // Initialize static variable to retain variable state between calls
    if(typeof parSaveLoad.parSaved == "undefined") parSaveLoad.parSaved = 0

    // If not home-tab, save list in parSaved variable and remove parallax elements
    // If home-tab, load list and prepend them to beginning of body
    if(parList.length != 0 && selectedTab != "home-tab") {
        parSaveLoad.parSaved = parList
        parList.forEach(p => {
            p.classList.add("screen-hidden")
            setTimeout(function() {p.remove()}, 500)
        })
    }
    else if (parList.length == 0 && selectedTab == "home-tab") {
        parList = parSaveLoad.parSaved
        parList.forEach(p => {
            body.prepend(p)
            // p.classList.add("screen-hidden")
            requestAnimationFrame(() => p.classList.remove("screen-hidden"))
        })
    }
}
