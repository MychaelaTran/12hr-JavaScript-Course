

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;
mySubmit.onclick = function(){

    age = myText.value; //it takes as string so typecast to number
    age = Number(age);

    if(age >= 18){
        resultElement.textContent = `You are old enough to enter site`
    
        if(hasLicense){
            resultElement.textContent = `You have your license!`
        }
        else{
            resultElement.textContent = `You don't have ur license`
        }
    }
    else if(age < 0){
        resultElement.textContent = `your age cant be below 0`
    }
    else{
        resultElement.textContent = `You myust be 18+ to enter site`;
    }
}







let isStudent = false;
if(!isStudent){
    console.log("You are NOT a stuydent");
}
else{
    console.log("You are a student");
}


let hasLicense = false;





