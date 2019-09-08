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
    cardImage: "images/king-of-diamonds.pnd"
}
];

const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipcard(cardId) {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("you found a match!");
		} else {
			alert("Sorry, try again.");
		}
		console.log(cards[cardId]);
			alert("User flipped " + cards[cardId]);
	} else {
		console.log("User flipped " + cards[cardId].rank);
	}
	cardsInPlay.push(cards[1].rank);
	console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
}

flipcard(0);
flipcard(2);
checkForMatch();