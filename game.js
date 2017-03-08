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


function Game() {
    var _this = this;
    this.deck = new Deck();
    this.tableau = {
        hearts: [],
        clubs: [],
        spades: [],
        diamonds: [],
    };
    this.clicks = [];
    this.clearClicks = function() {
        for (var i = 0; i < this.clicks.length + 1; i++) {
            this.clicks.pop();
            console.log('popping');
        }
    };
    this.stack = this.deck.createStacks();
    this.draw_pile = this.deck.showDeck();
    this.pick_pile = [];
    this.reset = function() {
        var length = this.pick_pile.length;
        for (var i = 0; i < length; i++) {
            this.draw_pile.push(this.pick_pile.pop());
        }
    };
    this.draw = function() {
        if (this.draw_pile.length === 0) {
            this.reset();
        } else {
            this.pick_pile.push(this.draw_pile.pop());
        }
    };
    this.renderStack = function() {
        suits = {
            'clubs': '♣',
            'diamonds': '♦',
            'hearts': '♥',
            'spades': '♠',
        };
        var html_str = '';
        for (var i = 0; i < this.stack.length; i++) {
            html_str += '<ul>';
            for (var j = 0; j < this.stack[i].length; j++) {
                var card = this.stack[i][j];
                html_str += '<li class="' + card.show + '" stacks="' + i + '"><p class="' + card.suit + '">' + suits[card.suit] + ' ' + card.rank + '</p></li>';
            }
            html_str += '</ul>';
        }
        return html_str;
    };
    this.renderTableau = function() {
        var suits = {
            'clubs': '♣',
            'diamonds': '♦',
            'hearts': '♥',
            'spades': '♠',
        };

        var returnT = {};
        for (var key in this.tableau) {
            if (this.tableau[key].length === 0) {
                returnT[key] = '<span class="suit_bg">' + suits[key] + '</span>';
            } else {
                var card = this.tableau[key][this.tableau[key].length - 1];
                returnT[key] = '<div class="card"><p class="' + card.suit + '">' + suits[card.suit] + ' ' + card.rank + '</p></div>';
            }
        }
        return returnT;

    };
    this.renderDrawPile = function() {
        var suits = {
            'clubs': '♣',
            'diamonds': '♦',
            'hearts': '♥',
            'spades': '♠',
        };
        var draw_return = [];
        if (this.draw_pile.length > 0) {
            draw_return.push('draw_pile');
        }
        else {
            draw_return.push('empty_pile');
        }
        if (this.pick_pile.length > 0) {
            var card = this.pick_pile[this.pick_pile.length-1];
            draw_return.push('<div class="card"><p class="' + card.suit + '">' + suits[card.suit] + ' ' + card.rank + '</p></div>');
        }
        else {
            draw_return.push('<div></div>');
        }
        return draw_return;
    };
}
Game.prototype.Draw = function() { //Draw function for the draw_pile and pick_pile
    this.pick_pile.push(this.draw_pile.pop());
    return this;
};

// from input can be tableau, stack, or pick_pile
// goto input can only be tableau or stack
// type will match a string of either "tableau" or "stack"
Game.prototype.Move = function(from, goto) {
    var card = from[from.length - 1];
    var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    var colors = {
        "clubs": "black",
        "spades": "black",
        "hearts": "red",
        "diamonds": "red"
    };
    if (goto == this.tableau) {
        var tab_suit = this.tableau[card.suit];
        // check the card suit to align with tableau suit
        if (tab_suit.length === 0 && card.rank === "A") {
            tab_suit.push(from.pop());
            if (this.stack.indexOf(from) >= 0) {
                from[from.length-1].show = true;
            }
        } else if (tab_suit.length === ranks.indexOf(card.rank)) {
            tab_suit.push(from.pop());
        }
    }


    if (this.stack.indexOf(goto) >= 0) {
        var stack_card = goto[goto.length - 1]; // this is the last card on the stack
        var stack_color = colors[stack_card.suit]; // this is the color of the stack_card
        var card_color = colors[card.suit]; // this is the color of the card you are moving
        if (card_color != stack_color && ranks.indexOf(card.rank) + 1 == ranks.indexOf(stack_card.rank)) {
            goto.push(from.pop());
            return goto;
        }
    }
};


var game = new Game();
game.clicks.push(game.stack[4]);
console.log(game.clicks);
console.log(game.clicks.length);
game.clicks.push(game.tableau);
console.log(game.clicks);
console.log(game.clicks.length);
game.clearClicks();
console.log(game.clicks);
console.log(game.clicks.length);
