//calculateTax
function calculateTax(amount, taxRate) {
    const taxRate = 0.1; // Example tax rate of 10%
    return amount * (taxRate / 100);
}

//convertToUpperCase
function convertToUpperCase(str) {
    return str.toUpperCase();
}

//findMaximum
function findMaximum(arr) {
    return Math.max(...arr);
}

//isPalindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

//calculateDiscountedPrice
function calculateDiscountedPrice(price, discount) {
    return price - (price * (discount / 100));
}






// This is required for the test to function properly  
// module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };