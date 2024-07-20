// .reduce()    = reduce the elements of an array to a single value


const prices = [27.4,3.12,12,97,33];
const total = prices.reduce(sum);

function sum(accumulator, element){
    return accumulator + element;
    //returning previous element + next element
    //so first iteration is 0 + 27.4
    //now 27.4 is accumulator in next iteration 
    //then next iteration is 27.4+3.12 now accumulator is 30.52
    //follows that pattern

}

console.log(`$${total.toFixed(2)}`)

const grades = [75,98,57,88];
const max = grades.reduce(maxGrade);

function maxGrade(accumulator, element){ //can rename accumulator and ele,ent whatever want
    return Math.max(accumulator,element);
}

console.log(max);



