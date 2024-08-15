// Create a function that takes a string and returns it as an integer.


function intoInt(str) {
    const typeStr = str.toString();
    const typeInt = parseInt(typeStr);
    return typeInt;
}
console.log(intoInt("6"));
console.log(intoInt("1000"));
console.log(intoInt("12"));