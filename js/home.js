let explore = document.querySelector(".explore")

function redirect(){
    window.location.href="destination-moon.html"
}

explore.addEventListener("click",redirect)

let menu_bt = document.querySelector(".menu")
let side_menu = document.querySelector(".side_menu")

let exit_side_menu = document.querySelector(".exit_side_menu")

console.log(menu_bt)

function appear_side_bar(){
    side_menu.classList.add("side_menu_active")
}

function remove_side_bar(){
    side_menu.classList.remove("side_menu_active")
}

menu_bt.addEventListener("click",appear_side_bar)
exit_side_menu.addEventListener("click",remove_side_bar)

