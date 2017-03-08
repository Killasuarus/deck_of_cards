$(document).ready(function () {
    $('#startgame').click(function() {
        game = new Game();
        function renderGame() {
            $('#stack').html(game.renderStack());
            var tableau = game.renderTableau();
            $('#t_diamonds').append(tableau.diamonds);
            $('#t_spades').append(tableau.spades);
            $('#t_clubs').append(tableau.clubs);
            $('#t_hearts').append(tableau.hearts);
        }
        // $('#stack').html(game.renderStack());
        renderGame();
        var clicks = [];
        // $('')
    });
});
