/* global Cart */
'use strict'

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tableDelet = document.getElementById('cart');
  tableDelet.deletRow(table.row.length - 1);
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  for (i = 0; i < cart.length; i++) {
    var th = document.createElement('th')
    th.appendChild(document.createTextNode(cart[i]));
    tr.appendChild(th);
    // TODO: Find the table body
    var tableBody = document.getElementById('cart');
    // TODO: Iterate over the items in the cart
    // TODO: Create a TR
    var tr = document.createElement('tr');
    tableBody.appendChild(tr);

    // TODO: Create a TD for the delete link, quantity,  and the item
    var tdDelete = document.createElement('td');

    tr.appendChild(tdDelete);
    var tdQuantity = document.createElement('td')
    tr.appendChild(tdQuantity);
    var tdItem = document.createElement('td');
    tr.appendChild(tdItem);
    // TODO: Add the TR to the TBODY and each of the TD's to the TR

  }
}

  function removeItemFromCart(event) {
    // table.removeEventListener('click', removeItemFromCart);

    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    cart.removeItem(cartItems);
    // TODO: Save the cart back to local storage
    var cartString = JSON.stringify(this.items);
    localStorage.setItem('backToLocal', cartString);
    // TODO: Re-draw the cart table
    ////no need to repeat every thing , just call the function /////
    showCart();

  }

  // This will initialize the page and draw the cart on screen
  renderCart();