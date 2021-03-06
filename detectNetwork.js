// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(num) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var prefix = function(num, digits) {
    return num.slice(0, digits);
  }
  var length = num.length;
  
  if((prefix(num, 2) === '38' || prefix(num, 2) === '39') && length === 14) {
  	return 'Diner\'s Club';
  } else if ((prefix(num, 2) === '34' || prefix(num, 2) === '37') && length === 15) {
  	return 'American Express';
  } else if((prefix(num, 2) >= '51' && prefix(num, 2) <= '55') && length === 16) {
    return 'MasterCard';
  } else if ((prefix(num,4) === '6011' || prefix(num,2) === '65' || (prefix(num,3) >= '644' && prefix(num,3) <= '649')) && (length === 16 || length === 19)) {
    return 'Discover';
  } else if ((prefix(num,4) === '5018' || prefix(num,4) === '5020' || prefix(num,4) === '5038' || prefix(num,4) === '6304') && (length >= 12 && length <= 19)) {
    return 'Maestro';
  } else if (((prefix(num,6) >= '622126' && prefix(num,6) <= '622925') || (prefix(num,3) >= '624' && prefix(num,3) <= '626') || (prefix(num,4) >= '6282' && prefix(num,4) <= '6288')) && (length >= 16 && length < 20)) {
    return 'China UnionPay'
  } else if ((prefix(num,2) === '49' || prefix(num,2) === '56' || prefix(num,2) === '63' || prefix(num,2) === '67') && (length === 16 || length === 18 || length === 19)) {
    return 'Switch';
  } else if (prefix(num, 1) === '4' && (length === 13 || length === 16 || length === 19)) {
    return 'Visa';
  } else {
  	return 'Card Number Not Valid';
  }
};


