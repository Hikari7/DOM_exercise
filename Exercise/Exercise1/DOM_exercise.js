/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

// solutions
const paragraph = document.querySelector("p");
paragraph.innerHTML = paragraph.innerText
  .split(" ")
  .map((word) =>
    word.length > 8
      ? `<span style="background-color: yellow">${word}</span>`
      : word
  )
  .join(" ");

// const arrayText = Array.from(texts.innerHTML.split(" "));

// const newSentences = sentences.map((sentence) => {
//   // console.log(sentence);
//   if (sentence.length > 8) {
//     sentence.classList.add("yellow"); //stringはclassListには反映されないのでダメ
//   }
//   sentences.join(" ");
// });

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const span = document.createElement("span");
span.innerHTML = `<span><a href="http://officeipsum.com/">http://officeipsum.com/</a></span>`;
paragraph.appendChild(span);

// /*
//   Exercise 03
//   -----------
//   Split each new sentence on to a separate line in the paragraph text.
//   A sentence can be assumed to be a string of text terminated with a period (.)
// */

paragraph.innerHTML = paragraph.innerHTML.split(".").join("<p></p>");

// /*
//   Exercise 04
//   -----------
//   Count the number of words in the paragraph tag and display the count afer the heading.
//   You can assume that all words are separated by one singular whitespace.
// */
const header = document.querySelector("h1");
const count = paragraph.innerText.split(" ").length;
const div = document.createElement("div");
div.textContent = count;
header.appendChild(div);

// /*
//   Exercise 05
//   -----------
//   Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲)
// */

const question = paragraph.innerText.replaceAll("?", "🤔");
paragraph.textContent = question;

const exclamation = paragraph.innerText.replaceAll("!", "😲");
paragraph.textContent = exclamation;

//paragraph.innerHTML = paragraph.innerHTML.replaceAll('?', "🤔").replaceAll('!',"😲")
