
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "web Developer", "UI/UX Designer", "Freelancer"],
    typeSpeed: 180,
    BackSpeed: 60,
    loop: true
})
var typed = new Typed(".typingg", {
    strings: ["", "Web Designer", "web Developer", "UI/UX Designer", "Freelancer"],
    typeSpeed: 60,
    BackSpeed: 60,
    loop: true
})


var side_data = document.querySelector(".dropdown"),
    nav_items = document.querySelector(".nav2"),
    menu = document.querySelector(".menu_bar"),
    close_button = document.querySelector(".close_menu");


function open_Menu() {
    side_data.style.display = "block";
    nav_items.style.display = "block";
    menu.style.display = "none";
    close_button.style.display = "block";
}

function close_Menu() {
    side_data.style.display = "block";
    nav_items.style.display = "none";
    menu.style.display = "block";
    close_button.style.display = "none";
}