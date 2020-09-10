let a = prompt("What is the initial value?");
let rate = prompt("What is the rate of increase?");
let n = prompt("What is the number of interations");

let finalvalue = initial * (rate ** (n-1));

console.log(`The final value of the swquence is ${finalvalue}`);
