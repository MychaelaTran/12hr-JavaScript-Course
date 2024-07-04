// and or not
//&& || !

const temp = 20;

if(temp > 0 && temp <= 30){
    console.log("The weather is good");

}
else{
    console.log("The WEather is bad");
}


const isSunny = true;

if(!isSunny){
    console.log("its cloudt");
}
else{
    console.log("Its  sunny");
}

/* SIDe NOTE

if say const PI = 3.14
and we checlk if PI === "3.14" return false bc not same data tytpe
but if we checl PI == "3.14" true and PI == 3.14 true for both == and ===
=== is strict eqaultiy for value and datatpye
== is comaprison operator that compares values
!== string ineuqality operator
!=inequaoty operator
good when accepting user inpiut 
*/