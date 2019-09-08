const cards = [
{
	rank: 'queen',
    suit: 'hearts',
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: 'queen',
    suit: 'diamonds',
    cardImage: "images/queen-of-diamonds.png"
},
{
	rank: 'king',
    suit: 'hearts',
    cardImage: "images/king-of-hearts.png"
},
{
	rank: 'king',
    suit: 'diamonds',
    cardImage: "images/king-of-diamonds.png"
}
];

const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
  console.log("this in checkForMatch", this);
}

function flipcard() {
	var cardId = this.getAttribute("data-id");
	this.setAttribute("src", cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("you found a match!");
		} else {
			alert("Sorry, try again.");
		}
		console.log(cards[cardId]);
			alert("User flipped " + cards[cardId].rank);
	} else {
		console.log("cardId", cardId);
		console.log("User flipped " + cards[cardId].rank);
	}
	console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    checkForMatch();
}

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		console.log(cards[i]);
		var cardElement = document.createElement('img');
		console.log("cardElement", cardElement);
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		var gameBoard = document.getElementById("game-board");
		gameBoard.appendChild(cardElement);
		cardElement.addEventListener("click", flipcard);
	}
}

checkForMatch();
createBoard();
