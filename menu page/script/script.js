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
    document.querySelector("#nom").value = "";
    document.querySelector("#ingrediant").value = "";
    document.querySelector("#prix").value = "";
}

// Add Data
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get Form Values
    const nom = document.querySelector("#nom").value,
          ingrediant = document.querySelector("#ingrediant").value,
          prix = document.querySelector("#prix").value;

    // Validate
    if (nom == "" || ingrediant == "title") {
        alert("Remplir tous les données");
    } else {
        if (selectedRow == null) {
            const list = document.querySelector("tbody"),
                row = document.createElement("tr");

            row.innerHTML = `
                <td class="p-3">${nom}</td>
                <td class="p-3">${ingrediant}</td>
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
            alert(`${username} ajouté avec succé`);
        } else {
            selectedRow.children[0].textContent = nom;
            selectedRow.children[1].textContent = ingrediant;
            selectedRow.children[2].textContent = prix;
            selectedRow = null;
            alert(`${nom} modifier avec succé`);
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
        document.querySelector("#nom").value = selectedRow.children[0].textContent;
        document.querySelector("#ingrediant").value = selectedRow.children[1].textContent;
        document.querySelector("#prix").value = selectedRow.children[2].textContent;
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
