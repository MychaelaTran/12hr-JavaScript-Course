function generatePassword(length, includeLowerCase, includeUpperCase, includeNums, includeSymb){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPWRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_=+/?";

    let allowedChars = ""; //depending on which paramerters are true ie incliudeLower,upper,nums,symbs,
                          //we then want to add the true ones to allowed chars and make one long string
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : ""; //if includeLowercase is true we add lowercaseChars, else we add empty string
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNums ? numberChars : "";
    allowedChars += includeSymb ? symbolChars : "";

    if(length <= 0 ){
        return `(password length must be at least one character long)`;
    }
    if(allowedChars.length == 0){
        return `(At least 1 set of characters needs to be selected)`
    }

    //generating the password
    //making it include all the true cases
    //in this way every password start with LC,UC,Num,Sym depending if true or not 
    if(includeLowerCase && length > 0){
        const randomLCindex = Math.floor(Math.random()*26);
        password+= lowercaseChars[randomLCindex];
        length--; //length of password minus one for the following for loop
        
    }
    if(includeUpperCase && length > 0){
        const randomUCindex = Math.floor(Math.random()*26);
        password+= uppercaseChars[randomUCindex];
        length--; 
    }
    if(includeNums && length > 0){
        const randomNumsIndex = Math.floor(Math.random()*10);
        password+= numberChars[randomNumsIndex];
        length--; 
    }
    if(includeSymb && length > 0){
        const randomSymbIndex = Math.floor(Math.random()*symbolChars.length);
        password+= symbolChars[randomSymbIndex];
        length--; 
    }

    for(let i = 0; i < length; i++){
        const randomCharIndex = Math.floor(Math.random() * allowedChars.length)
        password+= allowedChars[randomCharIndex];
    }

    return password;
}
const passwordLength = 2;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNums = true;
const includeSymb = true;

const password = generatePassword(passwordLength, 
                                  includeLowerCase, 
                                  includeUpperCase, 
                                  includeNums, 
                                  includeSymb);

console.log(`Generated Password: ${password}`)
