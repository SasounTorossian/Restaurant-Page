const content = document.getElementById("content")

let menu = {
    starters: [
        {
            "name": "beetle",
            "ing": "A delicious beetle, sauteed in brine and urine",
            "price": "20"
        },
        {
            "name": "dragonfly",
            "ing": "A delicious dragonfly, sauteed in brine and urine",
            "price": "30"
        }
    ],

    mains: [
        {
            "name": "Desert Shrub",
            "ing": "A lovely desert shrub soaked in vanilla extract served with beetle legs.",
            "price": "50"
        },
        {
            "name": "Mongolian camel BBQ",
            "ing": "Mongolian camel thighs straight from the Gobi desert, marinated and grilled over a fire. Served with camel cheese on the side.",
            "price": "60"
        }
    ],

    drinks: [
        {
            "name": "Oasis water",
            "ing": "1L of our finest oasis water, filled with minerals and natural flavour",
            "price": "5"
        },
        {
            "name": "Camel milk",
            "ing": "A 770ml bottle of the finest camel milk, milked fresh every day.",
            "price": "10"
        }
    ]

}

const renderMenuPage = () => {
    const menuPage = document.createElement("div")
    menuPage.id = "menu-page"
    menuPage.classList.add("current-page")
    // menuPage.style.background = "url('images/images-menu-page/menu-desert.jpg')"

    for (let type in menu) {
        let typeUppercase = type.charAt(0).toUpperCase() + type.slice(1)
        
        const menuType = document.createElement("div")
        menuType.id = type
        menuType.classList.add("menu-type")
        const menuTypeP = document.createElement("p")
        menuTypeP.textContent = typeUppercase
        menuTypeP.classList.add("menu-header")
        menuType.appendChild(menuTypeP)
        
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
    content.appendChild(menuPage)
}

export {
    renderMenuPage
}