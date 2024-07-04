/*console.log(`Hello`);
console.log(`I love Ed Sheeran`);

window.alert(`This is an alert`); */

document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `I love Ed Sheeran`


let x; //declaration
x = 100; //assignment

console.log(x) ;//display 100 in console

let y = 123; //number
let age = 19;
let price = 10.09
console.log(`you are ${age} years old`);
console.log(`the price is $${price}`);
console.log(typeof(age)); //displays data type 

let firstName = "Mychaela"
let email = "mychaela123@gmail.com" //numbers here are strings 
//cant use numbers in strings for arithmetic
console.log(typeof(firstName));
console.log(`My name is ${firstName}`);

let online = true; //bool
console.log(typeof(online));
console.log(`${firstName} is online: ${online}`)


let fullName = "Mychaela Tran"
let isStudent = true;
//putting text on screen using html ids
document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2"). textContent = `You are ${age} years old`;
document.getElementById("p3"). textContent = `Enrolled: ${isStudent}`;



//ARITMETIC OPERATORS 
let students = 30;
students += 1;
students ++ //incremebt by one
//students -= 5;
//students *= 1.2;
//students /= 2;
//students **= 2; //to the power (exponent operator)
let extraStuds = students % 3
console.log(students);
console.log(extraStuds);

let result = 1 + 2 * 3 + 4 ** 2;

/*  operator precedence
    1. paranthesis ()
    2. exponents **
    3. mult and division and mod * / %
    4. add and sub + -

*/

console.log(result);




