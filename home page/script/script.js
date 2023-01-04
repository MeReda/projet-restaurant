const stockBtn = document.querySelector(".stock-btn"),
    personnelsBtn = document.querySelector(".personnels-btn"),
    reservationBtn = document.querySelector(".reservation-btn"),
    menuBtn = document.querySelector(".menu-btn"),
    utilisateursBtn = document.querySelector(".utilisateurs-btn");

console.log(window.localStorage.group);

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
