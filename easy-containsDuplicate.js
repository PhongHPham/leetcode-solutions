/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var temp = {};

  for (var i = 0; i < nums.length; i++) {
    if (temp[nums[i]]) {
      return true;
    } else {
      temp[nums[i]] = true;
    }
  }
  return false;    
};
