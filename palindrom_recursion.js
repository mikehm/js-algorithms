function first(str){
	return str.slice(0,1);
}
function last(str){
	return str.slice(-1);
}
function mid(str){
	return str.slice(1,-1);
}
function isPalin(str){
	if(str.length <=1){
		return 'Palindrome';
	}
	if(first(str) !== last(str)){
		return 'Not Palindrome';
	}
	var st = mid(str);
	return isPalin(st);
}
var str1 = 'madam';
var str2 = 'a';
var str3 = ' ';
var str4 = 'door';
var str5 = 'dood'

console.log(isPalin(str1));
console.log(isPalin(str2));
console.log(isPalin(str3));
console.log(isPalin(str4));
console.log(isPalin(str5));