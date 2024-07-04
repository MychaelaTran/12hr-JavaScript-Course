//creting a substring from a portion of anpther string
//string.slice(start,end)

const fullName = "Mychaela Tran";

/*let firstName = fullName.slice(0,8); //the ending index is exclusive so if want to stop at index 7 put 8
let lastName = firstName.slice(9); //dpont have to put ending index

let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);  */

//make more dynamic 
let firstName = fullName.slice(0, fullName.indexOf(" ")); //bc last index not inclusive
let lastName = fullName.slice(fullName.indexOf(" ") + 1)//to not include the space

const email = "tranmychaela@gmail.com";
let userName = email.slice(0,email.indexOf("@") ); //dont need plus 1 bc its exclusive 
let extension = email.slice(email.indexOf("@"+1)); //add +1 bc first one is INcliusive 
