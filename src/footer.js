const content = document.getElementById("content")

const renderFooter= () => {
    const footer = document.createElement("div")
    footer.id = "footer"
    // If footer exists, return
    if(document.querySelector("#footer") != null) return
    const p = document.createElement("p")
    p.textContent = "A project by Sasoun Torossian. 2020"
    footer.appendChild(p)

    /**Append footer to content div. 
     * Add screen-hidden class to footer to hide it first, 
     * then allow it to transition in over 500ms.
     * When animation is finished, remove screen-hidden class from footer.
     */
    content.appendChild(footer)
    footer.classList.add("screen-hidden")
    requestAnimationFrame(() => footer.classList.remove("screen-hidden"))
}

export{
    renderFooter
}