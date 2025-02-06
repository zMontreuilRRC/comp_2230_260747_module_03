// step 1: select elements
const submitNameNode = document.querySelector("#submit-name");
const nameFieldNode = document.querySelector("#field-name");
const changeNameParagraph = document.querySelector("p");

// step 2: respond to button click
// using an anonymous function ( () => {} )
submitNameNode.addEventListener("click", () => {
    changeNameParagraph.textContent = `Welcome to the page, ${nameFieldNode.value}`;
    nameFieldNode.value = "";
});

function logEvent() {
    console.log("Event occurred");
}

// event listeners are special functions that tell DOM nodes to wait for something to happen
// when that does happen, they invoke whatever function was provided to THEM
// first argument: event type (string) DOMContentLoaded: page was loaded
// second argument: function to invoke when that event occurs (callback function)
// document.addEventListener("click", logEvent);