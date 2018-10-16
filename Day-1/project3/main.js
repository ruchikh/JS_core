const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
var a = 0;

for (amount; amount<=bank_balance){
	console.log("phone purchase");

	amount = amount + PHONE_PRICE;
    
	if (amount<=SPENDING_THRESHOLD){
		amount = amount + ACCESSORY_PRICE;
	}
}


function calculateTax(a){

	return (a*TAX_RATE);
}
console.log("Your purchase: " + formatAmount( amount )
);
amount = amount + calculateTax(amount);

function formatAmount(a){
	return ("$" + amount.toFixed(2)) ;
}


if (amount > bank_balance) {
    console.log("You can't afford this purchase.");
}


// fizzzzz


for (var i=1; i<=100; i++) {
    if (i%15===0) {
        console.log("FizzBuzz");
    } else if (i%3===0) {
        console.log("Fizz");
    } else if (i%5===0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}

     for (var i=0; i<=10; i++){
	console.log(i);
}

