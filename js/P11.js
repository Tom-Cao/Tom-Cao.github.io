function deleteCard(card_id){
    var card = document.getElementById(card_id);
    var name = card.querySelector("#FirstName").innerHTML;

    var ans = confirm("This will delete " + name + "'s Order.");

    if (ans == false){
        alert(name + "'s order will NOT be deleted.")
    }
    else{
        card.remove();
    }
}