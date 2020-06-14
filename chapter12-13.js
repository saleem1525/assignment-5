// 1.  Write a program that takes a character (number or string) in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 




// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 
var a = +prompt("First number: ");
var b = +prompt("Second number: ");
if (a > 0 && b > 0 && a > b) {
  document.write("The larger number is " + a+ "<br>"+ "<br>");
} else if (a > 0 && b > 0 && a < b) {
  document.write("The larger number is " + b+ "<br>"+ "<br>");
} else if (a === b && a > 0 && b > 0) {
  document.write("Both numbers are equal!"+ "<br>"+ "<br>")
} else {
  document.write("Please add an integer!"+ "<br>"+ "<br>");
}


// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero. 
var a = +prompt("Enter number: ");
if (a > 0){
   document.write("Positive number"+ "<br>"+ "<br>") ;
}
else if (a == 0){
   document.write("Zero"+ "<br>"+ "<br>") ;
}
else{
   document.write("Negative number"+ "<br>"+ "<br>") ;
}


// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise 
var char = prompt("Enter a character: ");
if (char == 'a') {
  document.write("True"+ "<br>"+ "<br>");
}
else if (char == "e") {
  document.write("True"+ "<br>"+ "<br>");
}
else if (char == "i") {
  document.write("True"+ "<br>"+ "<br>");
}
else if (char == "o") {
  document.write("True"+ "<br>"+ "<br>");
}
else if (char == "u") {
  document.write("True"+ "<br>"+ "<br>");
}
else {
  document.write("False"+ "<br>"+ "<br>");
}

// 5. Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i.  Check if user has entered password. If not, then give message “ Please enter your password” 
// ii.  Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. 
// Show “Incorrect password” otherwise. 

var password1 = prompt("Enter a password1: ");
var password2 = prompt("Enter a password2: ");

// If password not entered 
if (password1 == ''){
document.write("Please enter Password"+ "<br>"+ "<br>");
}

// If confirm password not entered 
else if (password2 == ''){
  document.write("Please enter confirm password"+ "<br>"+ "<br>");
}

// If Not same return False.     
else if (password1 != password2) {
  document.write("\nPassword did not match: Please try again..."+ "<br>"+ "<br>");
}

// If same return True. 
else {
  document.write("Password Match: Welcome to GeeksforGeeks!"+ "<br>"+ "<br>");
} 


// 6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// } 
var greeting; 
var hour = prompt("Enter the hour: "); 
if (hour < 18) { 
  document.write(greeting = "Good day"+ "<br>"+ "<br>"); 
}
else {
document.write(greeting = "Good evening"+ "<br>"+ "<br>"); 
} 


// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
// Implement the following case using if, else & else if statements 
var n = prompt("Enter a number: ");
if (n >= 0000 && n < 1200)                  
  { document.write("Good morning!"+ "<br>"+ "<br>")}
else if (n >= 1200 && n < 1700)
  { document.write("Good afternoon!"+ "<br>"+ "<br>")}
else if (n >= 1700 && n < 2100)
  { document.write("Good evening!"+ "<br>"+ "<br>")}
else if (n >= 2100 && n <= 2359)
  { document.write("Good night!"+ "<br>"+ "<br>")}
else
  { document.write("You did not enter a number!"+ "<br>"+ "<br>")}

