
// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}


// DOLLAR TO YEN
// Decalre funcation
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to Yen
    let valueInYen = valueInDollar * 156.5;
    // return the Yen value
    return valueInYen;
}


// YEN TO POUND
// Declare funcation
const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to Pounds
    let valueInPound = valueInYen * (1 / 156.5) * 0.87;
    // return the Pound value
    return valueInPound;
}

// Exported
module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};


