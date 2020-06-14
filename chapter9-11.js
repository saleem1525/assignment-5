// 1.  Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 
var cityname = prompt("Enter city name: ");
if (cityname == "karachi") {
  document.write("Welcome to city of lights" + "<br>" + "<br>")
};

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. 
// If the user is female, give the message: Good Morning Ma’am. 
var gender = prompt("Enter gender: ");
if (gender == "male") {
  document.write("Good Morning Sir" + "<br>" + "<br>")
};
if (gender == "female") {
  document.write("Good Morning Ma’am" + "<br>" + "<br>")
};


// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table: 

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, 
//   show the message “Please refill the fuel in your car” 
var fuel = prompt("Enter fuel in car (in liters):  ");
if (fuel < 0.25) {
  document.write("Please refill the fuel in your car" + "<br>" + "<br>");
}


// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs. 
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
if ("car" < "cat") {
  alert("car is smaller than cat");
} 


// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. 
// Take percentage & compute grade as per following table: 
document.write("Marks Sheet" + "<br>");
var a = +prompt("Enter marks obtained in three subjects: ");
var b = +prompt("Enter total marks: ");
document.write("Total marks : " + b + "<br>");
document.write("Marks obtained : " + a + "<br>");
var c = a*100/b;
document.write("Percentage : "  + c + "%" + "<br>");
if (c >= 80){
document.write("Grade :  A-one" + "<br>");
document.write("Remarks :  Excellent" + "<br>");
}
else if (c >= 70){
  document.write("Grade :  A" + "<br>");
  document.write("Remarks :  Good" + "<br>");
  }
else if (c >= 60) {
  document.write("Grade :  B" + "<br>");
  document.write("Remarks :  You need to improve" + "<br>");
}
else if (c < 60) {
  document.write("Grade :  Fail" + "<br>");
  document.write("Remarks :  Sorry" + "<br>");
}
document.write("<br>");



// 7. Guess game: 
// Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 
//create secret number
var secretNumber = 4;

//ask user for a number
var StringGuess = prompt("Guess the number!");
var guess = Number(StringGuess);

//check if guess is right
if (guess === secretNumber) {
    document.write("Bingo! Correct answer"+ "<br>" + "<br>");
}

//otherwise, check if higher
else if (
    guess == secretNumber + 1) {
    document.write("Close enough to the correct answer"+ "<br>" + "<br>")
}




// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. 
var x = prompt("Enter the number: ");
if(x % 3 === 0 ) {
  document.write("number is divisible"+ "<br>" + "<br>");
} 



// 9. Write a program that checks whether the given input is an even number or an odd number. 
var x = prompt("Enter the number: ");
if ( x % 2 == 0) {
	document.write('Even Number'+ "<br>" + "<br>");
}else{
	document.write('Odd Number'+ "<br>" + "<br>");
}

// 10.  Write a program that takes temperature as input and shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.” 

var a = +prompt("Enter Temprature: ");
if (a > 40){
document.write("It is too hot outside." + "<br>");
}
else if (a > 30){
  document.write("The Weather today is Normal." + "<br>");
}
else if (a > 20) {
  document.write("Today’s Weather is cool." + "<br>");
}
else if (a < 10) {
  document.write("OMG! Today’s weather is so Cool." + "<br>");
}
document.write("<br>");


// 11.  Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user. 
var a = +prompt("First number: ");
var b = prompt("Operation: ");
var c = +prompt("Second number: ");
if (b == "+"){
  document.write(a + c + "<br>")
}
else if (b == "-"){
  document.write(a - c + "<br>");
}
else if (b == "*") {
  document.write(a * c + "<br>");
}
else if (b == "/") {
  document.write(a / c + "<br>");
}
document.write("<br>");


