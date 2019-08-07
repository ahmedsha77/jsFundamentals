/**Fat Arrows **/

let hi = () => {
    //you need the equals sign=, the parentheses, and the fat arrow =>
    console.log("hello!");
}

hi();

//-> NOT the same as =>
//we need to set the fat arrow function to a variable
//we use the fat arrow to signify its a function

//Block Body
//************
let hi = () => {
    console.log("hi");
}

let apples = (x) => {
    console.log(`There are ${x} apples in the basket.`)
}
apples(12);

//Concise Body
//***********
let hi = () => console.log("hi");

let apples = x => console.log(`There are ${x} apples in the basket.`);
apples(10);

//More than one parameter will require parenthesis
//Return if one-line fat arrow function is implied

let func = () => console.log("hi"); //this works

/* This DOES NOT Work
let func = ()
    => console.log("hi");
*/

























