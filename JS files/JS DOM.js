// DOM = DOCUMENT OBJECT MODEL
//              Object{} that represents the page you see in the web browser 
//              and provides you with an API to interact with it.
//             Web browser constructs the DOM when it loads an HTML document,
//             and structures all the elements in a tree-like representation.
//            JavaScript can access the DOM to dynamically 
//            change the content, structure, and style of a web page.


console.log(document); //would show me my html document
console.dir(document); //dir means directory
//will list all properties of the object 
document.title="myWebsite"; //bc the html document is an object hence DOM


//now lets say dynamcially I want to change background colour of document when it loads
document.body.style.backgroundColor = "hsl(0, 0%, 15%)" ;
//even thop no css can dynamical.y change background colour

//lets pretend we have an h1 headder with id="welcome-msg"

const username = "Mychaela Tran";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? 'Guest' : username



