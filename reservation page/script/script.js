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

// Start Generate tables forms

const baseHTML = `
    <div class="reservation-container table-1 hidden">
        <form class="reservation-popup p-5">
            <i class="fa-solid fa-circle-xmark close-btn"></i>
            <h3 class="mb-4 text-center">Table 01</h3>
            <span class="reservation-state badge rounded-pill text-bg-success">libre</span>
            <span class="mt-5 text-start">Entrez nom du clien</span>
            <input class="form-control mb-3 reservation-input" type="text" placeholder="Nom" required>
            <span>Entrez l'heure de debut</span>
            <input class="form-control mb-3 reservation-input" type="date" placeholder="entrez la date de reservation" required>
            <span>Entrez l'heure de debut</span>
            <input class="form-control mb-3 reservation-input" type="time" required>
            <span>Entrez l'heure de fin</span>
            <input class="form-control mb-3 reservation-input" type="time" required>
            <span>Entrez ID article</span>
            <input class="form-control mb-3 reservation-input" type="text" placeholder="ID" required>
            <button class="reservation-add-btn mt-3 mx-auto d-block" type="submit">ajouter</button>
            <button class="reservation-del-btn mt-3 mx-auto d-block hidden">libéré</button>
        </form>
    </div>
`;

const formsContainer = document.querySelector(".forms");

for (let i = 1; i <= 15; i++) {
    const html = baseHTML.replace("table-1", `table-${i}`).replace("Table 01", `Table ${i.toString().padStart(2, "0")}`);
    formsContainer.innerHTML += html;
}

// End Generate tables forms

// Start show table state for each table

function showState(tNumber) {
    // Get Elements
    const popupContainer = document.querySelector(`.table-${tNumber}`),
        closeBtn = document.querySelector(`.table-${tNumber} .close-btn`),
        myForm = document.querySelector(`.table-${tNumber} .reservation-popup`),
        stateTag = document.querySelector(`.table-${tNumber} .reservation-state`),
        inputFields = document.querySelectorAll(`.table-${tNumber} .reservation-input`),
        addBtn = document.querySelector(`.table-${tNumber} .reservation-add-btn`),
        delBtn = document.querySelector(`.table-${tNumber} .reservation-del-btn`);

    // Show and hide popup
    popupContainer.classList.remove("hidden");

    closeBtn.addEventListener("click", () => {
        popupContainer.classList.add("hidden");
    });

    myForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Change table state to reservé
        stateTag.classList.remove("text-bg-success");
        stateTag.classList.add("text-bg-danger");
        stateTag.textContent = "reservé";

        // make input field disabled
        inputFields.forEach(e => {
            e.disabled = true;
        });

        // change buttons
        addBtn.classList.add("hidden")
        delBtn.classList.remove("hidden")

    });
    
    // delete reservation
    delBtn.addEventListener("click", () => {
        setTimeout(() => { // I use setTimeout because maby there is a function that override this changes or the webite doesn't refrech correctly
            // Change table state to libre
            stateTag.classList.remove("text-bg-danger");
            stateTag.classList.add("text-bg-success");
            stateTag.textContent = "libre";

            // make input field enabled and clear it
            inputFields.forEach(e => {
                e.value = ""
                e.disabled = false
            })

            // Change buttons
            delBtn.classList.add("hidden")
            addBtn.classList.remove("hidden")
        }, 100);
        
    })

    
}

// End show table state for each table
