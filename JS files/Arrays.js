let fruits = ["apple", "orange", "mango" ];
fruits[2] = "coconut"
fruits [3]= "watermelon"; //adds to array
fruits.push("banana");
fruits.pop(); //removes laste element
fruits.unshift("mango"); //adds to begining
fruits.shift(); //removes first elelemtn

let numOfFruuits = fruits.length;
let index = fruits.indexOf("apple")//tells u index of 
//if indesx retusn -1 then that means doesnt exist (good for if statment)


console.log(fruits[0]);



for(let i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}
for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}
for(let fruit of fruits){ //ehnabced for loop to iteratie
    console.log(fruit);
}

fruits.sort().reverse; //sorts in alpha order the .reverse , recerese the alpha order



