// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can
// you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var a = 0, 
      b = 1, 
      temp;

  // look at previous steps to see how to get to next step
  // so first time a is 1 step and b is 2 steps
  // on each iteration add previous steps 
  for (var i = 0; i < n; i++) {
    temp = b;
    b = b + a;
    a = temp; 
  }
  // check that n is positive
  if (n > 0) {
    // return the last step, which all the ways
    return b;
    // otherwise there are no ways
  } else {
    return 0;
  }
};
