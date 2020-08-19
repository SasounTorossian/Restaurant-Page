import {renderNavBar} from "./nav-bar.js"
import {renderHomePage} from "./home.js"
import {renderMenuPage} from "./menu.js"
import {renderContactPage} from "./contact.js"
import {renderFooter} from "./footer.js"

renderNavBar()
renderHomePage()
// renderMenuPage()
renderFooter()

const content = document.getElementById("content")

const tabs = document.querySelectorAll(".tab")
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const selectedTab = e.target.id
    
        parSaveLoad(selectedTab)

        content.removeChild(document.querySelector(".current-page"))
        content.removeChild(document.getElementById("footer"))
        
        if(selectedTab == "home-tab") renderHomePage()
        else if(selectedTab == "menu-tab") renderMenuPage()
        else if(selectedTab == "contact-tab") renderContactPage()

        renderFooter()
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
    if(parList.length != 0 && 
        selectedTab != "home-tab") {
        parSaveLoad.parSaved = parList
        parList.forEach(p => p.remove())
    }
    else if (parList.length == 0 &&
        selectedTab == "home-tab") {
        parList = parSaveLoad.parSaved
        parList.forEach(p => body.prepend(p))
    }
}

