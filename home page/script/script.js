// Start pageloader code 

let pageLoader = document.getElementById("pageLoader");

function showLoader() {
    pageLoader.style.display = "flex";
}

function hideLoader() {
    pageLoader.style.display = "none";
}

window.addEventListener('load', hideLoader);

// End pageloader code

// Start user priviliges display
const stockBtn = document.querySelector(".stock-btn"),
    personnelsBtn = document.querySelector(".personnels-btn"),
    reservationBtn = document.querySelector(".reservation-btn"),
    menuBtn = document.querySelector(".menu-btn"),
    utilisateursBtn = document.querySelector(".utilisateurs-btn");

window.onload = () => {
    if (window.localStorage.group == "2") {
        stockBtn.classList.add("disabled");
        personnelsBtn.classList.add("disabled");
        menuBtn.classList.add("disabled");
        utilisateursBtn.classList.add("disabled");
    } else if (window.localStorage.group == "3") {
        stockBtn.classList.add("disabled");
        personnelsBtn.classList.add("disabled");
        reservationBtn.classList.add("disabled");
        utilisateursBtn.classList.add("disabled");
    }
};
// End user priviliges display
