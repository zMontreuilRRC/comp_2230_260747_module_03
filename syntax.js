// constant variable cannot be re-defined
const constantVariable = "NEVER CHANGES";

let newBoolean = true;

// start with "let"
// use camelCase
// Number
let floatingVariable = 3.14;

// redefine: no "let"
floatingVariable = 10;

// strings
// data types can change in JS between variable definitions
floatingVariable = "ten";

// "legacy" variable -- don't bother using this
var oldVariable = "old";

console.log(floatingVariable);


// COMPLEX DATA TYPES
// collections of variables, sorted by index
let myArray = ["first", "second", 1, 2, 3];
let secondElement = myArray[1]; // "second"

// OBJECTS
// key-value-pairs
let myUserProfile = { name: "Zach", isLoggedIn: true};
let userName = myUserProfile["name"];

// FUNCTIONS 
// counts to our input

// function countToNumber: name'
// maxNumber: parameter
// {} : function block
function countToNumber(maxNumber) {
    // let i = 0; iterator
    // i < maxNumber: evaluation (loop only runs if evaluation is true)
    // i = i+1; iteration
    //  i++: increment value by one

    try {
        if(typeof(maxNumber) !== "number") {
            throw new Error("Must have number argument");
        }

        for(let i = 1; i <= maxNumber; i++) {
            console.log(i);
        }
        console.log("Loop done");
    } catch(e) {
        console.log(e);
    }
}

countToNumber(10);

// WHILE
let myCounter = 11;

while(myCounter < 10){
    myCounter++;
}

do {
    myCounter++;
} while(myCounter < 10);