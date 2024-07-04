let usernamee = "";

while (usernamee === "" || usernamee === null) { //if click cancel it equals null
    username = window.prompt("Please enter your name");
}

console.log("Hello " + usernamee);

//do whi;e

do{
    username = window.prompt("Please enter your name");
}while(usernamee === "" || usernamee === null);

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Please enter your username");
    password = window.prompt("Please enter your password");

    if(usrname === "myUsername" && password === "myPassword"){
        loggedIn = true; //then now isnce true we can escape the while loop 
        console.log("You are logged in");
    }
    else{
        console.log("Incorrect username or password. Please try again");
    }
}


