const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipcard(cardIndex) {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("you found a match!");
		} else {
			alert("Sorry, try again.");
		}
		console.log(cards[cardIndex]);
			alert("User flipped " + cards[cardIndex]);
	} else {
		console.log("User flipped " + cards[cardIndex]);
	}
	cardsInPlay.push(cards[cardIndex]);
}

flipcard(0);
flipcard(2);
checkForMatch();