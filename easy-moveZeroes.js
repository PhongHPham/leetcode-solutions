var moveZeroes = function(nums) {
  // loop over array
    // check if zero
      // push into temp arr

  //loop over temp array and push it back onto arr

  var temp = [];
  var len = nums.length;

  for (var i = 0; i < len; i++) {
    if (nums[i] === 0) {
      temp.push(nums.splice(i, 1)[0]);
      i--;
    }
  }
  for (var j = 0; j < temp.length; j++) {
    nums.push(temp[j]);
  }
  // do not return, mutate in place
  //return nums;
};

var arr = [0, 0, 1];
moveZeroes(arr);
console.log(arr);
