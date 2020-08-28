const content = document.getElementById("content")

// Menu for restaurant. Name, ing, and price are contained in each object.
const menu = {
    starters: [
        {
            "name": "Cactus salad Ⓥ",
            "ing": "A salad made from the succulent pads of the prickly pear, sword pear, and saguaro. Served with a sweet chilli marinade",
            "price": "7"
        },
        {
            "name": "Toasted Arizona desert hairy scorpion",
            "ing": "Three large hadrurus arizonensis scorpions harvested from the Mojave Desert toasted until golden brown, served with a small side of desert turf grass.",
            "price": "8"
        },
        {
            "name": "Regal horned lizard barbeque",
            "ing": "One large phrynosoma solare marinated for 24 hours in aloe vera paste, barbequed until crispy.",
            "price": "10"
        },
        {
            "name": "Namib Desert beetle fry-up",
            "ing": "100g of the finest stenocara gracilipes beetles captured from the Namib Desert, fried in palm oil and served sizzling.",
            "price": "12"
        }
    ],

    mains: [
        {
            "name": "Date jam served with pita Ⓥ",
            "ing": "A jam made with ripe dates and served with 2 large freshly made pitas.",
            "price": "12"
        },
        {
            "name": "Mesquite soup Ⓥ",
            "ing": "Out finest mesquite seeds cooked in desert water and served with olive oil and a slice of lemon.",
            "price": "12"
        },

        {
            "name": "Bactrian camel Kabsa",
            "ing": "A 250g cut of Camelus bactrianus loin imported from the Gobi Desert, marinated in spices and grilled over a fire. Served with 350g of rice.",
            "price": "20"
        },
        {
            "name": "Nile crocodile stew",
            "ing": "A stew made with the tender flesh of a captured crocodylus niloticus crocodile from the Nile River. Cooked with plenty of salt, herbs, and spices. A procession will be held after the meal for those who were killed while capturing the crocodile (RIP  Ahmed).",
            "price": "35"
        },
    ],

    desserts: [
        {
            "name": "Wolfberry soufflé Ⓥ",
            "ing": "A sublime soufflé made using freshly harvested and imported Lycium exsertum berries straight from the lower Sonora Desert.",
            "price": "12"
        },
        {
            "name": "Tequila chocolate truffles Ⓥ",
            "ing": "Decadent chocolate truffles made using fresh tequila pressed in-house from newly harvested agave.",
            "price": "14"
        },
        {
            "name": "Dromedary camel yoghurt Ⓥ",
            "ing": "A cool yoghurt made from freshly squeezed camel milk. Served with cucumbers and parsley.",
            "price": "14"
        },
        {
            "name": "Vanilla ice cream served with jewel scarabs",
            "ing": "150g of freshly made vanilla ice cream topped with ruteline genus chrysina golden scarabs for zest and beauty.",
            "price": "15"
        }

    ],
}

/*
DOM representaiton of menu structure:

menu-page
    |->menu-type
        |-> menu_header 
        |-> menu-item
            |-> menu-desc
            |   |-> menu-name      
            |   |-> menu-ing
            |-----> menu-price
*/

const renderMenuPage = () => {
    // find and remove current-tab class from nav-bar. Add current-tab class to home-tab 
    const currentTab = document.querySelector(".current-tab")
    if (currentTab != null) currentTab.classList.remove("current-tab")
    document.getElementById("menu-tab").classList.add("current-tab")

    /**If current-page class was not removed previously, return
     * else, create new home page and add current-page class to it
     */
    if(document.querySelector(".current-page") != null) return
    const menuPage = document.createElement("div")
    menuPage.id = "menu-page"
    menuPage.classList.add("current-page")

    // Get each type of dish in menu, and created a header for it
    for (let type in menu) {
        /**Convert first letter of type string to uppercase. 
         * this is done to keep the type string lowercase in order
         * to be consistent with id naming conventions
         */ 
        let typeUppercase = type.charAt(0).toUpperCase() + type.slice(1)
        
        const menuType = document.createElement("div")
        menuType.id = type
        menuType.classList.add("menu-type")
        const menuTypeP = document.createElement("p")
        menuTypeP.textContent = typeUppercase
        menuTypeP.classList.add("menu-header")
        menuType.appendChild(menuTypeP)
        
        // Create page by iterating over dishes in each type
        menu[type].forEach(dish => {
            const menuItem = document.createElement("div")
            menuItem.classList.add("menu-item")
        
            const menuDesc = document.createElement("div")
            menuDesc.classList.add("menu-desc")
        
            const menuName = document.createElement("div")
            menuName.classList.add("menu-name")
            const menuNameP = document.createElement("p")
            menuNameP.textContent = dish.name
            menuName.appendChild(menuNameP)
            menuDesc.appendChild(menuName)
        
            const menuIng = document.createElement("div")
            menuIng.classList.add("menu-ing")
            const menuIngP = document.createElement("p")
            menuIngP.textContent = dish.ing
            menuIng.appendChild(menuIngP)
            menuDesc.appendChild(menuIng)
        
            const menuPrice = document.createElement("div")
            menuPrice.classList.add("menu-price")
            const menuPriceP = document.createElement("p")
            menuPriceP.textContent = dish.price
            menuPrice.appendChild(menuPriceP)
        
            menuItem.appendChild(menuDesc)
            menuItem.appendChild(menuPrice)
            menuType.appendChild(menuItem)
        })
        menuPage.appendChild(menuType)
    }
    
    /**Append current page to content div. 
     * Add screen-hidden class to current page to hide it first, 
     * then allow it to transition in over 500ms.
     * When animation is finished, remove screen-hidden class from current page.
     */
    content.appendChild(menuPage)
    menuPage.classList.add("screen-hidden")
    requestAnimationFrame(() => menuPage.classList.remove("screen-hidden"))
}

export {
    renderMenuPage
}