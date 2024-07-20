// .map()
// accepts a callvakc and applies a function
// to each element of an array and then returns a new array
//map creatres anmd puts it in a new array whereas forEach doesnt it changes and map keeps tjhe og
//GOOD IF U NEED TO PERSERVE OF ARRAY


const nums = [1,2,3,4,5];

const squares = numbers.map(square);
//taeks the function square as a callback
//map will create a new array to store returned values\



function square(element){
    return Math.pow(element,2)
}

console.log(squares); //disaply [1,4,9,16,25]


const students =  ["Mychaela","Mychaelynn","Sally"];


function upperCase(element){ //remeber ele,ment, idnex, arrayu provided with map
    return element.toUpperCase();
}

const studentsUpper = students.map(upperCase);
console.log(studentsUpper);
//now studentUpper we have upper case
//and students we still have 
//whereas forEach would have changed 


//PRACRTICEAL EXAMPLE
const dates = ["2024-1-10", "2005-06-12", "2018-03-03"];

function formatDates(element){
    const parts = element.split("-"); //sploits each element at each -
    // so for the first date we would have "2024-1-10" becomes in its parts to ["2024","10"-"1"]
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}

const formattedDates = dates.map(formatDates);
console.log(formattedDates);



