// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //---------Solution 1 -cai--------------
    // var reversedStr = "";

    // for(var i = str.length; i > 0; i--) {
    //     reversedStr += str.charAt(i - 1);
    // }

    // return reversedStr;
    
    //---------Solution 2-------------------
    //return str.split('').reverse().join('');

    //---------Solution 3-------------------
    let reversedStr = '';

    for (var i of str) {
        reversedStr = i + reversedStr;
    }

    return reversedStr;
}

module.exports = reverse;
