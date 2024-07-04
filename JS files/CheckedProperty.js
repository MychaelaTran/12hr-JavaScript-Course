const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const cardResult = document.getElementById("cardResult");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `You are Subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT Subscribed!`;
    }

    if(visaBtn.checked){
        cardResult.textContent = `You are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        cardResult.textContent = `You are paying with MasterCard`;

    }
    else if(payPalBtn.checked){
        cardResult.textContent = `You are paying with PayPal`;
    }
    else{
        cardResult.textContent = `You must select a payment type!`;
    }
   
}




