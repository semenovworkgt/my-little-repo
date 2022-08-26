let input = require('sync-input');

const rates = {
  "USD": 1,
  "JPY": 113.5,
  "EUR": 0.89,
  "RUB": 74.36,
  "GBP": 0.75
};

console.log('Welcome to Currency Converter!');

Object.keys(rates).forEach(function (value) {
  console.log("1 USD equals " + rates[value] + " " + value);
});

while (true) {
  console.log("What do you want to do?");
  let doingChoice = Number(input("1-Convert currencies 2-Exit program\n"));
  
  if ((!doingChoice) || (doingChoice > 2) || (doingChoice < 1)) {
    console.log("Unknown input");
  } else if (doingChoice === 2) {
    console.log("Have a nice day!");
    break;
  } else if (doingChoice === 1) {
    console.log('What do you want to convert?');
    let currencyFrom = input('From: ').toUpperCase().trim();

    if (!Object.keys(rates).includes(currencyFrom)) {
      console.log("Unknown currency");
    } else {
      let currencyTo = input('To: ').toUpperCase().trim();
      if (!Object.keys(rates).includes(currencyTo)) {
        console.log("Unknown currency");
      } else {
        const amount = Number(input("Amount: "));
        
        if (amount < 1) {
          console.log("The amount cannot be less than 1");
        } else if (!amount) {
          console.log("The amount has to be a number");
        } else {
          let result = (amount / rates[currencyFrom] * rates[currencyTo]).toFixed(4);
        
          console.log(`Result: ${amount} ${currencyFrom} equals ${result} ${currencyTo}`);
        }
      }
    }
  }
}