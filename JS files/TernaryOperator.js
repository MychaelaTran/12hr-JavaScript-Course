//shortcut to if and else statemts
//  helps to assign a variable based onn a codition

let age = 19;

let message = age >=18 ? "You're an adult" : "You're a minor";
console.log(message);

//or you could write this
if(age >=19){
    message = "Youre an adult";
}
else{
    message = "Youre a mior";
}


let time = 16; //4pm
let greeting = time< 12 ? "Godomorning" : "Good Afternoon";


let isStudent = true;
let messagee = isStudent ? "Youre a student" : "Youre not a student";


let purchaseAmt = 125;
let discount = purchaseAmt >= 100 ? 10 : 0;
//get 10% discount if purcjase is over 1--$
console.log(`Your total is $${purchaseAmt - purchaseAmt*(discount/100) }`)
