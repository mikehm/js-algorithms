function smallest(arr){
	var smallest = 0;
	for(var i = 1; i< arr.length; i++){
		if(arr[i] < arr[smallest]){
			smallest = i;
		}
	}
	return smallest;
}

var arr = [-20, 10, 100, -200, -201, 20000, 100, 3]

console.log(smallest(arr))