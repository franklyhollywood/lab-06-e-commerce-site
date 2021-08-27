//Import your data (both cart and products), DOM generation function, and any needed utility functions
//locate the tbody element where your line items will go
//loop through your data
//Create a variable based on the current array index.
//Use your findById function to find the corresponding product for this line item
//Pass these to your DOM generation function and capture result in variable
//Append to the table body (tbody)/



import { candies } from '../data.js';
//will need to import getcart from utils/ won't need fake data from cartArray
//import { cartArray } from './cart-data.js';
import { clearCart, getCart } from '../local-storage-utils.js';
import { renderTableRow, grandTotal } from './render-table-row.js';
//added this line to above: 
//import { grandTotal } from './render-table-row.js'; 

const purchaseButton = document.getElementById('purchaseButton');
const cartTable = document.getElementById('tableId');
const grandTotalEl = document.getElementById('grandTotalId');
//const cartarray - from getcart function from today.
const cartArray = getCart();

//purchase button on cart page displays what's in cart in an alert
// then clear't the cart and redirects the user based on clearCart function.
purchaseButton.addEventListener('click', (event) => {
    alert(JSON.stringify(getCart()));
    clearCart();    
   
});

for (let cartObject of cartArray) {
    const tr = renderTableRow(cartObject);
    cartTable.append(tr);
}

const total = grandTotal(candies, cartArray);

grandTotalEl.textContent = total;



