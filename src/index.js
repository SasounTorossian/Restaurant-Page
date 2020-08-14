import {renderNavBar} from "./nav-bar.js"
import {renderHomePage} from "./home.js"
import {renderMenuPage} from "./menu.js"
import {renderContactPage} from "./contact.js"
import {renderFooter} from "./footer.js"


let parallaxMirrorNodeList

renderNavBar()
renderHomePage()
renderFooter()

const content = document.getElementById("content")


const clearPage = ( ) => {

}

const tabs = document.querySelectorAll(".tab")
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const selectedTab = e.target.id
    
        saveAndLoadParallax(selectedTab)
        const currentPage = document.querySelector(".current-page")
        const footer = document.getElementById("footer")
        
        if(selectedTab == "home-tab") {
            console.log(currentPage)
            content.removeChild(currentPage)
            content.removeChild(footer)
            renderHomePage()
            renderFooter()
        }
        else if(selectedTab == "menu-tab") {
            console.log(currentPage)
            content.removeChild(currentPage)
            content.removeChild(footer)
            renderMenuPage()
            renderFooter()
        }
        else if(selectedTab == "contact-tab") {
            content.removeChild(currentPage)
            content.removeChild(footer)
            renderContactPage()
            renderFooter()
        }
    })
})

function saveAndLoadParallax(selectedTab) {
    // Parallax saving and loading code.
    const body = document.querySelector("body")

    let parallaxMirrorElems = Array.from(document.querySelectorAll(".parallax-mirror"))

    if(parallaxMirrorElems.length != 0 && 
        selectedTab != "home-tab") {
        parallaxMirrorNodeList = parallaxMirrorElems
        parallaxMirrorElems.forEach(parallaxMirror => {
            parallaxMirror.remove()
        })
    }
    else if (parallaxMirrorElems.length == 0 &&
        selectedTab == "home-tab") {
        parallaxMirrorElems = parallaxMirrorNodeList
        parallaxMirrorElems.forEach(pElem => {
            body.prepend(pElem)
        })
    }
}

