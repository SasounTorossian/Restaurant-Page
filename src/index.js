import "jquery-parallax.js"
import {renderNavBar} from "./nav-bar.js"
import {renderHomePage} from "./home.js"
import {renderMenuPage} from "./menu.js"
import {renderContactPage} from "./contact.js"
import {renderFooter} from "./footer.js"
import {parallaxLoadSave} from "./parallax.js"

renderNavBar()
renderHomePage()
renderFooter()

const tabs = document.querySelectorAll(".tab")
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const selectedTab = e.target.id
        const currentPage = document.querySelector(".current-page")
        const footer = document.getElementById("footer")
        if (currentPage == null || footer == null) return

        currentPage.classList.add("screen-hidden")
        footer.classList.add("screen-hidden")

        setTimeout(function() {currentPage.remove()}, 500)
        setTimeout(function() {footer.remove()}, 500)
        
        if(selectedTab == "home-tab") setTimeout(renderHomePage, 500)
        else if(selectedTab == "menu-tab") setTimeout(renderMenuPage, 500) 
        else if(selectedTab == "contact-tab") setTimeout(renderContactPage, 500)  

        parallaxLoadSave(selectedTab)
        setTimeout(renderFooter, 500)  
    })
})
