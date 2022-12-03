$(() => {
    var canvas = $('#canvas')[0];
    var context = canvas.getContext('2d');

    var snake = [
        {x: 50, y:100}
    ];

    const tileWidth = 10;
    const tileHeight = 10;

    //////////////////////////////////////////////////////////////////////////////
    // render snake

    function renderSnake() {
        $.each(snake, function(index, value) {
            context.fillStyle = 'white';
            context.fillRect(value.x, value.y, tileWidth, tileHeight);
            context.strokeStyle = 'black';
            context.strokeRect(value.x, value.y, tileWidth, tileHeight);
        });
    }

    renderSnake();

});
   