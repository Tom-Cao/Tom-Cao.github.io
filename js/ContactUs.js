let phone = document.getElementById("phone");
let order = document.getElementById("order");
let form = document.getElementById("form");
let checkOrderNumber = document.getElementById("checkOrderNumber");
let checkPhoneNumber = document.getElementById("checkPhoneNumber");

// Prevent the form to submit when there is an invalid input
function preventSubmit() {
    form.addEventListener("submit", function(event) {
        event.preventDefault()
    })
}

function validateForm() {

    // Validate the phone number
    let phoneNumber = form.phone.value;
    let phoneValidity = phoneNumber.search(/^\d{3}-\d{3}-\d{4}$/);
    if (phoneValidity == 0) {
        checkPhoneNumber.style.visibility = "hidden";
    } else {
        checkPhoneNumber.style.visibility = "visible";
        preventSubmit()
    }

    // Validate the order number
    let orderNumber = form.order.value;
    let orderValidity = orderNumber.search(/^[#]\d{5}[A-Za-z][A-Za-z]$/);
    if (orderValidity == 0) {
        checkOrderNumber.style.visibility = "hidden";
    } else {
        checkOrderNumber.style.visibility = "visible";
        preventSubmit()
    }



}

