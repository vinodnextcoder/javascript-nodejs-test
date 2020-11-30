// We need to keep track of every character in the string as well as the number of times it exists.
let charMap = {};

for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
        charMap[char]++
    } else {
        charMap[char] = 1;
    }
}