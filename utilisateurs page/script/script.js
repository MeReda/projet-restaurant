// Begin display form on click on add button
const addButton = document.querySelector(".add-btn"),
    formPopup = document.querySelector(".form-popup");

addButton.addEventListener("click", () => {
    formPopup.classList.remove("hidden")
    
    const closeButton = document.querySelector(".close-btn")
    closeButton.addEventListener("click", () => {
        formPopup.classList.add("hidden")
    })
})
// End display form on click on add button

// Begin add Elements to table body



// End add Elements to table body