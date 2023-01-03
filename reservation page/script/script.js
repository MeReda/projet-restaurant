const popupContainer = document.querySelector(".reservation-container"),
    tableImg = document.querySelector(".reservation-img");

// Start hide and undide popup script

tableImg.addEventListener("click", () => {
    popupContainer.classList.remove("hidden");
    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
        popupContainer.classList.add("hidden");
    });
});

// End hide and undide popup script

// Start add reservation script

const popupForm = document.querySelector("form.reservation-popup");
popupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // make reservation state reserved
    const reservationState = document.querySelector(".reservation-state");
    reservationState.classList.remove("text-bg-success");
    reservationState.classList.add("text-bg-danger");
    reservationState.textContent = "reservé";

    // make input field disabled
    const reservationInput = document.querySelector(".reservation-input");
    reservationInput.disabled = true;

    // hide add button and make del button visible
    const reservationAddBtn = document.querySelector(".reservation-add-btn");
    reservationAddBtn.classList.add("hidden");

    const reservationDelBtn = document.querySelector(".reservation-del-btn");
    reservationDelBtn.classList.remove("hidden");

    // add event listner to reservation del button
    reservationDelBtn.addEventListener("click", () => {
        // make reservation state libre
        reservationState.classList.remove("text-bg-danger");
        reservationState.classList.add("text-bg-success");
        reservationState.textContent = "libre";

        // make input field empty and make it enable
        reservationInput.value = "";
        reservationInput.disabled = false;

        // hide add button and make del button visible
        reservationAddBtn.classList.remove("hidden");
        reservationDelBtn.classList.add("hidden");
    });
});

// End add reservation script
