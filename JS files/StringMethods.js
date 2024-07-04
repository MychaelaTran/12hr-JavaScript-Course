//allow u to manitpualte and work with strings

let userName = "Mychaela";

userName.charAt(0); //gives u 0th index of string
userName.indexOf("l"); //returms first index of an "l"
userName.lastIndexOf("a"); //retuns last idex that "a" appears
userName.length;
userName = userName.trim(); //trims any whitespace
userName = userName.toUpperCase();
userName = userName.toLowerCase();
userName =userName.repeat(3); //repeat the string 3 ti,es
let result = userName.startsWith(" ");//check to see if start with empty space bool
let resultt = userName.endsWith(" "); //checks to see if ends with white sapce bool
let presult = userName.includes(" "); //checls to see if has a space bool

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "")
//reolaces dashses and closes the space
phoneNumber = phoneNumber.padStart(15, "0");  // CAN ALSO DO padEnd
//makes it so that the string is at least 15 characters long
//if not itll add 0 at the start until 15 long


