// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var charsInStr = {};
    var maxChar = "";
    var valueKeeper = 0;

    for (var char of str) {
        if (typeof charsInStr[char] === "undefined") {
            charsInStr[char] = 1;
        } else {
            charsInStr[char]++;
        }
    }

    for (var char in charsInStr) {
        if (charsInStr[char] > valueKeeper) {
            valueKeeper = charsInStr[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
