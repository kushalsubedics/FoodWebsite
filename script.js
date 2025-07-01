function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let confirmEmail = document.getElementById("confirm-email").value;
    let date = document.getElementById("date").value;

    if (!name || !email || !confirmEmail || !date) {
        alert("All fields are required!");
        return false;
    }
    return true;
}

function checkEmails() {
    let email = document.getElementById("email").value;
    let confirmEmail = document.getElementById("confirm-email").value;
    if (email !== confirmEmail) {
        alert("Emails do not match!");
    }
}

function checkDate() {
    let date = new Date(document.getElementById("date").value);
    let today = new Date();
    if (date < today) {
        alert("Please select a future date.");
    }
}
