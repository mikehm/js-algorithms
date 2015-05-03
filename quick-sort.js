var arr = [4, 2, 6, 5, 3, 9];

function quicksort(arr)
{
//if array is empty return empty array
if (arr.length === 0) {
	return [];
}
  var left = [];
  var right = [];
  var pivot = arr[0];
  //step through each element in array starting from index 1
  //and compare the values to the pivot
  //any value less than the pivot will be pushed to 
  //the left array and any greater value to the right
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
         left.push(arr[i]);
      } else {
         right.push(arr[i]);
      }
  }

  //recursively sort the left and right arrays
  return quicksort(left).concat(pivot, quicksort(right));
}

console.log(quicksort(arr))