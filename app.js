//what will the code below output?

console.log(0.1+0.2); //0.30000000000000004
console.log(0.1 + 0.2 == 0.3); //false


console.log("-------------------------------");
//chech whether a string is a palindrome or not

function isPalindrome(str){

	return str === str.split('').reverse().join('')
}

console.log(isPalindrome('madam')) //true
console.log(isPalindrome('door')) //false
console.log(isPalindrome('duud'))//true
console.log(isPalindrome('abba'))//true

console.log("-------------------------------");

// Write a sum method which will work when 
// invoked using the following syntax
// console.log(sum(2,3)); //outputs 5
// console.log(sum(2)(3)); //outputs 5


function sum(a, b){
	if(a !== undefined){
		return a+b;
	}
	else {
		return function(b){
			return a+b;
		}
	}
}


console.log(sum(2,3)); //outputs 5
console.log(sum(2)(3)); //outputs 5

console.log('----------------------------------')

// console.log(sum1(2,3)); //outputs 5
// console.log(sum(2)(3)); //outputs 5

var sum1 = function(a,b){
	return a+b;
}

console.log(sum1(2,3)); //outputs 5

console.log('----------------------------------')
function sum(a){
	return function(b){
		return a+b;
	}
}
console.log(sum(2)(3)); //outputs 5

console.log('----------------------------------')



// what will the code below output to the console

console.log(false == '0') //true
console.log(false === '0') //false



console.log('------------------------------')


var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); //bar
        console.log("outer func:  self.foo = " + self.foo); //bar
        (function() {
            console.log("inner func:  this.foo = " + this.foo); //undefined
            console.log("inner func:  self.foo = " + self.foo); //bar
        }());
    }
};
myObject.func();

console.log('------------------------------')
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}


console.log(foo1());
console.log(foo2());

console.log('------------------------------')

//How can you determine if x is an integer


function isInteger(x){

	if((typeof x == 'number') && ((x%1)=== 0)){
		return true;
	}

	return false;
}

console.log(isInteger('2.23'))
console.log(isInteger(2))
console.log(isInteger(2.1))
console.log(isInteger(2.23))
console.log(isInteger('abc'))
console.log(isInteger(3))

console.log('------------------------------')

function isInteger(x){
	return (x^0) === x;	
}


console.log(isInteger(2))
console.log(isInteger(2.1))
console.log(isInteger(2.23))
console.log(isInteger(0.2))
console.log(isInteger(3))

console.log('------------------------------')
console.log('------------------------------')


//In what order will the numbers 1-4 be logged to the console
//when the code below is executed?


// var x = (function(){
// 	console.log(1);
// 	setTimeout(function(){console.log(2)}, 1000);
// 	setTimeout(function(){console.log(3)}, 0);
// 	console.log(4);
// });

// x();

console.log('------------------------------')
console.log('------------------------------')

//what will the code below output

console.log(1 +  "2" + "2"); //122
console.log(1 +  +"2" + "2"); //32
console.log(1 +  -"1" + "2"); //02
console.log(+"1" +  "1" + "2"); //112
console.log( "A" - "B" + "2"); //NaN2
console.log( "A" - "B" + 2); //NaN

console.log('------------------------------')
console.log('------------------------------')

var arr1 = "john".split('');

console.log(arr1);

var arr2 = arr1.reverse();
console.log(arr2);

var arr3 = "jones".split('');
console.log(arr3);
arr2.push(arr3);

console.log(arr2);
console.log(arr1);


console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));

console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
console.log('------------------------------')
console.log('------------------------------')

var ar1 = ['a', 'b', 'c']
ar2 = ar1.reverse();
ar3 = ['e', 'f', 'g']
console.log(ar1)
console.log(ar2)

ar2.push('d')
console.log(ar2)

ar2.push(ar3)
console.log(ar2 === ar1)
console.log(ar2)
console.log(ar2.slice(-1).join(''))
console.log(ar1)
console.log(ar2.splice(-1))
console.log(ar1)


console.log('------------------------------')
console.log('------------------------------')



console.log(typeof NaN)

console.log(NaN !== NaN)

console.log(isNaN(4))
console.log(isNaN('a'))


console.log('------------------------------')
console.log('------------------------------')


var a = {},
	b = {key: 'b'},
	c = {key: 'c'};

	a[b] = 123;
	a[c] = 456;


	console.log(a[b]);

console.log('------------------------------')
console.log('------------------------------')
















































































