// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// EUROS TO DOLLAR
//Test for oneEuroIs
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


// DOLLAR TO YEN
//Test for fromDollarToYen
test("One dollar should be 156.5 Yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like it's supposed to be used
    const yen = fromDollarToYen(1);

    // If 1 dollar is 156.5 Yen, then 1 dollar should be equal to 156.5 Yen
    expect(yen).toBe(156.5);
});

// YEN TO POUND
//Test for fromYenToPound
test("One Yen should be 0.87 Pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like it's supposed to be used
    const pounds = fromYenToPound(156.5);

    // If 156.5 Yen is equivalent to 0.87 Pounds, then 156.5 Yen should be equal to 0.87 Pounds
    expect(pounds).toBe(0.87);
});