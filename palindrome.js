function isPalin(str){

	var str2 = str.split('').reverse().join('')

	if(str === str2) {
		return 'Palindrome';
	}
	else {
		return 'Not Palindrome';
	}
}

var str1 = 'madam';
var str2 = 'door';
var str3 ='dood';


console.log(isPalin(str1))
console.log(isPalin(str2))
console.log(isPalin(str3))