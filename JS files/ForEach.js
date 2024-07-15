//used to iterate ocer elements of an array
//and apply a specified function (callback) to each element
//  array.forEach(callback)
//  element, index, array are provided

//behind the scenes the forEach method will provde to callback the above
//


let numbers = [1,2,3,4,5];

numbers.forEach(double);
numbers.forEach(display);
//this will display all elements in console

function display(element){
    console.log(element);
}
function double(element, index, array){ //element index array are provided with the forEach function
    array[index] = element*2
}

function square(element, index, array){
    array[index] = Math.pow(element,2)
}
numbers.forEach(square);
numbers.forEach(display);



//practical example

let fruits = ["mango","banana","cheery","watermelon"];

fruits.forEach(upperCase);
fruits.forEach(display);

function display(element){
    console.log(element);
}

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function capitalFirst(element, index, array){
    array[index] = element.charAt(0).toUpperCase + element.slice(1);
}


