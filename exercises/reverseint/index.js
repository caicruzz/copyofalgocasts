// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//------------Solution# 1 Cai-----------------
// function reverseInt(n) {
//     var reversedInt = "";

//     reversedInt = n.toString().split("").reverse().join("");

//     if(Math.sign(n) === -1) {
//         reversedInt = "-" + reversedInt.substring(0, (reversedInt.length - 1));
//     }

//     return parseInt(reversedInt);
// }

//-------------Solution# 2------------------- 
function reverseInt(n) {
    var reversedInt = "";

    reversedInt = n.toString().split("").reverse().join("");

    return parseInt(reversedInt) * Math.sign(n);
}

module.exports = reverseInt;
