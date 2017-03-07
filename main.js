$(document).ready(function () {
    $('#startgame').click(function() {
        game = new Game();
        $('#stack').html('<p>' + game.stack + '</p>');
    });
});
