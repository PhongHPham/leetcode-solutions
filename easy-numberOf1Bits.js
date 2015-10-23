var hammingWeight = function(n) {
  // convert to string, radix 2 
  var str = n.toString(2),
  counter = 0;
  // loop over string
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '1') {
    // count 1s 
      counter++;
    }
  }
  return counter;
};
