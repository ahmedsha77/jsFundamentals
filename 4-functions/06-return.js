/**Return**/

let hi = () => {
    return "hi";
};

let newName = hi();

console.log(newName);

//return is the keyword that brings our data out of our function
//newName variable holds the value of the return
//when called, the function becomes the value of the return

let capitalizedName = (name) => {
    let capName = "";
    for (let letter in name){
        if(letter == 0){
            capName += name[letter].toUpperCase();
        }else {
            capName += name[letter].toLowerCase();
        }
    }
    return capName;
}

//console.log(capName); error, not defined

const myName = capitalizedName("ingEborG");
console.log(myName + " how are you doing?");

//Challenge
let tipCalc = (price) => {
    let tipPercent = 0.07;
    let tip = price * tipPercent;
    return tip;
}

let tipDinner = tipCalc(100);
console.log(tipDinner);
























