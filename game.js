// ['♣', '♦', '♥', '♠']
function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.show = true;
}


function Deck() {
    var card_rank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    var deck = [];
    for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < card_rank.length; j++) {
            var newcard = new Card(suits[i], card_rank[j]);
            deck.push(newcard);
        }
    }
    this.reset = function(arr) {
        for (var i = 0; i < arr.length; i++) {
            deck.push(arr.pop());
        }
    };
    this.shuffle = function() {
        var m = deck.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = deck[m];
            deck[m] = deck[i];
            deck[i] = t;
        }

        return this.deck;
    };
    this.deal = function() {
        return deck.pop();
    };
    this.showDeck = function() {
        return deck;
    }
    this.createStacks = function() {
        this.shuffle();
        var stack = [[],[],[],[],[],[],[]];
        for (var j = 0; j < 7; j++) {
            for (var k = 0; k <= j; k++) {
                var card = this.deal();
                if (k === j) {
                    card.show = false;
                    stack[j].push(card);
                }
                else {
                    stack[j].push(card);
                }
            }
        }
        return stack;
    };
}


//draw pile

//tableau

//stack


function Game() {
    var _this = this;
    this.deck = new Deck();
    this.tableau = {
        hearts: [],
        clubs: [],
        spades: [],
        diamonds: [],
    };
    this.stack = this.deck.createStacks();
    this.draw_pile = this.deck.showDeck();
}

solitaire = new Game();
console.log(solitaire.stack.length);
console.log("***********");
console.log(solitaire.draw_pile.length);




// create method to draw cards
    // should add shown_card back to draw_pile
    // should splice [0] from
// create method to add card when clicked
    // if it can be added to tableau, add it
    // if it can be added to another card, add it
    // else do nothing
// if card is moved, the card above it should go from false to true and be shown
