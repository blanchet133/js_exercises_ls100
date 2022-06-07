const DECADE = 10;
let age = 20;

console.log(`You are ${age} years old.`);
do  {
  age = age + DECADE;
  console.log(`In ${DECADE} years, you will be ${age} years old.`);
} while(age < 60)
