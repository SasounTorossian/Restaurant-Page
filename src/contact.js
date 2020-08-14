const content = document.getElementById("content")


const renderContactPage = () => {
    const contactPage = document.createElement("div")
    contactPage.id = "contact-page"
    contactPage.classList.add("current-page")
    contactPage.textContent = "TESTING CONTENT"

    content.appendChild(contactPage)
}

export {
    renderContactPage
}