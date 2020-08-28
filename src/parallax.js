/**Parallax.js library created parallax-mirror element for each
 * parallax image. These are appended to start of body tag and track
 * position of scroll wheel to produce parallax effect in images.
 */
const parallaxLoadSave = (selectedTab) => {
    // Parallax saving and loading code.
    const body = document.querySelector("body")
    let parList = document.querySelectorAll(".parallax-mirror")

    // Initialize static variable to retain variable state between calls
    if(typeof parallaxLoadSave.parSaved == "undefined") parallaxLoadSave.parSaved = 0

    /**If not home-tab, save list in parSaved variable and remove parallax elements.
     * If home-tab, load list and prepend them to beginning of body
     */
    if(parList.length != 0 && selectedTab != "home-tab") {
        parallaxLoadSave.parSaved = parList
        parList.forEach(p => {
            p.classList.add("screen-hidden")
            setTimeout(function() {p.remove()}, 500)
        })
    }
    else if (parList.length == 0 && selectedTab == "home-tab") {
        parList = parallaxLoadSave.parSaved
        parList.forEach(p => {
            body.prepend(p)
            requestAnimationFrame(() => p.classList.remove("screen-hidden"))
        }) 
    }

}

export {
    parallaxLoadSave
}