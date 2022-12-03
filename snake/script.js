$(() => {
    var canvas = $('#canvas')[0];
    var context = canvas.getContext('2d');

    var snake = [
        {x: 50, y: 100, oldX: 0, oldY: 0},
        {x: 50, y: 90, oldX: 0, oldY: 0},
        {x: 50, y: 80, oldX: 0, oldY: 0}
    ];

    var food = {x: 200, y: 200, eaten: false};

    const tileWidth = 10;
    const tileHeight = 10;
    var tileSize = 10;

    const left = 37; // Arrow key alt codes
    const up = 38;
    const right = 39;
    const down = 40;

    var keyPressed = down; // let's begin the game with the snake going down
    var score = 0;

    //////////////////////////////////////////////////////////////////////////////
    // game loop

    setInterval(gameLoop, 250) //looping every quarter of a second

    function gameLoop() {
        console.log("loop is running"); //testing
        clearCanvas();
        renderFood();
        moveSnake();
        renderSnake();
    }

    //////////////////////////////////////////////////////////////////////////////
    // moving the snake
    
    function moveSnake() {
        $.each(snake, function(index, value) {
            snake[index].oldX = value.x; // making the body move tgt with the snake
            snake[index].oldY = value.y;
            if(index == 0) {
                if(keyPressed == down) {
                    snake[index].y = value.y + tileSize; // increases the y value to go down
                } else if(keyPressed == up) {
                    snake[index].y = value.y - tileSize;
                } else if(keyPressed == right) {
                    snake[index].x = value.x + tileSize;
                } else if(keyPressed == left) {
                    snake[index].x = value.x - tileSize;
                } 
            } else {
                snake[index].x = snake[index - 1].oldX; // for the body to move tgt with the head
                snake[index].y = snake[index - 1].oldY;
            };
        });
    };

    //////////////////////////////////////////////////////////////////////////////
    // render snake

    function renderSnake() {
        $.each(snake, function(index, value) {
            context.fillStyle = 'white';
            context.fillRect(value.x, value.y, tileWidth, tileHeight);
            context.strokeStyle = 'black';
            context.strokeRect(value.x, value.y, tileWidth, tileHeight);
            if(index == 0) {

                if(ouro(value.x, value.y)) {
                    console.log("Game over.")
                };

                if(ateFood(value.x, value.y)) {
                    // console.log("yum!") // testing
                    score++;
                    $('#score').text(score); // using b, so no val. use text instead.

                    increaseSnakeLength();
                };
            };
        });
    };
    
    //////////////////////////////////////////////////////////////////////////////
    // render food

    function renderFood() {
        context.fillStyle = 'lime';
        context.fillRect(food.x, food.y, tileWidth, tileHeight);
    };

    //////////////////////////////////////////////////////////////////////////////
    // eating

    function ateFood(x,y) {
        return food.x == x && food.y == y // check if the snake head is at the same position as the food AKA eating
    };

    function increaseSnakeLength(){
        snake.push({
            x: snake[snake.length -1].oldX, // pushing to back of the arr.
            y: snake[snake.length -1].oldY
        });
    };

    //////////////////////////////////////////////////////////////////////////////
    // clearing the canvas with each loop
    
    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    //////////////////////////////////////////////////////////////////////////////
    // Event listener
    $(document).keydown(function(event) {
        if($.inArray(event.which, [down, up, left, right]) != -1) { // so that only the arrow keys can be pressed. not sure why -1
            keyPressed = checkKeyIsAllowed(event.which);
            // console.log(keyPressed); //testing
        }
    });

    //////////////////////////////////////////////////////////////////////////////
    // not letting the keyPress allow the snake to pedal back unto itself, creating an unwanted ouorobos event
    function checkKeyIsAllowed(tempKey) {
        let key;
        if (tempKey == down) {
            key = (keyPressed != up) ? tempKey : keyPressed; // conditional ternary oprator
        } else if (tempKey == up) {
            key = (keyPressed != down) ? tempKey : keyPressed; // conditional ternary oprator
        } else if (tempKey == left) {
            key = (keyPressed != right) ? tempKey : keyPressed; // conditional ternary oprator
        } else if (tempKey == right) {
            key = (keyPressed != left) ? tempKey : keyPressed; // conditional ternary oprator
        }
        return key;
    };

    //////////////////////////////////////////////////////////////////////////////
    // Game conditions 

    function ouro(x,y) { // game over if snake eats itself
        return snake.filter(function(value, index) {
            return index != 0 && value.x == x && value.y == y; // game over if snake eats itself
        }).length > 0 || x < 0 || x > canvas.width || y < 0 || y > canvas.height; // it returns an array, so if that array length is greater than 0, then it's the body etc.
    };

});