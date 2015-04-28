//Check if a number is a prime number

function isPrime(n){

	var divis	or = 2;

	while(divisor < n){

		if(n % divisor == 0){
			return false;
		}
		else {
			divisor++
		}
	}

	return true;
}


// function isPrime(n){
//   var divisor = 2;

//   while (n > divisor){
//     if(n % divisor == 0){
//      return false; 
//     }
//     else
//       divisor++;
//   }
//   return true;
// }



console.log(isPrime(7))
console.log(isPrime(10))
console.log(isPrime(17))
console.log(isPrime(9))
