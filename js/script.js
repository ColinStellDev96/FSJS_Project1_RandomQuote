// Quotes Array Containing Objects with each quote and it's relevant information
let quotes = [
  {
    quote: "Change will not come if we wait for some other person or if we wait or some other time. We are the one's we've been waiting for. We are the change that we seek.",
    source: "President Barack Obama",
    citation: "Campaign Speech",
    yeah: 2008,
    tag: "Politics"
  },
  {
    quote: "Smoking cigars is like falling in love. First, you are attracted by its shape; you stay for its flavor, and you must always remember never, never to let the flame go out!",
    source: "Winston Churchill",
    citation: null,
    year: null,
    tag: "Cigars"
  },
  {
    quote: "Failure is a feeling long before it becomes an actual result. It’s vulnerability that breeds with self-doubt and then is escalated, often deliberately, by fear.",
    source: "Michelle Obama",
    citation: "Becoming",
    year: 2018,
    tag: "Wisdom"
  },
  {
    quote: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.",
    source: "JK Rowling",
    citation: null,
    year: null,
    tag :"Wisdom"
  },
  {
    quote: "Stop listening to the bombastic loudmouths on the radio and television and the Internet. To hell with them. They don’t want anything done for the public good. Our incapacity is their livelihood",
    source: "John McCain",
    citation: "The Restless Wave",
    year: 2018,
    tag: "Politics" 
  },
  {
    quote: "I intend to smoke a good cigar to the glory of God before I go to bed tonight.",
    source: "Charles Spurgeon",
    citation: null,
    year: 1874,
    tag: "Cigars"
  },
  {
    quote: "You absolutely need to have daily discipline to do grinding work. Nothing will happen without that. At the same time you don't need to sacrifice your relationships. You can have both",
    source: "Ryan Carson",
    citation: "GiantThinkers.com",
    year: null,
    tag: "Work Ethic"
  }
]
console.log(quotes);

// Colors Array holding each of the background colors for random colors.
let colors = [
  "linear-gradient(to left top, #083475, #3840a2, #7145ca, #b33dea, #fb02ff)",
  "linear-gradient(to left top, #083475, #672d88, #b1007c, #e80053, #ff1102)",
  "linear-gradient(to left top, #083475, #0063a6, #0094ce, #00c6eb, #02f9ff)",
  "linear-gradient(to left top, #083475, #27409a, #4d4abf, #7850e1, #a851ff)",
  "linear-gradient(to left top, #083475, #006eb2, #00a5b2, #00d676, #d1f700)"
]
console.log(colors);

// Empty Arrays to push used quotes and colors into so that they never repeat back to back, used in the functions below. 
let repeatQuotes = [];
let repeatColors = [];

getRandomQuote = () => {
  randomQuote = Math.floor(Math.random() * quotes.length); //variable that creates a random number using the quotes array
  quoteSplice = quotes.splice(randomQuote, 1)[0]; //splice randomQuote object, 1 is the index value the splice stops at, [0] indicates access of the first item in the array
  repeatQuotes.push(quoteSplice); //pushing each random quote into the global repeatQuotes array which starts as an empty array, but populates as the getRandomQuote function is called.
  if (quotes.length === 0) {
      quotes = repeatQuotes;
      repeatQuotes = []; // this logic allows us to start over again once all the quotes have been viewed
  }
  return quoteSplice;
};

// Very similar function to the getRandomQuote function, only pushing into a different array (repeatColors)
getRandomColor = () => {
  randomColor = Math.floor(Math.random() * colors.length);
  colorSplice = colors.splice(randomColor, 1)[0];
  repeatColors.push(colorSplice);
  if (colors.length === 0) {
      colors = repeatColors;
      repeatColors = [];
  }
  return colorSplice;
};

// Function that prints the new quote and backgroundImage color to the page on button click.
printQuote = () => {
  let printText = getRandomQuote();
  let newColor = getRandomColor();
  let newQuotePrint = () => {
    if (printText.citation === null && printText.year === null) {
      return `<p class="quote">${printText.quote}</p>
      <p class="source">${printText.source}<span class="tag">${printText.tag}</span></p>`;
    } else if (printText.citation === null) {
      return `<p class="quote">${printText.quote}</p>
      <p class="source">${printText.source}<span class="year">${printText.year}</span><span class="tag">${printText.tag}</span></p>`
    } else if (printText.year === null) {
      return `<p class="quote">${printText.quote}</p>
      <p class="source">${printText.source}<span class="citation">${printText.citation}</span><span class="tag">${printText.tag}</span></p>`;
    }  else {
      return `<p class="quote">${printText.quote}</p>
      <p class="source">${printText.source}<span class="citation">${printText.citation}</span><span class="year">${printText.year}</span><span class="tag">${printText.tag}</span></p>`;
    }
  }
  document.getElementById('quote-box').innerHTML = newQuotePrint();
  document.body.style.backgroundImage = newColor; 
};

// Timer that changes the quote and background color after 20 seconds. 
window.setInterval(printQuote, 20000);

// click event for the button to change the quote and background color
document.getElementById('loadQuote').addEventListener("click", printQuote, false);