import { addToProducts } from '../local-storage-utils.js';

const form = document.getElementById('newInventoryForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);

    // console.log(data.get('id'));
    // console.log(data.get('productName'));
    // console.log(data.get('image'));
    // console.log(data.get('price'));
    // console.log(data.get('quantity'));
    // console.log(data.get('weight'));
   

    const product = {
        id: Number(data.get('id')),
        name: data.get('name'),
        image: data.get('img'),
        price: Number(data.get('price')),
        quantity: Number(data.get('quantity')),
        weight: Number(data.get('weight')),

    };
    // console.log(product);

    addToProducts(product);
});