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
    document.querySelector("#poste").value = "";
    document.querySelector("#nom").value = "";
    document.querySelector("#prenom").value = "";
    document.querySelector("#cin").value = "";
    document.querySelector("#tel").value = "";
    document.querySelector("#sal").value = "";
}

// Add Data
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get Form Values
    const 
        poste = document.querySelector("#poste").value,
        nom = document.querySelector("#nom").value,
        prenom = document.querySelector("#prenom").value,
        cin = document.querySelector("#cin").value,
        tel = document.querySelector("#tel").value,
        sal = document.querySelector("#sal").value;
       
        

    // Validate
    if (nom == "" || prenom == "title") {
        alert("Remplir tous les données");
    } else {
        if (selectedRow == null) {
            const list = document.querySelector("tbody"),
                row = document.createElement("tr");

            row.innerHTML = `
                <td class="p-3">${poste}</td>
                <td class="p-3">${nom}</td>
                <td class="p-3">${prenom}</td>
                <td class="p-3">${cin}</td>
                <td class="p-3">${tel}</td>
                <td class="p-3">${sal}</td>
                <td>
                    <i class="fa-solid fa-pen-to-square edit-btn p-3 pb-1"></i>
                </td>
                <td>
                    <i class="fa-solid fa-trash-can delete-btn p-3 pb-1"></i>
                </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            alert(`${nom} ajouté avec succé`);
        } else {
            selectedRow.children[0].textContent = poste;
            selectedRow.children[1].textContent = nom;
            selectedRow.children[2].textContent = prenom;
            selectedRow.children[3].textContent = cin;
            selectedRow.children[4].textContent = tel;
            selectedRow.children[5].textContent = sal;
            
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
        document.querySelector("#poste").value = selectedRow.children[0].textContent;
        document.querySelector("#nom").value = selectedRow.children[1].textContent;
        document.querySelector("#prenom").value = selectedRow.children[2].textContent;
        document.querySelector("#cin").value = selectedRow.children[3].textContent;
        document.querySelector("#tel").value = selectedRow.children[4].textContent;
        document.querySelector("#sal").value = selectedRow.children[5].textContent;
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
