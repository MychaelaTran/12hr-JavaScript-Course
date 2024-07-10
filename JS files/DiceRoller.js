





function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult =  document.getElementById("diceResult");
    const diceImages =  document.getElementById("diceImages");
    const values =[];
    const images =[];

    for(let i=0; i < numOfDice; i++){
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value); //adds the random number to the values array
        images.push(`<img src="Dice/${value}Dice.jpg" alt="Dice ${value}">`);
    }   //alt attrivutes puts that when image cant display
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

 
}