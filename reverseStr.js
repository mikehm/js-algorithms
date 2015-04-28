function revStr(str){
	var arr = str.split('');
	arr.reverse();
	var newStr = arr.join('');
	return newStr;
}
var str1 = 'abcde'
console.log(revStr(str1));



function revWords(str){
	var arr = str.split(' ');
	var resultArr = [];
	for(var i= 0; i< arr.length;i++){
		resultArr.push(arr[i].split('').reverse().join(''));
	}
	var st = resultArr.join(' ');
	return st;
}

var str2 = "reverse the words in this string";
console.log(revWords(str2));