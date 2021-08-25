// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { findById } from '../findById.js';
import { candies } from '../data.js';


const test = QUnit.test;

test('Should take in an item from the cart and render a <tr>. ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = { 
        id: 2, 
        name: 'Peanut Butter Cups',
        img: './assets/Reeses.jpg',
        price: 2,
        quantity: 2,
        weight: .5
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById( candies, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


