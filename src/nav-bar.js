const content = document.getElementById("content")

const renderNavBar = () => {
    const navBar = document.createElement("div")
    navBar.id = "nav-bar"

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



    const homeTab = document.createElement("div")
    homeTab.id = "home-tab"
    homeTab.classList.add("tab")
    homeTab.textContent = "Home"
    navBar.appendChild(homeTab)

    const menuTab = document.createElement("div")
    menuTab.id = "menu-tab"
    menuTab.classList.add("tab")
    menuTab.textContent = "Menu"
    navBar.appendChild(menuTab)

    const contactTab = document.createElement("div")
    contactTab.id = "contact-tab"
    contactTab.classList.add("tab")
    contactTab.textContent = "Contact Us"
    navBar.appendChild(contactTab)

    const gitTab = document.createElement("div")
    gitTab.id = "git-tab"
    // gitTab.classList.add("tab")
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