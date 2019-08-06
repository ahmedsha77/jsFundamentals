//Hoisting

//Hoisting does not exist. Its an illusion and code doesn't actually get moved.
//JS reads through the code


console.log(scissors);
scissors="blue";
console.log(scissors);

var scissors;

b();
console.log(a);

function b(){
    console.log("This is all hoisted.");
}

var a = "This is not hoisted.";



















