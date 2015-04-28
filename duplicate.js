//REMOVE DUPLICATES
function duplicate(arr){
	var result = [];
	
	arr.forEach(function(item){
		if(result.indexOf(item) < 0){
			result.push(item);
		}
	});
	return result;
}
var arr = [0, -1, 2, -2, 1, 0, -1, 1, 10, 100];

var arr2 = ["mike", "amanda", "mike", "amy", "amy"]

console.log(duplicate(arr));
console.log(duplicate(arr2))