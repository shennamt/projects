$(() => {
    const canvas = $('#canvas')[0]; // by appending [0], the jQuery object will return the first DOM element. using id selector so there's only 1 element.
    const ctx = canvas.getContext('2d');

    let snake = [
        {x: 50, y: 100, oldX: 0, oldY: 0},
        {x: 51, y: 100, oldX: 0, oldY: 0},
        {x: 52, y: 100, oldX: 0, oldY: 0}
    ];

    let food = {x: 200, y: 200, eaten: false}; // flag variable, where x and y conditions are true until the snake has eaten.

    const tileWidth = 10;  // defining the size of tiles on the canvas
    const tileHeight = 10;
    const tileSize = 10;

    const left = 37; // defining keycode values for arrow keys
    const up = 38;
    const right = 39;
    const down = 40;

    const aLeft = 65; // defining keycode values for leftys
    const wUp = 87;
    const dRight = 68;
    const sDown = 83;

    let keyPressed = down; // Beginning the game with the snake going down
    let score = 0;
    let game;
    

    /// Game Loop ///////////////////////////////////////////////////////////////////////////

    game = setInterval(gameLoop, 200)

    function gameLoop() {
        clearCanvas();
        renderFood();
        moveSnake();
        renderSnake();
    }
    
    /// Moving the snake ///////////////////////////////////////////////////////////////////////////
    
    function moveSnake() {
        $.each(snake, (index, value) => {

            snake[index].oldX = value.x; // assigning the prev tile values to the new ones so that it appears the the snake is moving
            snake[index].oldY = value.y;

            if(index === 0) { // expression to execute for the head AKA first item in array if an arrow key is pressed
                if(keyPressed == down || keyPressed == sDown) {
                    snake[index].y = value.y + tileSize; // increases the y value to go down the length of a tile
                } else if(keyPressed == up || keyPressed == wUp) {
                    snake[index].y = value.y - tileSize; // decreases the y value to go up the length of a tile
                } else if(keyPressed == right || keyPressed == dRight) {
                    snake[index].x = value.x + tileSize; // increases the x value to go up the length of a tile
                } else if(keyPressed == left || keyPressed == aLeft) {
                    snake[index].x = value.x - tileSize; // decreases the x value to go up the length of a tile
                } 
            } else { // expression to execute for other items in the array AKA body
                snake[index].x = snake[index - 1].oldX;
                snake[index].y = snake[index - 1].oldY; 
            };
        });
    };

    /// Render Snake ///////////////////////////////////////////////////////////////////////////

    function renderSnake() {
        $.each(snake, (index, value) => {
            ctx.fillStyle = 'white';
            ctx.fillRect(value.x, value.y, tileWidth, tileHeight); // the snake tiles
            ctx.strokeStyle = 'black';
            ctx.strokeRect(value.x, value.y, tileWidth, tileHeight); // the tile borders
            if(index == 0) {

                if(ouro(value.x, value.y)) {
                    // is the head tile is at any of the body tiles, game over
                    // console.log("Game over.") // testing
                    gameOver();
                };

                if(ateFood(value.x, value.y)) {
                    // if the head is at a food tile, add to score and increase snake length.
                    // console.log("yum!") // testing
                    score++;
                    $('#score').text(score); // using b, so no val. use text instead.
                    increaseSnakeLength();
                    food.eaten = true;
                };
            };
        });
    };
    
    /// Render food ///////////////////////////////////////////////////////////////////////////

    function renderFood() {
        ctx.fillStyle = 'lime';
        ctx.fillRect(food.x, food.y, tileWidth, tileHeight);

        if(food.eaten == true) {
            food = randomPosition();
        };
    };

    function randomPosition() { // randomising food position but making sure it's not in the position of the snake
        let xArr = yArr = [], xy;
        $.each(snake, (index, value) => {
            if($.inArray(value.x, xArr) != -1) { // if the value of x in the xArr is not -1
                xArr.push(value.x);
            };
            if($.inArray(value.y, yArr) == -1) { // if the valye of y in the yArr is not -1
                yArr.push(value.y);
            };
        });
        xy = getEmptyXY(xArr, yArr);
        return xy;
    };

    function getEmptyXY(xArr, yArr) { // generating new x and y positions
        let newX, newY;
        newX = getRandomNumber(canvas.width - 10, 10); // -10 so it wont be positioned out of the canvas
        newY = getRandomNumber(canvas.height - 10, 10);
        if($.inArray(newX, xArr) == -1 && $.inArray(newY, yArr) != -1) { // if the random number generated isnt where the snake body is, then accept it
            return {
                x: newX,
                y: newY,
                eaten: false
            };
        } else {
            return getEmptyXY(xArr, yArr); // run it again to get new food space
        };
    };

    function getRandomNumber(max, multipleOf) { // max is 490, mutliple of 10
        let result = Math.floor(Math.random() * max);
        result = (result % 10 == 0) ? result : result + (multipleOf - result % 10); // if the result is divisible by 10, accept the result, else, let the result plus (-10 - result reminder)
        return result;
    }

    /// Eating //////////////////////////////////////////////////////////////////////////

    function ateFood(x,y) {
        return food.x == x && food.y == y         // check if the snake head is at the same position as the food AKA eating
    };

    function increaseSnakeLength(){
        snake.push({
            x: snake[snake.length -1].oldX, // pushing to back of the arr.
            y: snake[snake.length -1].oldY
        });
    };

    /// clearing canvas with each loop ///////////////////////////////////////////////////////////////////////////

    function clearCanvas() { // repaints the canvas so that it will appear that the array items are moving.
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    /// keydown Event ///////////////////////////////////////////////////////////////////////////

    $(document).keydown((event) => {
        if($.inArray(event.which, [down, up, left, right, sDown, wUp, aLeft, dRight]) != -1) { // AKA indexOf event which, ignore other keydown events
            keyPressed = checkKeyIsAllowed(event.which);
            event.preventDefault(); // stops browser scroll
        }
    });

    /// Avoiding unintentional ouorobos events ///////////////////////////////////////////////////////////////////////////
  
    function checkKeyIsAllowed(tempKey) {
        let key;
        if (tempKey == down) {
            key = (keyPressed != up) ? tempKey : keyPressed;
        } else if (tempKey == up) {
            key = (keyPressed != down) ? tempKey : keyPressed;
        } else if (tempKey == left) {
            key = (keyPressed != right) ? tempKey : keyPressed;
        } else if (tempKey == right) {
            key = (keyPressed != left) ? tempKey : keyPressed;
        } else if (tempKey == sDown) {
            key = (keyPressed != wUp) ? tempKey : keyPressed;
        } else if (tempKey == wUp) {
            key = (keyPressed != sDown) ? tempKey : keyPressed;
        } else if (tempKey == aLeft) {
            key = (keyPressed != dRight) ? tempKey : keyPressed;
        } else if (tempKey == dRight) {
            key = (keyPressed != aLeft) ? tempKey : keyPressed;
        }
        return key;
    };

    /// Game Conditions ///////////////////////////////////////////////////////////////////////////

    function ouro(x,y) { // Game over is snake eats itself
        return snake.filter((value, index) => {
            return index != 0 && value.x == x && value.y == y;
        }).length > 0 || x < 0 || x > canvas.width || y < 0 || y > canvas.height; // it returns an array, so if that array length is greater than 0, then it's the body.
    };

    function displayGameOver() {
        ctx.font = "43px 'Press Start 2P', cursive";
        ctx.fillStyle = 'red';
        ctx.fillText("GAME OVER", 50, 250);
    }

    function displayReset() {
        ctx.font = "17px 'Press Start 2P', cursive";
        ctx.fillStyle = 'limegreen';
        ctx.fillText("Try again?", 160, 340);
    }

    // function resetSnake() { // not so sure how to do this yet
    //     score = 0;
    //     snake = [
    //         {x: 50, y: 100, oldX: 0, oldY: 0},
    //         {x: 51, y: 100, oldX: 0, oldY: 0},
    //         {x: 52, y: 100, oldX: 0, oldY: 0}
    //     ];
    //     let food = {x: 200, y: 200, eaten: false};
    //     gameLoop();
    // }

    function gameOver() {
        clearInterval(game);
        displayGameOver();
        setTimeout(function() {displayReset();}, 2000)
    };
});