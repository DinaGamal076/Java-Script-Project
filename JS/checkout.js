document.getElementById("checkout-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    let requiredFields = document.querySelectorAll(".required");
    requiredFields.forEach(function(field) {
        let errorMessage = field.nextElementSibling;
        if (field.value.trim() === "") {
            field.classList.add("invalid");
            errorMessage.style.display = "block";
            errorMessage.textContent = "This field is required";
            isValid = false;
        } else {
            field.classList.remove("invalid");
            errorMessage.style.display = "none";
        }
    });

    let firstNameField = document.getElementById("checkout-first-name");
    let firstNameError = firstNameField.nextElementSibling;
    let nameRegex = /^[a-zA-Z\u0600-\u06FF\s]{2,}$/;
    if (!nameRegex.test(firstNameField.value)) {
        firstNameField.classList.add("invalid");
        firstNameError.style.display = "block";
        firstNameError.textContent = "Enter a valid name (letters only, at least 2 characters)";
        isValid = false;
    }

    let lastNameField = document.getElementById("checkout-last-name");
    let lastNameError = lastNameField.nextElementSibling;
    if (!nameRegex.test(lastNameField.value)) {
        lastNameField.classList.add("invalid");
        lastNameError.style.display = "block";
        lastNameError.textContent = "Enter a valid name (letters only, at least 2 characters)";
        isValid = false;
    }

    let phoneField = document.getElementById("checkout-phone");
    let phoneError = phoneField.nextElementSibling;
    let phoneRegex = /^[0-9]{11}$/;
    if (!phoneRegex.test(phoneField.value)) {
        phoneField.classList.add("invalid");
        phoneError.style.display = "block";
        phoneError.textContent = "Enter a valid 11-digit phone number";
        isValid = false;
    }

    let emailField = document.getElementById("checkout-email");
    let emailError = emailField.nextElementSibling;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailField.value)) {
        emailField.classList.add("invalid");
        emailError.style.display = "block";
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    }

    let zipField = document.getElementById("checkout-zip");
    let zipError = zipField.nextElementSibling;
    let zipRegex = /^[0-9]{5}$/;
    if (!zipRegex.test(zipField.value)) {
        zipField.classList.add("invalid");
        zipError.style.display = "block";
        zipError.textContent = "Enter a valid 5-digit ZIP code";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});