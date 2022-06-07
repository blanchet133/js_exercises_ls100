let rlSync = require('readline-sync');

const DECADE = 10;
let age = Number(rlSync.question('How old are you now-a-days? '));

console.log(`You are ${age} years old.`);
do  {
  age = age + DECADE;
  console.log(`In ${DECADE} years, you will be ${age} years old.`);
} while(age < 60)
