const newHeaderNode = document.createElement("h1");
newHeaderNode.textContent = "Js-injected Header";
newHeaderNode.classList.add("red-text");
document.body.appendChild(newHeaderNode);

const newParagraphNode = document.createElement("p");
newParagraphNode.textContent = "JS-injected Paragraph";
newParagraphNode.id = "first-paragraph";
document.body.appendChild(newParagraphNode);

const newSpanNode = document.createElement("span");
newSpanNode.textContent = " and Js-injected span";
newSpanNode.classList.add("red-text");
newParagraphNode.insertAdjacentElement("afterbegin", newSpanNode);

// newParagraphNode.removeChild(newSpanNode);
// newParagraphNode.parentElement.removeChild(newParagraphNode);
newParagraphNode.remove();