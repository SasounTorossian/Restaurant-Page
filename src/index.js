// Import functions from files and parallax.js for parallax effect
import "jquery-parallax.js"
import {renderNavBar} from "./nav-bar.js"
import {renderHomePage} from "./home.js"
import {renderMenuPage} from "./menu.js"
import {renderContactPage} from "./contact.js"
import {renderFooter} from "./footer.js"
import {parallaxLoadSave} from "./parallax.js"

// Render initial page
renderNavBar()
renderHomePage()
renderFooter()

const tabs = document.querySelectorAll(".tab")
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const selectedTab = e.target.id
        const currentPage = document.querySelector(".current-page")
        const footer = document.getElementById("footer")
        // If for whatever reason current-page does not exist, abort
        if (currentPage == null || footer == null) return

        /**Set opacity of current page and footer to zero
         * so they transition out smoothly 
         */
        currentPage.classList.add("screen-hidden")
        footer.classList.add("screen-hidden")

        /**Remove current page and footer from DOM 
         * after 500ms when animation has finished 
         */
        setTimeout(function() {currentPage.remove()}, 500)
        setTimeout(function() {footer.remove()}, 500)
        
        // Render the necessary page after 500ms, after current page  transitioned out 
        if(selectedTab == "home-tab") setTimeout(renderHomePage, 500)
        else if(selectedTab == "menu-tab") setTimeout(renderMenuPage, 500) 
        else if(selectedTab == "contact-tab") setTimeout(renderContactPage, 500)  

        // Render footer after 500ms, after previous footer transitioned out 
        setTimeout(renderFooter, 500)  

        // Load parallax data if rendering home page, save and remove if not
        parallaxLoadSave(selectedTab)
    })
})
