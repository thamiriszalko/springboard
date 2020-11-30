const gameContainer = document.getElementById("game");
const resetButton = document.getElementById("reset-button");
let clickedList = [];
let matchedList = [];
let countClicks = 0;
resetButton.addEventListener("click", handleButtonClick);

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);


function createDivsForColors(colorArray) {

  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.isClicked = false;
    newDiv.isMatched = false;
    newDiv.addEventListener("click", handleCardClick);

    gameContainer.append(newDiv);
  }
}

function hideCards() {
  setTimeout(function() {
    for (div of gameContainer.children) {
      div.style.backgroundColor = "";
    }
  }, 1000);
}

function addBackgroundColor(div) {
  let color = div.className;
  div.style.backgroundColor = color;
}

function clearBackgroundColor(div) {
  div.style.backgroundColor = "";
}

function resetGame() {
  let newArray = shuffle(COLORS);
  countClicks = 0;
  clickedList = [];
  matchedList = [];

  for (let i = 0; i < newArray.length; i++) {
    div = gameContainer.children[i];
    div.className = newArray[i]
    div.isClicked = false;
    div.isMatched = false;
    addBackgroundColor(div);
  }

  hideCards();
}

function handleButtonClick() {
  resetGame();
}

function handleCardClick(event) {
  const clickedDiv = event.target
  countClicks++;

  if (!clickedDiv.isClicked) {
    clickedList.push(clickedDiv);

  }

  if (clickedList.length < 2){
    if (!clickedDiv.isClicked && !clickedDiv.isMatched) {
      addBackgroundColor(clickedDiv);
      clickedDiv.isClicked = true;
    } else if (clickedDiv.isClicked && !clickedDiv.isMatched) {
      return;
    }
  } else if (clickedList.length == 2) {
    addBackgroundColor(clickedDiv);
    clickedDiv.isClicked = true;
    let firstCard = clickedList[0];
    let secondCard = clickedList[1];

    if (firstCard.className == secondCard.className) {
      matchedList.push(firstCard);
      matchedList.push(secondCard);
      firstCard.isMatched = true;
      secondCard.isMatched = true;
      clickedList = [];

      if (matchedList.length == gameContainer.children.length) {
        setTimeout(function(){
          alert(`You won with ${countClicks} moves.`);
          resetGame();
        }, 300);
      }
    } else {
      setTimeout(function(){
        firstCard.isClicked = false;
        secondCard.isClicked = false;
        clearBackgroundColor(firstCard);
        clearBackgroundColor(secondCard);
        clickedList = [];
      }, 1000)
    }
  } else {
    return;
  }
}

createDivsForColors(shuffledColors);
resetGame();
