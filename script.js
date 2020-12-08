"use strict";

/*
    Name: Michaela Chua
    Filename: script.js
*/
/*2. Your page should have a window.onload event listener*/
window.onload = init;

/* */
function ready() {
var quantityInput = document.getElementsByClassName('quantity')
for (var i = 0; i < quantityInput.length; i++) {
    var input = quantityInput[i]
    input.addEventListener('change', quanityChanged)
}
var addToCartButton = document.getElementsByClassName('addtocartbutton')
for (var i = 0; i < addToCartButton.length; i++) {
    var button = addToCartButton[i]
    button.addEventListener('click', addToCartClicked)
}

}

//isNaN to check if the value is a valid value*/
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1 
    }
}
//add quantity, price and image of the item
function addToCartClicked(event) {
    var button = event.target
    var shop = button.parentElement.parentElement
    var title = shop.getElementsByClassName('Productinfo')

}



/*5. Write JS code that adds and removes HTML DOM elements in response to some event(s). You
must use the following methods at least once on each to respond to the events
a. document.createElement b. element.appendChild c. element.removeChild */ 


/*7. Use Date() object to display the current date and time in index.html */

    
