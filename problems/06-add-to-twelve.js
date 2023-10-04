/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// your code here

function addToTwelve(arr) {
  // Base case: if the array has fewer than two elements, return false
  if (arr.length < 2) {
    return false;
  }

  // Check if the sum of the first two elements equals 12
  if (arr[0] + arr[1] === 12) {
    return true;
  }

  // Recursive case: call addToTwelve with the remaining elements in the array
  return addToTwelve(arr.slice(1));
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
