const content = document.getElementById("content")

const renderFooter= () => {
    const footer = document.createElement("div")
    footer.classList.add("footer")
    const p = document.createElement("p")
    p.textContent = "A project by Sasoun Torossian. 2020"

    footer.appendChild(p)
    content.appendChild(footer)
}

export{
    renderFooter
}