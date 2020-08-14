const content = document.getElementById("content")


const renderMenuPage = () => {
    const menuPage = document.createElement("div")
    menuPage.id = "menu-page"
    menuPage.classList.add("current-page")
    menuPage.textContent = "TESTING MENU"

    content.appendChild(menuPage)
}

export {
    renderMenuPage
}