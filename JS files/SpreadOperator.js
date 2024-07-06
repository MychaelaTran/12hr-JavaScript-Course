//sperad operator =  ... 
//allows an iterable such as an array to be expanded into
//seperatore elemnts (unpacks elements)


let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
//preceeding the array with spread operator to unpaclk teh elements

let minimum = Math.min(...numbers);

console.log(minimum);


let username = "Mychaela Tran";
let letters = [...username];
console.log(letters);
// output ['M', 'y', 'c', 'h', 'a', 'e', 'l', 'a', ' ', 'T', 'r', 'a', 'n']


let addLetters = [...username].join("-");
//between each char it adds a dash between each


let fruits = ["mango", "peach", "watermelon"];
console.log(fruits);
//can create a shallow copy of the array

let newFruits = [...fruits]; //this is an identical copy of fruits

let veggies = ["carrot", "cucumber", "potato"];


let foods = [...fruits,...veggies, "eggs", "milk"];
//not in one array combined using spread operatpr



