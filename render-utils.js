
export function renderCandy(candy) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const priceP = document.createElement('p');
    const quantityP = document.createElement('p');
    const weightP = document.createElement('p');
    const addButton = document.createElement('button');

    li.classList.add('candy');
    h3.classList.add('name');
    img.classList.add('candyImage');
    priceP.classList.add('price');
    quantityP.classList.add('quantity');
    weightP.classList.add('weight');
    addButton.classList.add('addButton');

    h3.textContent = candy.name;
    img.src = candy.img;
    priceP.textContent = `Price $${candy.price}`;
    quantityP.textContent = `quantity: ${candy.quantity}`;
    weightP.textContent = candy.weight;
    addButton.value = candy.id;
    addButton.textContent = 'Add';

    li.append(h3, img, priceP, quantityP, weightP, addButton);
    
    return li;
}

