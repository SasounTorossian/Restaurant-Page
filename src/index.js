import {renderNavBar} from "./nav-bar.js"
import {renderHomePage} from "./home.js"
import {renderFooter} from "./footer.js"


renderNavBar()
// renderHomePage()
renderFooter()

const tabs = document.querySelectorAll(".tab")
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        console.log(e.target)
    })
})

