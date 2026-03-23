// Function 1: calculateTax
function calculateTax(amount) {
  return amount * 0.10;
}

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
  return text.toUpperCase();
}

// Function 3: findMaximum
function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Function 4: isPalindrome
function isPalindrome(word) {
  let reversed = word.split("").reverse().join("");
  return word === reversed;
}

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  let discount = (discountPercentage / 100) * originalPrice;
  return originalPrice - discount;
}


// EXPORTING THE FUNCTIONS
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};