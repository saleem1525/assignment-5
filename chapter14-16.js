// 1.  Declare an empty array using JS literal notation to store student names in future. 
var myArray = [];

// 2. Declare an empty array using JS object notation to store student names in future. 



// 3. Declare and initialize a strings array. 
var stringArray = ["one", "two", "three"];
document.write(stringArray + "<br>"+ "<br>"); 

// 4.  Declare and initialize a numbers array. 
var numericArray = [1, 2, 3, 4];
document.write(numericArray + "<br>"+ "<br>"); 

// 5.  Declare and initialize a boolean array. 
var booleanArray = [true, false, false, true];
document.write(booleanArray + "<br>"+ "<br>"); 

// 6. Declare and initialize a mixed array. 
var mixedArray = [1, "two", "three", 4];
document.write(mixedArray + "<br>"+ "<br>"); 

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). 
// Show the listed qualifications in your browser like: 
var nums = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("Qualifications:" + "<br>"+ "<br>"); 
document.write("1) "+ nums[0] + "<br>"); 
document.write("2) "+ nums[1] + "<br>"); 
document.write("3) "+ nums[2] + "<br>"); 
document.write("4) "+ nums[3] + "<br>"); 
document.write("5) "+ nums[4] + "<br>"); 
document.write("6) "+ nums[5] + "<br>"); 
document.write("7) "+ nums[6] + "<br>"); 
document.write("8) "+ nums[7] + "<br>" + "<br>"); 

// 8.  Write a program to store 3 student names in an array.Take another array to store score of these three students. 
// Assume that total marks are 500 for each student, display the scores & percentages of students like:
var students = ["Michel", "John", "Tony"];
var score = [320, 230, 480];
var percentages = score/500;
document.write("Score of "+ students[0] + " is " + score[0] + "." + " Percentages: " +  score[0]*100/500 + "%"  + "<br>"); 
document.write("Score of "+ students[1] + " is " + score[1] + "." + " Percentages: " +  score[1]*100/500 + "%"  + "<br>"); 
document.write("Score of "+ students[2] + " is " + score[2] + "." + " Percentages: " +  score[2]*100/500 + "%"  + "<br>" + "<br>"); 


// 9. Initialize an array with color names. Display the array elements in your browser. 
var color = ["blue","yellow","green"];
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. 
color.unshift("white");
// Display the updated array in your browser. 
document.write(color + "<br>"); 
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. 
color.push("red");
// Display the updated array in your browser.  
document.write(color + "<br>"); 
// c. Add two more color to the beginning of the array. 
color.unshift("orange", "brown");
document.write(color + "<br>"); 
// d. Delete the first color in the array. Display the updated array in your browser. 
color.shift();
document.write(color + "<br>"); 
// e. Delete the last color in the array. Display the updated array in your browser. 
color.pop();
document.write(color + "<br>"); 
// f. Ask the user at which index he/she wants to add a color & color name. 
// Then add the color to desired position/index. . Display the updated array in your browser. 
color.splice( 1, 0, "orange"); // at index position 1, remove 0 elements, then add "orange" to that position
document.write(color + "<br>"); 
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. 
// Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser. 
color.splice( 1, 2); // at index position 1, remove 2 elements
document.write(color + "<br>" + "<br>"); 

// 10.  Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 
var score = [320,230,480,120];
document.write("Scores of Students: " + score + "<br>"); 
score.sort((a, b) => a - b);
document.write("Ordered Scores of Students: " + score + "<br>"+ "<br>"); 


// 11.  Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities list: " + "<br>" + cities  + "<br>" + "<br>");
var city = cities.slice(2, 4);
document.write("Selected cities list: " + "<br>" + city + "<br>" + "<br>"); 


// 12.   Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method) 
var arr = ["This", "is" , "my" ,  "cat"]; 
document.write("Array: " + "<br>" + arr  + "<br>" + "<br>");
var str = ["This is my cat"]; 
document.write("String: " + "<br>" + str  + "<br>" + "<br>");

// 13.  Create a new array. Store values one by one in such a way that you can 
// access the values in the order in which they were stored. (FIFO-First In First Out)  
var arr = ["keyboard", "mouse" , "printer" ,  "monitor"]; 
document.write("Devices: " + "<br>" + arr  + "<br>" + "<br>");
document.write("Out: " + "<br>" + arr[0]  + "<br>");
document.write("Out: " + "<br>" + arr[1]  + "<br>");
document.write("Out: " + "<br>" + arr[2]  + "<br>");
document.write("Out: " + "<br>" + arr[3]  + "<br>" + "<br>");

// 14.  Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)  
var arr = ["keyboard", "mouse" , "printer" ,  "monitor"]; 
document.write("Devices: " + "<br>" + arr  + "<br>" + "<br>");
document.write("Out: " + "<br>" + arr[3]  + "<br>");
document.write("Out: " + "<br>" + arr[2]  + "<br>");
document.write("Out: " + "<br>" + arr[1]  + "<br>");
document.write("Out: " + "<br>" + arr[0]  + "<br>" + "<br>");

// 15.  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your browser using document.write() method:
var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]; 
document.write(arr[0]  + "<br>");
document.write(arr[1]  + "<br>");
document.write(arr[2]  + "<br>");
document.write(arr[3]  + "<br>");
document.write(arr[4]  + "<br>");
document.write(arr[5]  + "<br>");

































