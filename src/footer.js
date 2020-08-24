const content = document.getElementById("content")

const renderFooter= () => {
    const footer = document.createElement("div")
    footer.id = "footer"
    if(document.querySelector("#footer") != null) return
    const p = document.createElement("p")
    p.textContent = "A project by Sasoun Torossian. 2020"

    footer.appendChild(p)
    content.appendChild(footer)

    footer.classList.add("screen-hidden")
    requestAnimationFrame(() => footer.classList.remove("screen-hidden"))
}

export{
    renderFooter
}