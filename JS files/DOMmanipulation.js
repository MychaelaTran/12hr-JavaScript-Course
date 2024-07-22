//adding elements to the htmlpage

const body = document.body //we can append studf to body
//body.append("Hello World", "Bye");
//we have appenc and appendChild
//appendChild, can only apply elements like div or spans aor anchortags
//anchor is all those plus srtings and multiple things

//lets add an alement
const div = document.createElement("div"); //created a div element NOT ADDED
body.append(div); //adding div to page
div.innerText = "Hello World" //this hello world is inside a div
//div.textContent = "Hello World"
div.innerHTML = "<strong> Hello World </strong> " //adds the css we type with it
const strong = document.createElement('strong')
strong.innerText = "HelloWorld2"
div.append(strong)
//const div = document.querySelector('div')
//console.log(div.textContent) //print  hello and bye eben tho bye is invisilbe all invisible elemtns
//console.log(div.innerText) //only prints visible text on page, looks at css too


//re,oving elements fromthe DOM
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

spanBye.remove() //removes the span with id bye
div.append(spanBye)


div.removeChild(spanHi)


/*without overwriting innerHtml by innerText

const body = document.body; // We can append stuff to body

// Let's add an element
const div = document.createElement("div"); // Created a div element but not added
body.append(div); // Adding div to page

// Adding Hello World text inside the div
div.innerText = "Hello World";

// Creating a strong element with HTML content
const strong1 = document.createElement('strong');
strong1.innerText = " Hello World ";
div.append(strong1); // Appends the strong element to the div

// Creating another strong element with innerText
const strong2 = document.createElement('strong');
strong2.innerText = "HelloWorld2";
div.append(strong2); // Appends the second strong element to the div

*/