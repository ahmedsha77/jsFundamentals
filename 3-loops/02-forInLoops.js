let name = "shiraz";
let capName;

for(let x in name){
  if(x == 0){
    capName = name[x].toUpperCase();
  }else {
    capName += name[x].toLowerCase();
  }
}

console.log(capName);


let dogArray = ["husky", "shepherd", "corgi", "poodle", "pit bull", "border collie"];

for(let dog of dogArray){
  console.log(dog, "goes bark");
}





















