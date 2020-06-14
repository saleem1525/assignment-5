// 1.  Declare 3 variables in one statement. 
var fname = "Saleem"; 
var lname = "Raza";
var age = 23;
document.write(fname + " " + lname + " " + age + "<br>");
document.write("<br>")


// 2. Declare 5 legal & 5 illegal variable names
// 5 legal variable names
document.write("1. MyVariable"+ "<br>"+ 
'2. MYVARIABLE ' + "<br>"+ '3. _myvariable ' + "<br>"+'4. $myvariable '+ "<br>"+ '5. _9pins '+ "<br>"+ "<br>")
// 5 illegal variable names
document.write("1. My Variable" + "<br>"+ "2. 9pins" + "<br>"+   "3. a+c"  + "<br>"+ "4. testing1-2-3" + "<br>"+
"5. O'Reilly" + "<br>" + "<br>" ) 
 
 
// 3. Display this in your browser 
// a)  A heading stating “Rules for naming JS variables” 
document.write ("Rules for naming JS variables"+ "<br>"+ "<br>")
// b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
document.write ("Variable names can only contain letters, digits, _ and $. For example $my_1stVariable "+ "<br>");
// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 
document.write ("Variables must begin with a letter, an underscore (_) or a dollar sign ($). For example $name, _name or name "+ "<br>")
// d) Variable names are case _________ 
document.write ("Variable names are case sentitive"+ "<br>")
// e) Variable names should not be JS _________ 
document.write ("Variable names should not be JS Keywords"+ "<br>")
