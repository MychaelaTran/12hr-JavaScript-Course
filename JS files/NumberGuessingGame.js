const minimum = 1;
const maximum = 100;

const answer = Math.floor(Math.random() * (maximum - minimum)) + minimum;

let attempts = 0;
let guess;

let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minimum}-${maximum}`);
    guess = Number(guess);
    console.log(typeof guess, guess);

    if(isNaN(guess)){ //isNaN built in funciton to check if a number
        window.alert("please enter a valid number");
    }
    else if(guess < minimum || guess > maximum){
        window.alert("please enter a number between 1-100");
    }
    else{ //means valid number
        attempts++;
        if(guess < answer){
            window.alert("Guess a number higher!");
        }
        else if(guess > answer){
            window.alert("Guess a number that is lower!");
        }
        else{
            window.alert(`Correct! the answer was ${answer}. And it took you ${attempts} attempts!`);
            running = false;
        }

    }

    
}







