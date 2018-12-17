var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = []

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
	checkForMatch();
}
};

flipCard(0);
flipCard(2);




// possible alternative code for Control Flow, Web Dev Fundamentals Assignment, slide 7
/*
if ((cardsInPlay.length === 2) && (cardsInPlay[0] === cardsInPlay[1])) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
} 
*/

