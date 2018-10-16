//1. Create an array named colors that contains five different names of colors as strings.
color = ["Red", "yellow", "black", "green", "blue"];

//2. Access the first color in the array and print it to the console using console.log()

console.log(color[0]);
console.log(color[2]);


color[4] = "ultraviolet";

var fourthColor = color[3];

//color.push
 color.push("skyblue");

 //length 

 console.log(color.length)

 // color.pop()
 console.log(color.length)


 for (var i=0; i <= color.length-1; i++){
 	console.log(i + ", " +color[i]);
 }


//12.Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list. (Hint: make use of the array's length property for this!)	

var lastColor = color.length;