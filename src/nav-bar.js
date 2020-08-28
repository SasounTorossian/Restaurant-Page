const content = document.getElementById("content")

const tabs = [
    "home",
    "menu",
    "contact"
]

const renderNavBar = () => {
    const navBar = document.createElement("div")
    navBar.id = "nav-bar"

    // Create nav bar html elements once by one.
    const navBarLogo = document.createElement("div")
    navBarLogo.id = "nav-bar-logo"
    const navBarLogoImg = document.createElement("img")
    navBarLogoImg.src = "./images/images-nav-bar/logo.png"
    navBarLogoImg.height = "60"
    navBarLogoImg.classList.add("logo-img")
    navBarLogo.appendChild(navBarLogoImg)

    const navBarLogoTitle = document.createElement("h2")
    navBarLogoTitle.textContent = "le Désert Aride"
    navBarLogoTitle.classList.add("logo-title")
    navBarLogo.appendChild(navBarLogoTitle)
    navBar.appendChild(navBarLogo)

    // Create tabs with uppercase text
    tabs.forEach(tab => {
        const tabUppercase = tab.charAt(0).toUpperCase() + tab.slice(1)
        const tabDiv = document.createElement("div")
        tabDiv.id = `${tab}-tab`
        tabDiv.classList.add("tab")
        tabDiv.textContent = tabUppercase
        navBar.appendChild(tabDiv)
    })

    // Create git link
    const gitTab = document.createElement("div")
    gitTab.id = "git-tab"
    const gitTabLink = document.createElement("a")
    gitTabLink.id = "git-link"
    gitTabLink.href = "https://github.com/SasounTorossian"
    const gitTabImg = document.createElement("img")
    gitTabImg.id = "git-img"
    gitTabImg.src = "./images/images-nav-bar/git-logo.png"
    gitTabImg.height = "60"
    gitTabLink.appendChild(gitTabImg)
    gitTab.appendChild(gitTabLink)
    navBar.appendChild(gitTab)
    
    content.appendChild(navBar)
}

export {
    renderNavBar
}