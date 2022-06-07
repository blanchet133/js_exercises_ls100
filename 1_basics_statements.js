const number = -5289;

const ones = Math.floor((number % 10)/1);
const tens = Math.floor((number % 100)/10);
const hundreds = Math.floor((number % 1000)/100);
const thousands = Math.floor((number % 10000)/1000);

console.log(`
  thousands place is ${thousands}
  hundreds place is ${hundreds}
  tens place is ${tens}
  ones place is ${ones}`
)