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
    priceTd.textContent = candy.price.toFixed(2);
    quantityTd.textContent = cartCandy.quantity;
    totalTd.textContent = calcItemTotal(candy.price, cartCandy.quantity);

    console.log(nameTd, priceTd, quantityTd, totalTd);

    tr.append(nameTd, priceTd, quantityTd, totalTd);

    return tr;
}

export function calcItemTotal(price, quantity) {
    const total = price * quantity;
    Math.round(total * 100) / 100;
    return total.toFixed(2);
}

export function grandTotal(allProducts, wholeCart) {
    let accumulator = 0;
    for (let item of wholeCart) {
        const product = findById(allProducts, item.id);
        const total = product.price * item.quantity;
        accumulator = accumulator + total;
    }
    return accumulator.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

