//Acceptinf User Input


/*EASY WAY = window prompt
let username;

username = window.prompt(`What's your username?`);

console.log(username);
*/

//PROFESSIONAL WAY = HTML textbook
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value; //.value names it so obtainthe value of the input
    username = document.getElementById("myH1").textContent = `Hello ${username}`;
    console.log(username);
}   








