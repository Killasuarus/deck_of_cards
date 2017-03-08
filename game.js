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
                html_str += '<li class="' + card.show + '"><p class="' + card.suit + '">'+ suits[card.suit] +' ' + card.rank + '</p></li>';
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
            console.log(key);
            if (this.tableau[key].length === 0) {
                returnT[key] = 'test';
            }
            else {
                var card = this.tableau[key][this.tableau[key].length-1];
                returnT.key = '<div class="card"><p class="' + card.suit + '">' + card.suit + ' '+ card.rank +'</p></div>';
            }
        }
        return returnT;

    };
    this.renderDrawPile = function() {

    };
}
