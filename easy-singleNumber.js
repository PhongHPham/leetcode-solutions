
var singleNumber = function(nums) {
  // storage object
  var storage = {};
  var temp;
  // loop over array
  for (var i = 0; i < nums.length; i++) {
    temp = nums[i];
    if (storage[temp]) {
      storage[temp] += 1;
    } else {
      storage[temp] = 1;
    }
    // storage[nums[i]] = ;
  }
  console.log(storage);
  // set key in object to array element and increment
  // loop over object
  // look for key with value of one
  // return that key   
  for (var k in storage) {
    if (storage[k] === 1) {
      return +k;
    }
  }
};

// console.log(singleNumber([1, 1, 2, 2, 3]));


var singleNumberX = function(nums) {
  var result = 0;
  for (var i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
};

// console.log(singleNumberX([1,1,2,4,2,3,3]));

var str = 'a     ZZZZbc 1';

console.log(isAlpha.test(str));

console.log(str.replace(isAlpha, ""));
