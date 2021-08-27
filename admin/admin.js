import { addToProducts } from '../local-storage-utils.js';


const submitButton = document.getElementById('inventorySubmit');
const form = document.getElementById('newInventoryForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);

    console.log(data.get('id'));
    console.log(data.get('productName'));
    console.log(data.get('image'));
    console.log(data.get('price'));
    console.log(data.get('quantity'));
    console.log(data.get('weight'));
   
    const product = {
        id: data.get('id'),
        name: data.get('productName'),
        image: data.get('image'),
        price: data.get('price'),
        quantity: data.get('quantity'),
        weight: data.get('weight'),

    };
    console.log(product);

    addToProducts(product);
});