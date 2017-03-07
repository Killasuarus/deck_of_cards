function Game() {
    var _this = this;
    this.deck = new Deck();
    this.tableau = {
        hearts: [],
        clubs: [],
        spades: [],
        diamonds: [],
    };
    this.draw_pile = [];
    this.stack = this.deck.createStacks();
}

solitaire = new Game();
console.log(solitaire.stack);




// create method to draw cards
    // should add shown_card back to draw_pile
    // should splice [0] from
// create method to add card when clicked
    // if it can be added to tableau, add it
    // if it can be added to another card, add it
    // else do nothing
// if card is moved, the card above it should go from false to true and be shown
