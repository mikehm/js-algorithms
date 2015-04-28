function swap(a,b){
	console.log('Before swap '+ 'a = '+ a + ' b  = '+ b)
	var temp;
	temp = a;
	a = b;
	b = temp;
	console.log('After swap '+ 'a  = ' + a + ' b  = '+ b)
}
console.log(swap(20, 10))


