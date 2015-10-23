// Write a program to check whether a given number is an ugly number.
// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 
// For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
// Note that 1 is typically treated as an ugly number.

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  // if number is less than one, i.e. negative or zero return false. Not ugly
  if (num < 1) {
    return false;
  }
  // if num is equal to one, it's ugly
  if (num === 1) {
    return true;
  }

  // otherwise loop while number is greater than 5 because that is largest factor
  while (num > 5) {
    // if number is divisble by two (use modulo because remainder would equal 0)
    // divide number by 2 and set num to that new value
    if (num % 2 === 0) {
      num = num / 2;
    // same for if number is divisble by 3
    } else if (num % 3 === 0) {
      num = num / 3;

    // and same if 5 is a factor of number  
    } else if (num % 5 === 0) {
      num = num / 5;
    // while loop will take new number provided it is greater than five and run above
    // if checks again until it encounters a num value that is no divisible evenly
    // by 2, 3, or 5...in which case it's ugly
    } else {
      return false;
    } 
  }
    // or it is divisible by 2, 3, 5 but smaller than now so return true, it's only
    // divisible by 2, 3, or 5
    return true;
};
