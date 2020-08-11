const content = document.getElementById("content")

const renderNavBar = () => {
    const navBar = document.createElement("div")
    navBar.id = "nav-bar"

    const navBarImage = document.createElement("div")
    navBarImage.id = "nav-bar-image"
    const navBarImageImg = document.createElement("img")
    navBarImageImg.src = "./images/Sand Dune.png"
    navBarImageImg.height = "80"
    navBarImageImg.classList.add("tab-button")
    navBarImage.appendChild(navBarImageImg)
    navBar.appendChild(navBarImage)

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
    const gitTabImg = document.createElement("img")
    gitTabImg.src = "./images/Github Logo.png"
    gitTabImg.height = "60"
    gitTabImg.classList.add("tab-button")
    gitTab.appendChild(gitTabImg)
    navBar.appendChild(gitTab)
    
    content.appendChild(navBar)
}

export {
    renderNavBar
}