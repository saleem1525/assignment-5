// 1.  Declare and initialize an empty multidimensional array. (Array of arrays)    
var arr = [[], []];


// 2. Declare and initialize a multidimensional array representing the following matrix:    
var temps = [
  ["0 1 2 3"],
  ["1 0 1 2"],
  ["2 1 0 1"],
];
// Prints first array 
for (var i = 0; i < temps.length; i++) {
  document.write(temps[i] + "<br>");
}
document.write("<br>");

// 3. Write a program to print numeric counting from 1 to 10.    
for (var a = 1; a < 11; a++) {
  document.write(a + "<br>");
}
document.write("<br>");


// 4.  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.    

var n = prompt("Enter a number to show its multiplication table");
var len = prompt("Enter length multiplication table");
document.write("Multiplication table of " + n + "<br>");
document.write("Length " + len + "<br>" + "<br>");
for (var i = 1; i <= len; ++i) {
  document.write(n + " * " + i + " = " + n * i + "<br>");
}


// 5. Write a program to print items of the following array using for loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 
var a = ["apple", "banana", "mango", "orange", "strawberry"];
var len = a.length;	//no. of elements of the array

//print elements of the array
for (var i = 0; i < len; i++) {
  document.write(a[i] + "<br>");
}
document.write("<br>");
for (var i = 0; i < len; i++) {
  document.write("Element at index " + i + " is " + " " + a[i] + "<br>")
}
document.write("<br>");


// 6. Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
document.write("Counting: " + "<br>" + "<br>");
document.write(arr1 + "<br>" + "<br>");

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write("Reverse counting: " + "<br>" + "<br>");
var arr1 = arr.reverse();
document.write(arr1 + "<br>" + "<br>");
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
document.write("Even: " + "<br>" + "<br>");
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var len = arr.length;
for (var i = 0; i < len; i++) {
  if (arr[i] % 2 === 0) {
    document.write(arr[i] + ", ");
  }
}
document.write("<br>" + "<br>");
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
document.write("Odd: " + "<br>" + "<br>");
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var len = arr.length;
for (var i = 1; i < len; i++) {
  if (i % 2 !== 0) {
    document.write(arr[i] + ", ");
  }
}
document.write("<br>" + "<br>");
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("Series: " + "<br>" + "<br>");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var len = arr.length;
for (var i = 0; i < len; i++) {
  if (arr[i] % 2 === 0) {
    document.write(arr[i] + "k, ");
  }
}
document.write("<br>" + "<br>");

// 7. You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not. Example: 
var food = prompt("Welcome to ABC Bakery. what do you want to order sir/ma'am?");
if (food.indexOf("cake") !== -1) {
  document.write(food + " is availabe at index " + " in our bakery " + "<br>" + "<br>")
}
else if (food.indexOf("apple pie") !== -1) {
  document.write(food + " is availabe at index " + " in our bakery " + "<br>" + "<br>")
}
else if (food.indexOf("cookie") !== -1) {
  document.write(food + " is availabe at index " + " in our bakery " + "<br>" + "<br>")
}
else if (food.indexOf("chips") !== -1) {
  document.write(food + " is availabe at index " + " in our bakery " + "<br>" + "<br>")
}
else if (food.indexOf("patties") !== -1) {
  document.write(food + " is availabe at index " + " in our bakery " + "<br>" + "<br>")
}
else {
  document.write("We are sorry. " + food + " is not available in our bakery" + "<br>" + "<br>")
}


// 8. Write a program to identify the largest number in the given array. 
var array = [24, 53, 78, 91, 12];
document.write("Array items: " + array + "<br>")
var largest = 0;

for (i = 0; i <= largest; i++) {
  if (array[i] > largest) {
    var largest = array[i];
  }
}
document.write("The largest number is " + largest + "<br>" + "<br>");

// 9. Write a program to identify the smallest number in the given array. 
// A = [24, 53, 78, 91, 12] 
var array = [24, 53, 78, 91, 12];
document.write("Array items: " + array + "<br>")
var minvalue = array[0];
for (var i = 0; i < array.length; i++) {
  if (array[i] < minvalue) {
    minvalue = array[i];
  }

}
document.write("The smallest number is " + minvalue + "<br>" + "<br>");

// 10.  Write a program to print multiples of 5 ranging 1 to 100. 
var x = 5;
for(var i=1; i<=20; i++){
document.write(x * i  + ", ")};
document.write("<br>")

