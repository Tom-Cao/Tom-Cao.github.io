var image = document.createElement("img");
image.src = "../images/up-arrow.png";
image.alt = "404";
var image2 = document.createElement("img");
image2.src = "../images/down-arrow.png";
image2.alt = "404";
window.addEventListener("load", function() {
    var image = document.createElement("img");
    image.src = "../images/up-arrow.png";
    image.alt = "404";
    var image2 = document.createElement("img");
    image2.src = "../images/down-arrow.png";
    image2.alt = "404";
    var arrow = document.getElementsByClassName("discription2")[0];
    arrow.appendChild(image);
})

function dropdown() {
    var text = document.getElementsByClassName("discription")[0].getElementsByTagName("p")[0];
    var arrow = document.getElementsByClassName("discription2")[0];
    if (text.style.visibility == "hidden") {
        console.log(arrow.style.visibility == "hidden");
        text.style.visibility = "visible";
        arrow.replaceChild(image2, arrow.children[1]);

    } else {
        text.style.visibility = "hidden";
        arrow.replaceChild(image, arrow.children[1]);
    }
}
var alert = "<strong>Added to Cart!</strong> <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>"
var alert2 = document.createElement("div");
alert2.setAttribute("class", "decoration alert alert-warning alert-dismissible fade show");
alert2.setAttribute("role", "alert");
alert2.innerHTML = alert;
var x = 0;

function addToCart() {
    var head = document.getElementsByClassName("heading")[0].children[0].innerText;
    if (document.getElementsByTagName("body")[0].firstChild != alert2) {
        console.log(document.getElementsByTagName("body")[0].firstChild != alert2)
        var c = document.getElementsByTagName("body")[0];
        c.insertBefore(alert2, c.firstChild);
    }
}