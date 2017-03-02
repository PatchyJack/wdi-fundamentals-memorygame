console.log("JS file is connected to HTML! Woo!")

// Set up the variables

var cards = ['king','king','queen','queen'];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');

// Create the cards, set attributes, assign class and
// eventListener, then attach cards to board

var createCards = function() {
  for (i = 0; i < cards.length; i++) { 
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    gameBoard.appendChild(cardElement);
    }    
} 

//function to call when cards clicked

isTwoCards = function() {
  cardsInPlay.push(this.getAttribute('data-card'));
  
  console.log(this.getAttribute('data-card'));
  
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = '<img src="https://cdn.pixabay.com/photo/2012/04/18/14/14/card-37142_960_720.png" alt="king"/>'
  } else {
    this.innerHTML = '<img src="https://cdn.pixabay.com/photo/2012/04/18/14/14/hearts-37143_960_720.png" alt="queen"/>'
  };
  
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  } 
}

//function to call when cards clicked

var isMatch = function(cards) {
   if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  // function to reset the board
    var reset = function() {
      var images = document.getElementById('game-board');
      images.innerHTML = '';
    }
    reset();
    // create the cards again
    createCards();
  }  
 }

createCards();


