const content = document.getElementById("content")

let starters = [
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
]

let mains = [
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
]

let drinks = [
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


const renderMenuPage = () => {

    const menuPage = document.createElement("div")
    menuPage.id = "menu-page"
    menuPage.classList.add("current-page")
    // menuPage.style.background = "url('images/images-menu-page/menu-desert.jpg')"


    const menuStarters = document.createElement("div")
    menuStarters.id = "starters"
    menuStarters.classList.add("menu-type")
    const menuStartersP = document.createElement("p")
    menuStartersP.textContent = "Starters"
    menuStartersP.classList.add("menu-header")
    menuStarters.appendChild(menuStartersP)

    starters.forEach(food => {
        const menuItem = document.createElement("div")
        menuItem.classList.add("menu-item")
    
        const menuDesc = document.createElement("div")
        menuDesc.classList.add("menu-desc")
    
        const menuName = document.createElement("div")
        menuName.classList.add("menu-name")
        const menuNameP = document.createElement("p")
        menuNameP.textContent = food.name
        menuName.appendChild(menuNameP)
        menuDesc.appendChild(menuName)
    
        const menuIng = document.createElement("div")
        menuIng.classList.add("menu-ing")
        const menuIngP = document.createElement("p")
        menuIngP.textContent = food.ing
        menuIng.appendChild(menuIngP)
        menuDesc.appendChild(menuIng)
    
        const menuPrice = document.createElement("div")
        menuPrice.classList.add("menu-price")
        const menuPriceP = document.createElement("p")
        menuPriceP.textContent = food.price
        menuPrice.appendChild(menuPriceP)
    
        menuItem.appendChild(menuDesc)
        menuItem.appendChild(menuPrice)
        menuStarters.appendChild(menuItem)
    })
    menuPage.appendChild(menuStarters)


    const menuMains = document.createElement("div")
    menuMains.id = "mains"
    menuMains.classList.add("menu-type")
    const menuMainsP = document.createElement("p")
    menuMainsP.textContent = "Mains"
    menuMainsP.classList.add("menu-header")
    menuMains.appendChild(menuMainsP)

    mains.forEach(food => {
        const menuItem = document.createElement("div")
        menuItem.classList.add("menu-item")
    
        const menuDesc = document.createElement("div")
        menuDesc.classList.add("menu-desc")
    
        const menuName = document.createElement("div")
        menuName.classList.add("menu-name")
        const menuNameP = document.createElement("p")
        menuNameP.textContent = food.name
        menuName.appendChild(menuNameP)
        menuDesc.appendChild(menuName)
    
        const menuIng = document.createElement("div")
        menuIng.classList.add("menu-ing")
        const menuIngP = document.createElement("p")
        menuIngP.textContent = food.ing
        menuIng.appendChild(menuIngP)
        menuDesc.appendChild(menuIng)
    
        const menuPrice = document.createElement("div")
        menuPrice.classList.add("menu-price")
        const menuPriceP = document.createElement("p")
        menuPriceP.textContent = food.price
        menuPrice.appendChild(menuPriceP)
    
        menuItem.appendChild(menuDesc)
        menuItem.appendChild(menuPrice)
        menuMains.appendChild(menuItem)
    })
    menuPage.appendChild(menuMains)


    const menuDrinks = document.createElement("div")
    menuDrinks.id = "drinks"
    menuDrinks.classList.add("menu-type")
    const menuDrinksP = document.createElement("p")
    menuDrinksP.textContent = "Drinks"
    menuDrinksP.classList.add("menu-header")
    menuDrinks.appendChild(menuDrinksP)

    drinks.forEach(food => {
        const menuItem = document.createElement("div")
        menuItem.classList.add("menu-item")
    
        const menuDesc = document.createElement("div")
        menuDesc.classList.add("menu-desc")
    
        const menuName = document.createElement("div")
        menuName.classList.add("menu-name")
        const menuNameP = document.createElement("p")
        menuNameP.textContent = food.name
        menuName.appendChild(menuNameP)
        menuDesc.appendChild(menuName)
    
        const menuIng = document.createElement("div")
        menuIng.classList.add("menu-ing")
        const menuIngP = document.createElement("p")
        menuIngP.textContent = food.ing
        menuIng.appendChild(menuIngP)
        menuDesc.appendChild(menuIng)
    
        const menuPrice = document.createElement("div")
        menuPrice.classList.add("menu-price")
        const menuPriceP = document.createElement("p")
        menuPriceP.textContent = food.price
        menuPrice.appendChild(menuPriceP)
    
        menuItem.appendChild(menuDesc)
        menuItem.appendChild(menuPrice)
        menuDrinks.appendChild(menuItem)
    })
    menuPage.appendChild(menuDrinks)



    content.appendChild(menuPage)
}

export {
    renderMenuPage
}