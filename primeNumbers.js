//List all the prime numbers between 1 and n

function isPrime(n){

	var divisor = 2;

	while(n > divisor){

		if(n % divisor == 0){
			return false;
		}

		else {
			divisor++;
		}
	}

	return true;
}

console.log(isPrime(9));
console.log(isPrime(4));


function primeNumbers(n){
	var primes = [];
	for(var i = 2; i < n; i++){
		if(isPrime(i)){
			primes.push(i);
		}
	}
	return primes;
}

console.log(primeNumbers(20));