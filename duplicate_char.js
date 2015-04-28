function dupChar(str){

	var result = [];
	var arr = str.split('');
	//console.log(arr);
	arr.forEach(function(item){

		if(result.indexOf(item) < 0){
			result.push(item);
		}
	})

	return result.join('');
}

var str1 = "aaabbbccdefff"
console.log(dupChar(str1))