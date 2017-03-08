// ['♣', '♦', '♥', '♠']
function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.show = false;
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
    };
    this.createStacks = function() {
        this.shuffle();
        var stack = [[],[],[],[],[],[],[]];
        for (var j = 0; j < 7; j++) {
            for (var k = 0; k <= j; k++) {
                var card = this.deal();
                if (k === j) {
                    card.show = true;
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
