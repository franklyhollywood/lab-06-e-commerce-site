import { findById } from '../findById.js';
import { candies } from '../data.js';

export function renderTableRow(cartCandy) {
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const totalTd = document.createElement('td');

    const candy = findById(candies, cartCandy.id);
    
    nameTd.textContent = candy.name;
    priceTd.textContent = candy.price;
    quantityTd.textContent = cartCandy.quantity;
    totalTd.textContent = candy.price * cartCandy.quantity;


    tr.append(nameTd, priceTd, quantityTd, totalTd);

    return tr;

}


