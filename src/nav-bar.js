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
    const homeTabBtn = document.createElement("button")
    homeTabBtn.classList.add("tab-button")
    homeTabBtn.textContent = "Home"
    homeTab.appendChild(homeTabBtn)
    navBar.appendChild(homeTab)

    const menuTab = document.createElement("div")
    menuTab.id = "menu-tab"
    menuTab.classList.add("tab")
    const menuTabBtn = document.createElement("button")
    menuTabBtn.classList.add("tab-button")
    menuTabBtn.textContent = "Menu"
    menuTab.appendChild(menuTabBtn)
    navBar.appendChild(menuTab)

    const contactTab = document.createElement("div")
    contactTab.id = "contact-tab"
    contactTab.classList.add("tab")
    const contactTabBtn = document.createElement("button")
    contactTabBtn.classList.add("tab-button")
    contactTabBtn.textContent = "Contact Us"
    contactTab.appendChild(contactTabBtn)
    navBar.appendChild(contactTab)

    const gitTab = document.createElement("div")
    gitTab.id = "git-tab"
    gitTab.classList.add("tab")
    const gitTabLink = document.createElement("a")
    gitTabLink.id = "gitLink"
    gitTabLink.href = "https://github.com/SasounTorossian"
    const gitTabImg = document.createElement("img")
    gitTabImg.src = "./images/images-nav-bar/Github Logo.png"
    gitTabImg.height = "60"
    gitTabImg.classList.add("tab-button")
    gitTabLink.appendChild(gitTabImg)
    gitTab.appendChild(gitTabLink)
    navBar.appendChild(gitTab)
    
    content.appendChild(navBar)
}

export {
    renderNavBar
}