/**
 * DOM - Document Object Model
 */

const firstLink = document.querySelector('#link-1');
const firstLinkParent = firstLink.parentElement;

const firstParagraph = document.querySelector('.content p');
console.log("First paragraph:", firstParagraph);
// Get the element's parent
console.log("First paragraphs parent is:", firstParagraph.parentElement);
// Get the element next sibling
console.log("First paragraphs next sibling is:", firstParagraph.nextElementSibling);
// Get the element previous sibling
console.log("First paragraphs prev sibling is:", firstParagraph.previousElementSibling);

const content = document.querySelector('.content');		// Get the FIRST matching element
const contentParagraphs = content.querySelectorAll('p');	// Get ALL matching elements
console.log("content paragraphs:", contentParagraphs);

// We can get content from an element
console.log("First paragraph plain content:", firstParagraph.innerText);
console.log("First paragraph HTML content:", firstParagraph.innerHTML);

// We can also change the content of an element
firstParagraph.innerHTML = "Look ma, my first paragraph!";
firstParagraph.innerHTML += " Oh I forgot this!";
