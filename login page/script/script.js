const usernameField = document.querySelector("#username"),
    passwordField = document.querySelector("#password"),
    groupSelect = document.querySelector("#group"),
    errorMsg = document.querySelector("#error-msg"),
    submitBtn = document.querySelector("#submit");

groupSelect.addEventListener("click", () => {
    const username = usernameField.value,
        password = passwordField.value,
        group = groupSelect.value;

    if ((username == "Admin1" && password == "Admin1" && group === "1") || (username == "Admin2" && password == "Admin2" && group === "2") || (username == "Admin3" && password == "Admin3" && group === "3")) {
        errorMsg.classList.add("hidden")
        submitBtn.classList.remove("disabled")
        window.localStorage.setItem("group", group)
        console.log(window.localStorage)
    }else {
        errorMsg.classList.remove("hidden")
        submitBtn.classList.add("disabled")
    }
})