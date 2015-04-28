function largest(arr){

	var large = 0;

	for(var i = 1; i < arr.length; i++){

		if(arr[i] > arr[large]){

			large = i;
		}
	}

	return arr[large];
}


var arr = [200000,-2, 100, 1000, 2, 2000, 20001];

console.log(largest(arr));