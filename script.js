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
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "CORRECT!"; // CORRECT MESSAGE //// REMOVIDO!!
      changeColors(clickedColor); // PUT THE CLICKED COLOR IN CHANGE COLOR FUNCTION
      messageDisplay.style.color = clickedColor
    } else {
      this.style.backgroundColor = "#232323"; // PUT THE SQUARE IN BODY BACKGROUND IF PICK FAILS
      messageDisplay.textContent = "Try Again"; // TRY AGAIN MESSAGE //// REMOVIDO!!
      messageDisplay.style.color = "orange"
    }
  });
}
function handleSetHardMode() { // SET TIMEOUT TO ACTIVE FUNCTION AFTER A SECONDS
  setTimeout(() => {
    reset();
  }, 3000);
  
}

function reset() {  // RESET FUNCTIONS TO CLEAR THE PAGE 
  colors = [];
  colorsGenerator();
  printSquares();
  colorDisplay.style.color = "";
  messageDisplay.textContent = "";
}
