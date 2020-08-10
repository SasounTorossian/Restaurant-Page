console.log("Everything is working")
console.log("EVerything is still working")

div_content = document.querySelector("#content")

let div_image = document.createElement("div")
div_image.classList.add("image")
let img = document.createElement("img")
img.src = "../images/res-test.jpg"
div_image.appendChild(img)
div_content.appendChild(div_image)

let div_title = document.createElement("div")
div_title.classList.add("title")
let title = document.createElement("p")
title.textContent = "Hi welcome to Chillis"
div_title.appendChild(title)
div_content.appendChild(div_title)

let div_body = document.createElement("div")
div_body.classList.add("body")
let body = document.createElement("p")
body.textContent = "Please, sit down."
div_body.appendChild(body)
div_content.appendChild(div_body)