// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro / 1.2;
    let valueInYen = valueInDollar * 127.9;
    //return the dollar value
    return valueInYen;
}

// const fromEuroToDollar = function(valueInEuro){
//     // convert the given valueInEuro to dollars
//     let valueInDollar = valueInEuro * 1.2;
//     //return the dollar value
//     return valueInDollar;
// }

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen }