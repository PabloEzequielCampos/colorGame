let colors = []; // EMPTY ARRAY TO FILL WITH RANDOM RGB COLORS - FILL IT WITH "COLORS.PUSH"

let squares = document.querySelectorAll(".square");
let container = document.querySelector(".container");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message"); /// !!! REMOVIDO
let h1 = document.querySelector("h1");
let bodyColor = document.querySelector("body");
let congratMessage = document.querySelector("#congratMessage");
let resetBtn = document.querySelector(".resetBtn"); // SIN USO DE MOMENTO.
let hardBtn = document.querySelector(".hardertBtn"); // SIN USO DE MOMENTO
let hardOnOff = document.querySelector("#hardOnOff"); // CHANGE COLOR OF ON/OFF IN HARD MODE.

let hardFlag = 0;
let lives = 0;

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

hardOnOff.textContent = "OFF";
hardOnOff.style.color = "RED";

colorsGenerator();
printSquares();

function printSquares() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]; // FOR LOOP TO ASSING THE COLOR WITH THE ARRAY
    colorDisplay.textContent = pickedColor.toUpperCase(); // CHANGE THE COLOR DISPLAY SPAN IN H1 TEXT.
  }
}
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    clickedColor = this.style.backgroundColor; // ASSING ACTUAL COLOR TO CLICKEDCOLOR VAR

    if (hardFlag == 0) {
      if (clickedColor == pickedColor) {
        messageDisplay.textContent = "CORRECT !"; // CORRECT MESSAGE //// REMOVIDO!!
        changeColors(clickedColor); // PUT THE CLICKED COLOR IN CHANGE COLOR FUNCTION
        messageDisplay.style.color = clickedColor;
      } else {
        this.style.backgroundColor = "#232323"; // PUT THE SQUARE IN BODY BACKGROUND IF PICK FAILS
        messageDisplay.textContent = "Try Again"; // TRY AGAIN MESSAGE //// REMOVIDO!!
        messageDisplay.style.color = "orange";
      }
    }

    if (hardFlag == 1 && lives == 0) {
      if (clickedColor == pickedColor) {
        messageDisplay.textContent = "PERFECT IN ONE CLICK !"; // CORRECT MESSAGE //// REMOVIDO!!
        changeColors(clickedColor); // PUT THE CLICKED COLOR IN CHANGE COLOR FUNCTION
        messageDisplay.style.color = clickedColor;
        lives = 1;

      } else {
        this.style.backgroundColor = "#232323"; // PUT THE SQUARE IN BODY BACKGROUND IF PICK FAILS
        messageDisplay.textContent = "FAIL - RESTART THE GAME "; // TRY AGAIN MESSAGE //// REMOVIDO!!
        messageDisplay.style.color = "RED";
        lives = 1;
      }
    }
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
}
