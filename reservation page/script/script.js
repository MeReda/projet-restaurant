// Start privileges script for diff users

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

// Start privileges script for diff users

// Start show table state for each table

function showState(tNumber) {
    // Get Elements
    const popupContainer = document.querySelector(`.table-${tNumber}`),
        closeBtn = document.querySelector(`.table-${tNumber} .close-btn`),
        myForm = document.querySelector(`.table-${tNumber} .reservation-popup`),
        stateTag = document.querySelector(
            `.table-${tNumber} .reservation-state`
        ),
        inputField = document.querySelector(
            `.table-${tNumber} .reservation-input`
        ),
        addBtn = document.querySelector(
            `.table-${tNumber} .reservation-add-btn`
        ),
        delBtn = document.querySelector(
            `.table-${tNumber} .reservation-del-btn`
        );

    // Show and hide popup
    popupContainer.classList.remove("hidden");

    closeBtn.addEventListener("click", () => {
        popupContainer.classList.add("hidden");
    });

    // Change table state on submit
    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
        stateTag.classList.remove("text-bg-success");
        stateTag.classList.add("text-bg-danger");
        stateTag.textContent = "reservé";

        // make input field disabled
        inputField.disabled = true;
    });

    // ----------------------- Problem down ----------------------- add (time begin) (time end) (date) (menu item id)
     // Change buttons
     delBtn.classList.toggle("hidden")
     addBtn.classList.toggle("hidden")
 
     // add event listner to reservation del button
     delBtn.addEventListener("click", () => {
         // make reservation state libre
         stateTag.classList.remove("text-bg-danger");
         stateTag.classList.add("text-bg-success");
         stateTag.textContent = "libre";
 
         // make input field empty and make it enable
         inputField.value = "";
         inputField.disabled = false;
 
         // hide add button and make del button visible
         delBtn.classList.toggle("hidden");
         addBtn.classList.toggle("hidden");

     });
}

// End show table state for each table
