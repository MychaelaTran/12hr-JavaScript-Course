
const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}

//let randomNum = Math.random();  gens a numbetween 0-1
//let randomNum = Math.floor(Math.random() * 6) + 1; 
//do 6+1 bc it generates ran dum from 0-6 exlusive ie 0-5.999 
//so when floor it, youll nevber get 6, so add plus one to make 1-7 exclsuive

//if you watned between 50-100
//const min = 50;
//const max = 100;
//let midRanNum = Math.floor(Math.random() * (max - min)) + min
//generate numn from 0-1
//then mults it by max-min(ie 50) to scale to be in decmal range of min-max
//then u floor it and add the min to make it in range

//ex
//math.random() = 0.23
//0.23 * (100-50) = 11.25
//11.25 + 50 = 61.25 yay

console.log(randomNum);



