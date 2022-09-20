/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

const texts = document.querySelector("p");

const sentences = texts.innerHTML.split(" ");
// console.log(sentences);
const arrayText = Array.from(texts.innerHTML.split(" "));
// console.log(arrayText);

const test = arrayText.map((sentence) => {
  // const newSentence = sentence.split(',');
  // console.log(sentence.length);
  for (let i = 0; i < arrayText.length; i++) {
    if (sentence.length > 8) {
      // sentence.classList.add("yellow");
      // sentence.style.background = "yellow"
    }
  }
});

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const span = document.createElement("span");
span.innerHTML = `<span><a href="http://officeipsum.com/">http://officeipsum.com/</a></span>`;
texts.appendChild(span);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

texts.innerHTML = texts.innerHTML.split(".").join(".<p></p>");

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const header = document.querySelector("h1");
const div = document.createElement("div");
const count = texts.innerHTML.split(" ").length;
div.textContent = count;
header.appendChild(div);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

const question = texts.innerHTML.replaceAll("?", "🤔");
texts.textContent = question;

const exclamation = texts.innerHTML.replaceAll("!", "😲");
texts.textContent = exclamation;
