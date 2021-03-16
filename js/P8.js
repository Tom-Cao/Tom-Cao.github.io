// Delete product
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Current product being edited
var editRow = null;

// Update product with added or updated product
function updateTable() {
    if ($("#updateButton").text() == "Update") {
        // Update product
        updateProduct();
    }
    else {
        // Add product
        addProduct();
    }
    // Clear form fields
    clearForm();
}

// Add product
function addProduct() {
    // Append product to table
    $("#productTable").append(addedRow());
}

// Change update button if editing existing product
function productDisplay(ctl) {
    editRow = $(ctl).parents("tr");
    var cols = editRow.children("td");
    // Display the row contents in the text field
    $("#productname").val($(cols[1]).text());
    $("#quantity").val($(cols[2]).text());
    $("#unitprice").val($(cols[3]).text());
    // Change Update Button Text
    $("#updateButton").text("Update");
}

// Update product
function updateProduct() {
    // Add changed product to table
    $(editRow).after(addedRow());
    // Remove original product
    $(editRow).remove();
    // Clear form fields
    clearForm();
    // Change Update Button Text
    $("#updateButton").text("Add");
}

// String to add in order to build new row
function addedRow() {
    var addedRow =
    "<tr>" +
        "<td> <button type='button' onclick='productDisplay(this);' class='btn btn-default'> <i class='fas fa-edit'></i> </button> </td>" +
        "<td>" + $("#productname").val() + "</td>" +
        "<td>" + $("#quantity").val() + "</td>" +
        "<td>" + $("#unitprice").val() + "</td>" +
        "<td> <button type='button' onclick='deleteRow(this);' class='btn btn-default'> <i class='far fa-trash-alt'></i></button> </td>" +
    "</tr>"
    return addedRow;
}

// Clear form fields
function clearForm() {
    $("#productname").val("");
    $("#quantity").val("");
    $("#unitprice").val("");
}