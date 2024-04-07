#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const rates = {
    USD: 1, // Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    RUB: 92,
    JPY: 152,
    CAD: 1.36,
    MXN: 16.43,
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'RUB', 'JPY', 'CAD', 'MXN'],
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'RUB', 'JPY', 'CAD', 'MXN'],
    },
    {
        name: "amount",
        message: "Enter from amount",
        type: 'number',
    },
]);
let fromAmount = rates[answer.from]; // Exchange Rate    
let toAmount = rates[answer.to]; // Exchange Rate
let myAmount = answer.amount; // input amount
let baseAmount = myAmount / fromAmount; // USD base currency
console.log(chalk.bgCyan(`Amount in Dollars : ${baseAmount.toFixed(3)} `));
let convertedAmount = baseAmount * toAmount; // current amount 
console.log(chalk.bold.green(`Your Amount is : ${convertedAmount.toFixed(3)}`));
