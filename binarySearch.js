function binarySearch(arr, low, high, n){
	var mid = Math.floor((low + high)/2);
	if(arr.indexOf(n) < 0){
		return -1;
	}
	if(arr.length < 1){
		return;
	}
	if(n === arr[mid]){
		return mid;
	}
	else if(n < arr[mid]){
		high = mid - 1;
		return binarySearch(arr, low, high, n);
	}
	else {
		low = mid + 1;
		return binarySearch(arr, low, high, n);
	}	
}


var arr = [-3, -1, 4, 6, 7, 8];
console.log(binarySearch(arr, arr[0], arr.length - 1, 6))