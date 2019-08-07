/**Parameters**/

function hi(name){
    console.log(`Hi ${name}!`)
}

hi("Danielle");
hi("Zach");
//the (name) is the parameter we need to take into the function
//the ${name} is the string interpolation, we can refer to the parameter we passed
//the hi("Danielle") is where we define what the parameter value will be

function pet(animal){
    console.log(`My puppy's name is ${animal}`);
}

pet("Mo");
pet("Georgie");
pet("Nugget");

//Challenge
function Name(firstName, lastName){
    let w = firstName + " " + lastName
    console.log(`Hi my name is  ${w}`)
}
Name("Shiraz", "Ahmed");










