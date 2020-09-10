let a = prompt("What is the length of the first die?");
let b = prompt("What is the length of the second side?");

let c = Math.sqrt(a**2 + b**2);

console.log("The length of the hypot. is " + c);

c = Math.hypot(a, b);

console.log("The hypot. is " + c);