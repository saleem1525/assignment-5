// 1.  Write a program that take two numbers & add them in a new variable. Show the result in your browser.    
var x = 3;         // assign the value 3 to x
var y = 5;         // assign the value 5 to y
var z = x + y;     // assign the value 8 to z (x + y)
document.write(" Sum of "+ x + " and " + y + " is " + z + "<br>" );

// 2. Repeat task1 for subtraction, multiplication, division & modulus. 
var z = x - y;     // assign the value -2 to z (x - y)
document.write(" Subtraction of "+ x + " and " + y + " is " + z + "<br>" );
var z = x * y;     // assign the value 7 to z (x * y)
document.write(" Multiplication of "+ x + " and " + y + " is " + z + "<br>" );
var z = x / y;     // assign the value 7 to z (x / y)
document.write(" Division of "+ x + " and " + y + " is " + z + "<br>" );
var z = x % y;     // assign the value 7 to z (x % y)
document.write(" Modulus of "+ x + " and " + y + " is " + z + "<br>" + "<br>" );

// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.  
// c. Initialize the variable with some number. 
document.write("Value after variable declaration is undefined" + "<br>")
var a = 5;  // d. Show the value of variable in your browser like “Initial value: 5”. 
document.write("Initial value: " + a + "<br>")
var b = ++a;    // e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
document.write("Value after increment is: " + b + "<br>")
var c = 7;         // g. Add 7 to the variable. 
var d = b + c;     // assign the value 13 to d (b + c)
// h. Show the value of variable in your browser like “Value after addition is: 13”. 
document.write("Value after addition is: " + d + "<br>" );
var e = --d;    // i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
document.write("Value after decrement is: " + e + "<br>")
var f = 3; 
var g = e % f;      // k. Show the remainder after dividing the variable’s value by 3.  
document.write("The remainder is : " + g + "<br>" + "<br>") // l. Output : “The remainder is : 0”. 


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable 
// & calculate the cost of buying 5 tickets to a movie. Example output: 
var x = 600; 
var y = 5; 
var z = x * y; 
document.write("Total cost to buy " + y + " tickets to a movie is " + z +" PKR " + "<br>" + "<br>")


// 5. Write a script to display multiplication table of any number in your browser. E.g 
var x = 4;
document.write("Table of " + x + "<br>");
for(var i=1; i<=10; i++){
document.write(x + " x " + i + " = " +  x * i + "<br>")};
document.write("<br>")

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
var celsius = 25; // a.  Store a Celsius temperature into a variable. 
var celsiusInF = (celsius * 9) / 5 + 32; // b. Convert it to Fahrenheit & output “NN o C is NN o F”. 
document.write(celsius + '°C is ' + celsiusInF + '°F'+ "<br>");
var fahrenheit = 70; // c. Now store a Fahrenheit temperature into a variable. 
var fahrenheitInC = ((fahrenheit - 32) * 5) / 9; // d. Convert it to Celsius & output “NN o F is NN o C”. 
document.write(fahrenheit + '°F is ' + fahrenheitInC + '°C'+ "<br>"+ "<br>");


// 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
// Store the following in variables 
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
// Compute the total cost & show the receipt in your browser. 

document.write("Shopping Cart " + "<br>" + "<br>");
var a = 650;
document.write("Price of item 1 is  " + a + "<br>");
var b = 3;
var c = a * b;
document.write("Quantity of item 1 is  " + b + "<br>");
var d = 100;
document.write("Price of item 2 is  " + c + "<br>");
var e = 7;
var f = d * e;
document.write("Quantity of item 2 is  " + d + "<br>");
var g = 100;
document.write("Shipping Charges  " + e + "<br>");
var h = c + f + g; 
document.write("Total cost of your order is " + h + "<br>");


// 8. Store total marks & marks obtained by a student in 2 variables. 
// Compute the percentage & show the result in your browser 
document.write("Marks Sheet " + "<br>" + "<br>");
var a = 980; 
document.write("Total marks: " + a + "<br>");
var b = 804; 
document.write("Marks obtained: " + b + "<br>");
var c = b*100/a;
document.write("Percentage: " + c + "%" + "<br>");



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. 
// Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
document.write("Currency in PKR " + "<br>" + "<br>");
var a = 104.80;
var b = 28;
var c = 10;
var d = 25;
var e = a * c;
var f = b * d;
var g = e + f;
document.write("Total Currency in PKR: " + g + "<br>"+ "<br>");


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 Perform all calculations in a single expression 
var a = 10;
var b = 5;
var c = 10;
var d = 2;
var e = (a + b) * c;
var f = e / d;
document.write("Result: " + f + "<br>" + "<br>");


// 11.  The Age Calculator: Forgot how old someone is? 
// Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”. 
document.write("Age Calculator " + "<br>");
var a = 2020;
document.write(" Current Year: " + a + "<br>" );
var b = 1990;
document.write("Birth Year: " + b + "<br>" );
var c = a - b;
document.write("Your age is: " + c + "<br>" + "<br>");


// 12.  The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r 2 , π = 3.142) 
document.write("The Geometrizer " + "<br>");
var a = 20;
document.write(" Radius of a circle: " + a + "<br>" );
var circumference = 3.142 * 2*a;
document.write("The circumference is " + circumference + "<br>" );
var area = 3.142 * a*a;
document.write("The area is " + area + "<br>" + "<br>");


// 13.  The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? 
// Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 
document.write("The Lifetime Supply Calculator " + "<br>");
document.write("Favorite Snack: chocolate chip" + "<br>");
var a = 15;
document.write("Current age: " + a + "<br>");
var b = 65;
document.write("Estimated Maximum Age: " + b + "<br>");
var c = 3;
document.write("Amount of snacks per day: " + c + "<br>");
var d = c * (b - a);
var message = 'You will need ' + d + ' chocolate chip to last you until the ripe old age of ' + b;
document.write(message);




