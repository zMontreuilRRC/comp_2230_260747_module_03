// want to modify all of the LI elements in section-one
const sectionOneNode = document.querySelector("#section-one");

// elements can be accessed not just by using selectors, but also by "traversal"
// we can access any node by using the relationships of other nodes
// to modify section-two:
const sectionTwoNode = sectionOneNode.nextElementSibling;
const newParagraph = document.createElement("p");
newParagraph.textContent = "Appended to sibling of sectionOneNode";
sectionTwoNode.insertAdjacentElement("beforeend", newParagraph);

// modify sectionTwoNode's h2
// list of children of sectionTwo
const sectionTwoChildren = sectionTwoNode.childNodes;
const sectionTwoHeader = sectionTwoChildren[1];

// query selectors can be used on elements to ONLY get their children
const allSectionTwoHeaders = sectionTwoNode.querySelectorAll("h2");
console.log(allSectionTwoHeaders);
