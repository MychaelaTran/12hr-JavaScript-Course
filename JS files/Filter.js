// .filter() = creates a new array buy filteroing out ele,ents
//if true sticks it in a new array hence filtering out nott rue elements
//gives new arrau 


let numbers = [1,2,3,4,5,6,7];

function isEven(element){ //element proividfed by filter mehtod
    return element % 2 == 0;//if this is 0 then it returns true

}

let evenNums = numbers.filter(isEven);
console.log(evenNums); //return an array 

function isOdd(element){
    return element % 2 !== 0;
}

let oddNums = numbers.filter(isOdd);


//example 2

const ages = [16,17,18,18,19,20,60];

function isAdult(element){
    return element >= 18; //returns true if yes
}

const adults = ages.filter(isAdult);
console.log(adults);




//example 3

const words = ["Slay", "Queen", "Girlboss", "Mango", "Rea; Fruit"];

function getShortWords(element){
    return element.length <= 6;
    //returns true if under 6 chars long
}

const shortWords = words.filter(getShortWords);
console.log(shortWords);
//will return a new array with words that under 6 length 

