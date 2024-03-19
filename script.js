
/* Select the form */
let form = document-querySelector(".form");

/* Select the error message */
let errorMessage = document.querySelector(".js-error");

/* Add event listener */

form.addEventListener("submit", (e) => {
    e.preventDefault()
    errorMessage.computedStyleMap.display = "block";
})