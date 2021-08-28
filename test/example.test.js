// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { findById } from '../findById.js';
import { candies } from '../data.js';
import { calcItemTotal } from '../cart/render-table-row.js';
import { renderTableRow } from '../cart/render-table-row.js';
// import { addToCart } from '../local-storage-utils.js';

const test = QUnit.test;

test('Return one specified item from the data.js', (expect) => {
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
    const actual = findById(candies, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('Should take quantity and price and give a total.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1000.00;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(2, 500);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Should take in _ and return a TR.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<tr><td>Peanut Butter Cups</td><td>2.00</td><td>500</td><td>1000.00</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow(
        { 
            id: 2, 
            quantity: 500
        }
    );

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
