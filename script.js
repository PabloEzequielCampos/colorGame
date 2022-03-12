let colors = []; // EMPTY ARRAY TO FILL WITH RANDOM RGB COLORS - FILL IT WITH "COLORS.PUSH"

let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message"); /// !!! REMOVIDO
let hardOnOff = document.querySelector("#hardOnOff"); // CHANGE COLOR OF ON/OFF IN HARD MODE.
// -------------------------------- QUERYSELECTORS  -------------------------

let hardFlag = 0; // FLAG TO ACTIVATE HARD MODE
let lives = 0; // LIVES FLAG
let normalModeFlag = 0;

// ---------------------------------- FLAGS --------------------
let clickedColor;
let pickedColor;

const changeColors = (color) => {
  //CHANGE COLORS OF SPAN COLORDISPLAY -
  colorDisplay.textContent = color.toUpperCase();
  colorDisplay.style.color = color;
};

const numberGenerator = () => Math.round(Math.random() * 255); // GENERATE RANDOM NUMBER IN A SIMPLE FUNCTION

const colorGenerator = () =>
  // APLY THE RANDOM NUMBERS TO COLORS IN THE ARRAY
  `rgb(${numberGenerator()}, ${numberGenerator()}, ${numberGenerator()})`;

const colorsGenerator = () => {
  for (let i = 0; i < 6; i++) {
    colors.push(colorGenerator()); // PUSH TO ASSING THE COLORS GENERATED TO THE ARRAY
  }
  pickedColor = colors[Math.round(Math.random() * 5)]; // RANDOM NUMBER ASSIGN TO PICKEDCOLOR
};

hardOnOff.textContent = "OFF"; // START THE GAME WITH HARD MODE OFF
hardOnOff.style.color = "RED";

colorsGenerator(); // APLY COLORSGENERATOR FUNCTION
printSquares(); // APLY PRINTSQUARES FUNCTION

function printSquares() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]; // FOR LOOP TO ASSING THE COLOR WITH THE ARRAY
    colorDisplay.textContent = pickedColor.toUpperCase(); // CHANGE THE COLOR DISPLAY SPAN IN H1 TEXT.
  }
}
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    clickedColor = this.style.backgroundColor; // ASSING ACTUAL COLOR TO CLICKEDCOLOR VAR

    if (hardFlag == 0 && normalModeFlag == 0) {
      // <--------------------------------------------- NORMAL MODE CONFIG
      if (clickedColor == pickedColor) {
        messageDisplay.textContent = "CORRECT !"; // CORRECT MESSAGE //// REMOVIDO!!
        changeColors(clickedColor); // PUT THE CLICKED COLOR IN CHANGE COLOR FUNCTION
        messageDisplay.style.color = clickedColor;
        normalModeFlag = 1;
      } else {
        this.style.backgroundColor = "#232323"; // PUT THE SQUARE IN BODY BACKGROUND IF PICK FAILS
        messageDisplay.textContent = "Try Again"; // TRY AGAIN MESSAGE //// REMOVIDO!!
        messageDisplay.style.color = "orange";
      }
    } // <---------------------------------------------------- NORMAL MODE CONFIG

    if (hardFlag == 1 && lives == 0) {
      // <----------------------  HARD MODE CONFIG
      if (clickedColor == pickedColor) {
        messageDisplay.textContent = "PERFECT IN ONE CLICK !";
        changeColors(clickedColor);
        messageDisplay.style.color = clickedColor;
        lives = 1;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "FAIL - RESTART THE GAME ";
        messageDisplay.style.color = "RED";
        lives = 1;
      }
    } // <-------------------------------------------------------    HARD MODE CONFIG
  });
}
function handleSetHardMode() {
  // SET TIMEOUT TO ACTIVE FUNCTION AFTER A SECONDS
  messageDisplay.textContent = " HARD MODE -  ONE TRY ";
  colorDisplay.style.color = "LIME";
  messageDisplay.style.color = "LIME";
  hardOnOff.textContent = "ON";
  hardOnOff.style.color = "blue";
  hardFlag = 1;
  lives = 0;
  setTimeout(() => {
    hardModeReset();
  }, 3000);
}
function hardModeReset() {
  // FUNCTION TO RESET HARD MODE CLEAN
  colors = [];
  colorsGenerator();
  printSquares();
  colorDisplay.style.color = "";
  messageDisplay.textContent = "";
  clickedColor.textContent = "";
  lives = 0;
}

function reset() {
  // RESET FUNCTIONS TO CLEAR THE PAGE
  colors = [];
  colorsGenerator();
  printSquares();
  colorDisplay.style.color = "";
  messageDisplay.textContent = "";
  hardOnOff.textContent = "OFF";
  hardOnOff.style.color = "RED";
  hardFlag = 0;
  lives = 0;
  normalModeFlag = 0;
}
