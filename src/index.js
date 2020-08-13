import {renderNavBar} from "./nav-bar.js"
import {renderHomePage} from "./home.js"
import {renderMenuPage} from "./menu.js"
import {renderFooter} from "./footer.js"


renderNavBar()
renderHomePage()
renderFooter()

const clearPage = ( ) => {

}

const tabs = document.querySelectorAll(".tab")
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        console.log(e.target.id)
        const selectedTab = e.target.id
        if(selectedTab == "home-tab") {
            //Delete page
            renderHomePage()
        }
        else if(selectedTab == "menu-tab") {
            //Delete page
            renderMenuPage()
        }
        else if(selectedTab == "contact-tab") {
            // Do something
        }
    })
})

