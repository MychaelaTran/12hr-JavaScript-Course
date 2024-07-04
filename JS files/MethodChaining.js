//calling one moethod adter another in one continuous line of code


//------NO  METHOD  CHAINING-----
let username = window.prompt("Enter your username: ");
username = username.trim(); //removes white space

let letter = username.charAt(0); //hoplds first letter of usrname
letter = letter.toUpperCase; //make first letter uppecase

let extraChars = username.slice(1,); //everything other than first char
extraChars = extraChars.toLocaleLowerCase;

username = letter + extraChars;
console.log(username);


//-------METHOD CHAINING------
usrename = usrename.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
//takes first letter and makes it uppercase
//then the + adds to it 
//we remove white space then trim from second letter and lowercase all that





