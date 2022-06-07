let rlSync = require('readline-sync');

let userName = rlSync.question('What\'s your name cowboy?');
let userSurname = rlSync.question('... that\'s it? How about a last name? Mr... ?');
console.log(`Hello, ${userName} ${userSurname}!`);