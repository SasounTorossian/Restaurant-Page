const content = document.getElementById("content")


const renderContactPage = () => {
    const currentTab = document.querySelector(".current-tab")
    if (currentTab != null) currentTab.classList.remove("current-tab")
    document.getElementById("contact-tab").classList.add("current-tab")


    const contactPage = document.createElement("div")
    contactPage.id = "contact-page"
    contactPage.classList.add("current-page")
    contactPage.textContent = "TESTING CONTENT"

    content.appendChild(contactPage)
}

export {
    renderContactPage
}