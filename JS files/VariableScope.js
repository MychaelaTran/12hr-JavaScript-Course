let x = 1; //available anywhere
// cant have anohter x in global scope

function func1(){
    let x = 1;
    console.log(x);
}

function func2(){
    let x = 2;
    console.log(x);
}
//this is ok bc have different scopes
//use local versions first before gloval 
//if no local we use global 

//functions canrt see inside other functions 














