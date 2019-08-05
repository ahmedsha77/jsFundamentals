//*Types

//*Booleans

//Boolean can represent: true/false, yes/no, on/off//
let i=true;
let j=false;

let on=true;
let off=false;

console.log(on,off);

//*Null
//*Null = empty value; -- not 0, not undefined
let empty=null;
console.log(empty);
//Undefined=no value assigned, not even an empty container
let undef=undefined;
console.log(undef);

let x;
console.log(x);

//*Numbers
let degrees=90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 999999999999999;
console.log(rounded);

let notQuite=0.2+0.1;
console.log(notQuite);
let numbersAreHard=(0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

let a = Number("123");

//*Strings
let stringOne="double quotes";
let stringTwo='single quotes';
console.log(stringOne, stringTwo);

let first=1050 + 100;
let second="1050" + "100";
console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

//*Objects
let car={
    color: "red",
    tires: 4,
    extras: "A/C and Radio",
    cool: true
};
//Objects use curly braces{}

console.log(car);
console.log(typeof car);

//*Array

let list=[ 'item1','item2','item3'];
//list is the name of the array
//Arrays are denoted by square brackets []
//3 items in it separated by commas

let burritos=["large", 4, true];
console.log(burritos);
console.log(typeof burritos);

//*Addition vs. Concatenation
let third=1050+"100";
console.log(third);
console.log(typeof third);
//if theres a String present, then the entire thing will be considered a string

let firstName="Shiraz";
let lastName="Ahmed";
let houseNumber=12222;
let streetName="Fleeting Drive ";
let city="Indianapolis ";
let state="Indiana ";
let zipcode=46044;

console.log(houseNumber+" "+streetName+" "+city+" "+state+" "+zipcode);

/*
Strings - Properties
********************
Properties are qualities associated with a datatype. 
Strings have properties, or the qualities associated with that string.
The length of a string is a property.  
 */

 let myName ="Shiraz";
 console.log(myName.length);

 /*Methods can manipulate data*/
 let myNameIs="Shiraz";
console.log(myNameIs.toUpperCase());

let home="My home is Indianapolis";
console.log(home.includes("Indianapolis"));

let sent="This sentence will be split into individual parts.";

console.log(sent.split(""));

























































