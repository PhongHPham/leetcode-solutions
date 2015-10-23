var addDigits = function(num) {
  
  // covert number to string
  // split string into array
  // convert into number
  // add elements together
  // keep doing until single digit 
  var sum = 0;

  //var self = this;
  // convert number to string
  // str = String(num); --
  // str = num.toString(); +
  // var str = num + ""; // +
  num = num.toString().split("");
  // split string on every character into array
  // var arr = str.split('');
    // if length is less than or equal to one 
  if (num.length === 1) {
      //console.log(+arr[0])
    // return
    //console.log(arr[0])
    // Number(arr[0]) --
    // +arr[0] +
    return parseInt(num[0]); // ++
  }
      
    // if length is greater than one
  if (num.length > 1) {
    // loop over array adding elements together  
    for (var i = 0; i < num.length; i++) {
      sum += parseInt(num[i]);  
    }
  }
    //console.log(sum);
  return addDigits(sum);  
};

console.log(addDigits(135));
