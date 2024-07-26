const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach((letter) => {
  // Create Span
  let span = document.createElement("span");

  // Create Letter Text Node
  let theLetter = document.createTextNode(letter);

  // Append The Letter To Span
  span.appendChild(theLetter);

  // Add Class On Span
  span.className = "letter-box";

  // Append Span To The Letters Container
  lettersContainer.appendChild(span);
});

const words = {
  programming: [
    "php",
    "java script",
    "go",
    "scala",
    "fortran",
    "r",
    "my sql",
    "python",
  ],
  movies: [
    "prestige",
    "inception",
    "parasite",
    "interstellar",
    "whiplash",
    "memento",
    "coco",
    "hitmans bodyguard",
  ],
  people: [
    "albert einstein",
    "hitchcock",
    "alexander",
    "cleopatra",
    "mahatma ghandi",
  ],
  countries: [
    "syria",
    "palestine",
    "south africa",
    "egypt",
    "bahrain",
    "qatar",
  ],
};

let allkeys = Object.keys(words);

let porpnum = Math.floor(Math.random() * allkeys.length);
let propname = allkeys[porpnum];
let propvalue = words[propname];
let valuenum = Math.floor(Math.random() * propvalue.length);
let valuevalue = propvalue[valuenum];

let span = document.querySelector(".game-info .category span");
span.innerHTML = propname;

let LAS = document.querySelector(".letters-guess");

let valarr = Array.from(valuevalue);

valarr.forEach((letter) => {
  let espan = document.createElement("span");
  if (letter === " ") {
    espan.className = "with-space";
  }

  LAS.appendChild(espan);
});

let guessspan = document.querySelectorAll(".letters-guess span");
let wrong = 0;
let rigth = 0;
if (valarr.includes(" ") === true) {
  rigth = 1;
}
let thedraw = document.querySelector(".hangman-draw");
document.addEventListener("click", (e) => {
  let satat = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let clickedletter = e.target.innerHTML.toLowerCase();
    valarr.forEach((wordletter, wordindex) => {
      if (wordletter == clickedletter) {
        satat = true;
        guessspan.forEach((span, spanindex) => {
          if (spanindex === wordindex) {
            span.innerHTML = clickedletter;

            rigth++;

            if (rigth === valarr.length) {
              welldone();
            }
          }
        });
      }
    });

    if (satat !== true) {
      wrong++;
      thedraw.classList.add(`wrong-${wrong}`);
      document.querySelector(".wrongnum span").innerHTML = wrong;

      if (wrong === 8) {
        endGame();
        lettersContainer.classList.add("finished");
      }
    }
  }
});

function welldone() {
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode("Congrats!, You are sucessful");

  // Append Text To Div
  div.appendChild(divText);

  // Add Class On Div
  div.className = "popup";

  // Append To The Body
  document.body.appendChild(div);
}

function endGame() {
  // Create Popup Div
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(`Game Over, The Word Is ${valuevalue}`);

  // Append Text To Div
  div.appendChild(divText);

  // Add Class On Div
  div.className = "popup";

  // Append To The Body
  document.body.appendChild(div);
}
