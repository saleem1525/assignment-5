// 1.  Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:    
document.write("Result: " + "<br>");
var a = 10;
document.write("The value of a is: " + a + "<br>" + "<br>");
document.write("*******************" + "<br>" + "<br>");
var b = ++a;
document.write("The value of ++a is: " + b + "<br>");
document.write("Now the value of a is: " + b + "<br>" + "<br>");
document.write("The value of a++ is: " + b + "<br>");
var c = ++b;
document.write("Now the value of a is: " + c + "<br>" + "<br>");
var d = --c;
document.write("The value of --a is: " + d + "<br>");
document.write("Now the value of a is: " + d + "<br>" + "<br>");
document.write("The value of a-- is: " + d + "<br>");
var e = --d;
document.write("Now the value of a is: " + e + "<br>" + "<br>");



// 2. What will be the output in variables a, b & result after execution of the following script: 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: 
// --a; 
// --a - --b; 
// --a - --b + ++b; 
// --a - --b + ++b + b--; 
var a = 2, b = 1;
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
var result = --a - --b + ++b + b--;
document.write("result is: " + result + "<br>" + "<br>");


// 3. Write a program that takes input a name from user & greet the user. 
var username = prompt("Enter your name: ", "");
if ("Your name is " + username) {
  document.write("Hello, " + username + "!" + "<br>" + "<br>");
} else {
  document.write("Hello, world!" + "<br>" + "<br>");
}

// 5. Write a program to take input a number from user & does not enter a new number, multiplication table of 5 should be displayed by default. 
var multiplier = prompt("Enter a multiplier: ");
for (var number = 5; number <= 10; number++) {
  document.writeln(number * multiplier + "<br>");
}
document.writeln("<br>");



// 6. Take 
// a) Take three subjects name from user and store them in 3 different variables. 
// b) Total marks for each subject is 100, store it in another variable. 
// c) Take obtained marks for first subject from user and stored it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 
document.write("Subject Total Marks Obtained Marks Percentage" + "<br>");
var a = prompt("Enter a subject1: ");
var b = prompt("Enter a subject2: ");
var c = prompt("Enter a subject3: ");
var d = 100;
var e = +prompt("Enter a obtained marks: ");
var f = +prompt("Enter a obtained marks: ");
var g = +prompt("Enter a obtained marks: ");
var h = e*100/d;
document.write(a +" "+ d + " " + e + "  "  + h + "%" + "<br>");
var i = f*100/d;
document.write(b +" "+ d + "   " + f + "   "  + i + "%" + "<br>");
var j = g*100/d;
document.write(a +"  "+ d + "  " + g + "   "  + j + "%" + "<br>");
var k = e + f + g
var l = h + i + j
document.write( d*3 + "  " + k + "  "  + l  + "%" + "<br>");














