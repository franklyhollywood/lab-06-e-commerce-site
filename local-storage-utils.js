import { findById } from './findById.js';

const CART = 'CART';

export function getCart() {
    
    // See if anything is in the cart already:
    const initialCart = localStorage.getItem(CART);
    // if nothing is there, return an empty array:
    if (!initialCart) {
        
        return [];
    }
    //if there is a cart, parse it:
    const initialCartParsed = JSON.parse(initialCart);
    //return initialCartParsed
    return initialCartParsed;
}

export function setCart(cartArray) {
    const stringifiedCart = JSON.stringify(cartArray);
    localStorage.setItem(CART, stringifiedCart);
}

export function addToCart(productId) {
//0 grab the cart from localStorage
//1 Use findyById to see if the item already exists in cart
//2a if product is in cart, increment the quantity
//2b else, add it to cart
//3save the updated cart in localStorage


//we already have: localStorage.getItem in getcart function:
    const cart = getCart();
//use findById to see if item already exists in cart    
    const productInCart = findById(cart, productId);
//If there is a product in the cart...
    if (productInCart) {
//Increase it by one
        productInCart.quantity++;
//if it is not in the cart, add it:
    } else {
        const newObject = { id:productId, quantity:1 };
        //add new item to the array:
        cart.push(newObject);
    }
// save the cart into local storage:  we can use the setcart function we already have:
    setCart(cart);
}

export function clearCart(){
    // first get cart using getcart function above:
    const cart = getCart();
    //alert the contents of the cart:
    alert(cart);
    //get rid of the cart in local storage:
    localStorage.removeItem(CART);
    //send user back to the homepage:
    window.location = '../index.html';
}