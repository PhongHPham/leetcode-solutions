/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var temp = {};
  var n = nums.length / 2;

  for (var i = 0; i < nums.length; i++) {
    if (temp[nums[i]]) {
      temp[nums[i]] += 1;
    } else {
      temp[nums[i]] = 1;
    }
  }
  for (var k in temp) {
    if (temp[k] > n) {
      return +k;
    }
  }
};
