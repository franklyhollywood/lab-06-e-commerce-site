import { findById } from './findById.js';
import { candies } from './data.js';

//so we don't misspell or forget the quotes:
export const CART = 'CART';
export const PRODUCTS = 'PRODUCTS';




// First we want to check local storage and get any items in the cart:
export function getCart() {

    // See if anything is in the cart already: if so, we will get it:
    const initialCart = localStorage.getItem(CART);
    // if nothing is there, return an empty array:
    if (!initialCart) {
        return [];
    }
    //if there is a cart, parse it so that we can read it as an array/object:
    const initialCartParsed = JSON.parse(initialCart);
    //return initialCartParsed.
    return initialCartParsed;
}








//this function gets any items in the cart:
export function getProducts() {
    //do we have any products waiting in the cart already?
    //here we are getting anything in localStorage:
    const stringifiedProducts = localStorage.getItem(PRODUCTS);
    //If not, than return the 
    if (!stringifiedProducts) {
// candies as usual.
        return candies;
    }// parse the stringigied cart so that it is readable as an array/object:
    const finalProducts = JSON.parse(stringifiedProducts);
    // return the final product
    return finalProducts;

}

//Stringify the admin page inputs and put into local storage:
export function setProduct(productsArray) {
    //stringify cart array:
    const stringifiedCart = JSON.stringify(productsArray);
    //Put cart into local storage:
    localStorage.setItem(PRODUCTS, stringifiedCart);
}


//this function adds products to the cart:
export function addToProducts(productObject) {
    const products = getProducts();
    //console.log(products, '1');
    products.push(productObject);
    //console.log(products, '2');
    setProduct(products);
}

//
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


//This function is clearing the cart and redirecting the user to home page:
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