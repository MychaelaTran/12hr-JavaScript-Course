//can be efficent replacement to many else if statments

let day = 1;

switch(day){
    case 1:
        console.log("It's monday");
        break;

    case 2:
        console.log("It is Tuesday");
        break; //add the break else it will go through all the switches once matching case

    case 3:
        console.log("It is Wednesday");
        break;

    case 4:
        console.log("It is Thursday");
        break;
    
    case 5:
        console.log("It is Friday");
        break;
    
    case 6:
        console.log("It is Saturday");
        break;
    
    case 7:
        console.log("It is Sunday");
        break;
    
    default:
        console.log(`${day} is not a day`);
}


let testScore= 97;
let letterGrade;

switch(true){
    case testScore >= 90: //is true == true then execute the code
        letterGrade = "A";
        break;

    case testScore >= 80: //dont have to worry if get 90 bc once if they have90 break so never reach rthis above 80
        letterGrade = "B";
        break;
    
    default:
        letterGrade = "F";


}
    
    
    




