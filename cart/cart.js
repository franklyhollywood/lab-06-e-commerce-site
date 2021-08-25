//Import your data (both cart and products), DOM generation function, and any needed utility functions
//locate the tbody element where your line items will go
//loop through your data
//Create a variable based on the current array index.
//Use your findById function to find the corresponding product for this line item
//Pass these to your DOM generation function and capture result in variable
//Append to the table body (tbody)/



import { candies } from '../data.js';
import { cartArray } from './cart-data.js';
import { renderTableRow } from './render-table-row.js';
import { grandTotal } from './render-table-row.js'; 

const cartTable = document.getElementById('tableId');
const grandTotalEl = document.getElementById('grandTotalId');


for (let cartObject of cartArray) {
    const tr = renderTableRow(cartObject);
    cartTable.append(tr);
}

const total = grandTotal(candies, cartArray);

grandTotalEl.textContent = total;



