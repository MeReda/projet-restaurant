// chage just the script.js file witch is this file
// Begin display form on click on add button
const addButton = document.querySelector(".add-btn"),
    formPopup = document.querySelector(".form-popup");

addButton.addEventListener("click", () => {
    formPopup.classList.remove("hidden");

    const closeButton = document.querySelector(".close-btn");
    closeButton.addEventListener("click", () => {
        formPopup.classList.add("hidden");
    });
});
// End display form on click on add button

// Begin add Elements to table body

let selectedRow = null;

// Clear All Fields
function clearFields() {
    document.querySelector("#id").value = "";
    document.querySelector("#nom").value = "";
    document.querySelector("#quantite").value = "";
    document.querySelector("#seuile").value = "";
    document.querySelector("#consomation").value = "";
    document.querySelector("#prix").value = "";
}

// Add Data
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get Form Values
    const id = document.querySelector("#id").value,
        nom = document.querySelector("#nom").value,
        quantite = document.querySelector("#quantite").value,
        seuile = document.querySelector("#seuile").value,
        consomation = document.querySelector("#consomation").value,
        prix = document.querySelector("#prix").value;
        

    // Validate
    if (id == "" || nom == "title" || quantite == "" || seuile == "" || consomation == "" || prix == "") {
        alert("Remplir tous les données");
    } else {
        if (selectedRow == null) {
            const list = document.querySelector("tbody"),
                row = document.createElement("tr");

            row.innerHTML = `
                <td class="p-3">${id}</td>
                <td class="p-3">${nom}</td>
                <td class="p-3">${quantite}</td>
                <td class="p-3">${seuile}</td>
                <td class="p-3">${consomation}</td>
                <td class="p-3">${prix}</td>
                <td>
                    <i class="fa-solid fa-pen-to-square edit-btn p-3 pb-1"></i>
                </td>
                <td>
                    <i class="fa-solid fa-trash-can delete-btn p-3 pb-1"></i>
                </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            alert(`${id} ajouté avec succé`);
        } else {
            selectedRow.children[0].textContent = id;
            selectedRow.children[1].textContent = nom;
            selectedRow.children[2].textContent = quantite;
            selectedRow.children[3].textContent = seuile;
            selectedRow.children[4].textContent = consomation;
            selectedRow.children[5].textContent = prix;
            selectedRow = null;
            alert(`${id} modifier avec succé`);
            formPopup.classList.add("hidden");
        }

        clearFields();
    }
});

// Edit Data
document.querySelector("tbody").addEventListener("click", (e) => {
    target = e.target;

    if (target.classList.contains("edit-btn")) {
        formPopup.classList.remove("hidden");

        selectedRow = target.parentElement.parentElement;
        document.querySelector("#id").value = selectedRow.children[0].textContent;
        document.querySelector("#nom").value = selectedRow.children[1].textContent;
        document.querySelector("#quantite").value = selectedRow.children[2].textContent;
        document.querySelector("#seuile").value = selectedRow.children[3].textContent;
        document.querySelector("#consomation").value = selectedRow.children[4].textContent;
        document.querySelector("#prix").value = selectedRow.children[5].textContent;
        const closeButton = document.querySelector(".close-btn");
        closeButton.addEventListener("click", () => {
            formPopup.classList.add("hidden");
        });
    }
});

// Delete Data
document.querySelector("tbody").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete-btn")) {
        if (confirm("Voulez-vous vraiment le supprimé")) {
            target.parentElement.parentElement.remove();
            alert("Utilisateur est supprimé avec succées")
        }
    }
})

// End add Elements to table body