
/* Select the form */
let form = document.querySelector(".form");

/* Select the email input */
let input = document.querySelector(".js-email-input");

/* Seelct the error icon */
let errorIcon = document.querySelector(".icon-error");

/* Select the error message */
let errorMessage = document.querySelector(".js-error");

/* Add event listener */

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (input.value === "") {
        errorIcon.style.display = "block";
        errorMessage.style.display = "block";
        errorMessage.textContent = "You need to enter an email address";
        input.style.borderColor = "var(--clr-red)"
        input.style.borderWidth = "2px";
    }
    
    else if (input.value.indexOf("@") === -1) {
        errorIcon.style.display = "block";
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please provide a valid email address";
        input.style.borderColor = "var(--clr-red)";
        input.style.borderWidth = "2px";
    }

    else {
        errorIcon.style.display = "none";
        errorMessage.style.display = "block";
        errorMessage.textContent = "Success!";
        errorMessage.style.color = "var(--clr-green";
        input.style.borderColor = "var(--clr-green)";
        input.style.borderWidth = "2px";
    }
})