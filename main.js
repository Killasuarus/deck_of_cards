$(document).ready(function () {
    $('#startgame').click(function() {
        game = new Game();
        function renderGame() {
            $('#stack').html(game.renderStack());
            var new_tableau = game.renderTableau();
            $('#t_diamonds').html(new_tableau.diamonds);
            $('#t_spades').html(new_tableau.spades);
            $('#t_clubs').html(new_tableau.clubs);
            $('#t_hearts').html(new_tableau.hearts);
            var draw_pile = game.renderDrawPile();
            $('.draw_switch').attr("id", draw_pile[0]);
            $('#pick_pile').html(draw_pile[1]);
        }
        renderGame();
        $('.draw_switch').click(function() {
            game.draw();
            renderGame();
        });
        $('#pick_pile .card').click(function() {
            game.clearClicks();
            game.clicks.push(game.pick_pile);
            $('.code').html(game.clicks);
        });
        $('li:last-child').click(function() {
            var stack_index = $(this).attr("stacks");
            if (game.clicks.length === 1) {
                game.clicks.push(game.stack[stack_index]);
                $('.code').html(game.clicks);
                game.Move(game.clicks[0], game.clicks[1]);
                renderGame();
                game.clearClicks();
            }
            else if (game.clicks.length === 0 || game.clicks.length === 2 ) {
                game.clearClicks();
                game.clicks.push(game.stack[stack_index]);
                $('.code').html(game.clicks);
            }
        });
        $('.tableau_space').click(function() {
            if (game.clicks.length === 1) {
                game.clicks.push(game.tableau);
                $('.code').html(game.clicks);
                game.Move(game.clicks[0], game.clicks[1]);
                renderGame();
                game.clearClicks();
            }
        });
    });
});
