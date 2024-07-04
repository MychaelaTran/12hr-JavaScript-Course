//constants are variables that cant be changed

const PI = 3.14159
//good practice to cap const (not strings tho if const)
let radius;
let circumference;

// so if i Put 
//PI = 420
//ill get an error in console

//document refers to HTML 
//onlcick is an html element event handler

// when click occurs on the thing with id userSubmit in html
document.getElementById("userSubmit").onclick = function(){
    radius = document.getElementById("userRad").value;
    radius = Number(radius);
    console.log(radius, typeof(radius));

    circumference = 2 * PI * radius;
    console.log(circumference)

    document.getElementById("displayC").textContent = `The circumference is ${circumference} cm` 
}




