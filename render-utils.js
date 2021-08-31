import { addToCart } from './local-storage-utils.js';

//Here we are creating the HTML elements for the LI:
export function renderCandy(candy) {
    console.log(candy);
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const priceP = document.createElement('p');
    const quantityP = document.createElement('p');
    const weightP = document.createElement('p');
    const addButton = document.createElement('button');

    //adding event listener on add to cart button to put 
    //candy into the cart
    addButton.addEventListener('click', (event) => {
        addToCart(candy.id);
    });

//Add classes to your new HTML elements:
    li.classList.add('candy');
    h3.classList.add('name');
    img.classList.add('candyImage');
    priceP.classList.add('price');
    quantityP.classList.add('quantity');
    weightP.classList.add('weight');
    addButton.classList.add('addButton');

    //Now we set the text content, image src, 
    h3.textContent = candy.name;
    img.src = candy.img;
    priceP.textContent = `Price $${candy.price}`;
    quantityP.textContent = `quantity: ${candy.quantity}`;
    weightP.textContent = `Weight ${candy.weight} oz`;
    addButton.value = candy.id;
    addButton.textContent = 'Add';

    //here we append the html emements to the LI:
    li.append(h3, img, priceP, quantityP, weightP, addButton);
    
    return li;
}

