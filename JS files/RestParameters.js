//rest paramters = (...rest)
//allow a function work with a variable number of arguments by 
//bundlinh yhrem into an array
//spread = expands an array into seperate elemetns
//rest = bundles seperate elemetns into an array


const food1 = "pizza";
const food2 = "icecream";
const food3 = "sushi";
const food4 = "mango";

function getFood(...foods){
    return foods;
}

function openFridge(...foods){ //rest operator in parameters
    console.log(foods); //speread used when have an array
}

//openFridge(food1, food2, food3, food4);
//now we return ['pizza', 'icecream' .etc]

//if insrteafd we have console.log(...foods)
//then console would be pizza icecream sushi mang
//bc took it apart

const foods = getFood(food1, food2, food3, food4);
console.log(foods); //tjhis return them all in an array




function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1,2,6);
console.log(`Your total is ${total}`);
//out put would be 9


function getAverage(){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result/numbers.length;
}
const totalMarks = getAverage(75,100,32,51);



//combine strings together

function combineStrings(...strings){
    return strings.join(" ")
}
fullName = combineStrings("Mr.", "Spongebob", "Squarepants");

console.log(fullName);
//create new string now Mr Spongebob Squarepants







