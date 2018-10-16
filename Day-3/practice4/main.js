//print 1 to 10

function onetoten(n, startvalue){
if(!startvalue){
startvalue = 1;
}if(startvalue <= n) {
 console.log(startvalue);
onetoten(n, ++startvalue)
}else {
return 0;
}

}

// Write a JavaScript program to calculate the factorial of a number. Go to the edior

function fact(num){
	if(num == 0) {
		return 1;
	}
	else {
		return (num * fact(num -1));
	}
}
		
// function factorial(n) {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// }
