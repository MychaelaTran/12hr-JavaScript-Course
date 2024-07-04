//Type conversion = changing datatype of a valuye to another
//              (strings, numbers, booleans)


/*let age = window.prompt("How old are you");

age += 1; //since input is a string, if user enters 19, it will display 191 on console bc it is appending one to the string now tje nimnber
console.log(age);
*/

let age = window.prompt("How old are you?");
age = Number(age); //type cast it to number
age += 1;
console.log(age, typeof(age));

let x,y,z;

x = "pizza";
y = "pizza";
z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof(x));  //dispplay NaN mean not a number
console.log(y, typeof(y));
console.log(z, typeof(z)); //returns true no matter what u put 
                            //if empty syting "" then it is false
                    //good to see if user input is empty can see if false then prompr user
                    //also false boolean if u assign but not delcare variable 












