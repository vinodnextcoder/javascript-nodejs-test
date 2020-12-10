"use strict";

var languages = ['nidf', 'sdajdjsan', 'assaa'];

// Pollutes global namespace. Ew!
for (var i = 0; i < languages.length; i += 1) {
    console.log(`${languages[i]} is a west resgion.`);
}

console.log(i); // 4 for loop scope for var

for (let j = 0; j < languages.length; j += 1) {
    console.log(`${languages[j]} is a best.`);
}

try {
    console.log(j); // Reference error for loop scope for let
} catch (err) {
    console.log(`You got a ${err}; no frog.`);
}