const textBox = document.getElementById("textBox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toF.checked){
        temp = Number(textBox.value);
        temp = temp * 9 /5 + 32;
        result.textContent = temp.toFixed(1) + "F" //the toFixed(1) means give one point of percesion
    }
    else if(toC.checked){
        temp = Number(textBox.value);
        temp = (temp -32) * (5/9)
        result.textContent = temp.toFixed(1) + "C"
        
    }
    else{
        result.textContent = "Select A Unit";
    }
}