console.log("JS file is connected to HTML! Woo!")

var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";

// First edit from instructions

/* if (cardTwo === cardFour) {
	alert("You found a match!");
} 
	alert("Sorry, try again."); */

var gameBoard = document.getElementById('game-board');

var createCards = function() {
  for (i = 0; i < 4; i++) { 
    var cardsElement = document.createElement('div');
    cardsElement.className = 'card';
    gameBoard.appendChild(cardsElement)
    }    
} 

createCards();

