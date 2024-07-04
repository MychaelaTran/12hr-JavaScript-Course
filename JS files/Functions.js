//function is section of reusable code

function happyBday(usrename, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday to ${username} you!`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old!`)

}

happyBday("Mychaela", 19); //how u call a function 
happyBday("Ed Sheeran", 33 );


function add(x,y){
    let result;
    result = x + y;
    return result;
    //or i could do just return x + y;
}

let answer = add(2,3);
console.log(answer); //will output 5 (outputs the whatever returned)

function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x * y;
}

function isEven(x){
    if(x % 2 === 0){
        return true;
    }
    else{
        return false;
    }

    // or return number % 2 === 0 ? true : false;
}
console.log(isEven(5));


function isValidEmail(email){
    return email.includes("@") ? true : false;
}

isValidEmail("Mychaela@gmail.com")






