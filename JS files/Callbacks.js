//  callback = a function that is passed as an argumnet 
//              to another funciton

//used to handle asynchronous operations:
//      1. reading a file
//      2. network requests
//      3. interacting with databases

//      "hey when you're done, call this next."


hello(); 
//what if hello funciton takes a long time to execute
//js isnt gonna wait to execute goodbye function
//so how to guratntee that the first funciton we put is executed first
//we use callback to make sure in right order 
goodbye();

//so to use callback to fix the above we would do like this
hello(goodbye); //pass the name of the funciton

hello(wait);

function hello(callback){ //need to add the callback parameter
    console.log("Hello");
    callback(); //this menas to invoke the callback function once hello fubction is done
}

function goodbye(){
    console.log("goodbye!");
}

function leave(){
    console.log("leave");
}

function wait(){
    console.log("wait");
}


function sum(callback, x,y){
    let result = x+y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

sum(displayConsole,1,2)
//calculates result first in sum funciton
//then after that process is finished, then displauy the result ot the console
// first result = 1+2;
//then we do displayConsole(result)