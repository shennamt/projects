$(() => {
    const canvas = $('#canvas')[0];
    // by appending [0], the jQuery obkec will return the first DOM element. using id selector so there's only 1 element.
    // jQuery methods often use CSS methods to match elements to match elements from doc.
    const ctx = canvas.getContext('2d');

    let snake = [
        {x: 50, y: 100, oldX: 0, oldY: 0},
        {x: 51, y: 100, oldX: 0, oldY: 0},
        {x: 52, y: 100, oldX: 0, oldY: 0} //before and after it "eats"
    ];

    let food = {x: 200, y: 200, eaten: false};
    // flag variable, where x and y conditions are true until the snake has eaten.
    // this controls the flow of the "eat" function

    const tileWidth = 10;
    const tileHeight = 10;
    const tileSize = 10;
    // defining the size of a tile on the canvas

    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;
    // defining keycode values

    let keyPressed = down; // let's begin the game with the snake going down
    let score = 0;
    let game; // not assigning a value here so i can put categorise the logic below
    

    /// Game Loop ///////////////////////////////////////////////////////////////////////////

    game = setInterval(gameLoop, 200) //looping every fifth of a second

    function gameLoop() {
        console.log("loop is running"); //testing
        clearCanvas();
        renderFood();
        moveSnake();
        renderSnake();
    }
    
    /// Moving the snake ///////////////////////////////////////////////////////////////////////////
    
    function moveSnake() {
        //iterating over an obeject and executing a function for each matched element AKA forEach()
        $.each(snake, (index, value) => {

            snake[index].oldX = value.x; // making the body move tgt with the snake
            snake[index].oldY = value.y;

            if(index === 0) {
                if(keyPressed === down) {
                    snake[index].y = value.y + tileSize; // increases the y value to go down
                } else if(keyPressed === up) {
                    snake[index].y = value.y - tileSize;
                } else if(keyPressed === right) {
                    snake[index].x = value.x + tileSize;
                } else if(keyPressed === left) {
                    snake[index].x = value.x - tileSize;
                } 
            } else {
                snake[index].x = snake[index - 1].oldX; // for the body to move tgt with the head
                snake[index].y = snake[index - 1].oldY;
            };
        });
    };

    /// Render Snake ///////////////////////////////////////////////////////////////////////////

    function renderSnake() {
        $.each(snake, (index, value) => {
            ctx.fillStyle = 'white';
            ctx.fillRect(value.x, value.y, tileWidth, tileHeight);
            ctx.strokeStyle = 'black';
            ctx.strokeRect(value.x, value.y, tileWidth, tileHeight);
            if(index == 0) {

                if(ouro(value.x, value.y)) {
                    // console.log("Game over.") // testing
                    gameOver();
                };

                if(ateFood(value.x, value.y)) {
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

    function randomPosition() {
        let xArr = yArr = [], xy;
        $.each(snake, (index, value) => {
            if($.inArray(value.x, xArr) != -1) {
                xArr.push(value.x);
            };
            if($.inArray(value.y, yArr) == -1) {
                yArr.push(value.y);
            };
        });
        xy = getEmptyXY(xArr, yArr);
        return xy;
    };

    function getEmptyXY(xArr, yArr) {
        let newX, newY;
        newX = getRandomNumber(canvas.width - 10, 10); //give chance dont put so close to the edge
        newY = getRandomNumber(canvas.height - 10, 10);
        if($.inArray(newX, xArr) == -1 && $.inArray(newY, yArr) != -1) {
            // if the random number generated isnt where the snake body is, then accept it
            return {
                x: newX,
                y: newY,
                eaten: false
            };
        } else {
            return getEmptyXY(xArr, yArr); // run it again to get new food space
        };
    };

    function getRandomNumber(max, multipleOf) { // max is 590, mutliple of 10
        let result = Math.floor(Math.random() * max);
        result = (result % 10 == 0) ? result : result + (multipleOf - result % 10);
        return result;
    }

    /// Eating //////////////////////////////////////////////////////////////////////////

    function ateFood(x,y) {
        return food.x == x && food.y == y
        // check if the snake head is at the same position as the food AKA eating
    };

    function increaseSnakeLength(){
        snake.push({
            x: snake[snake.length -1].oldX, // pushing to back of the arr.
            y: snake[snake.length -1].oldY
        });
    };

    /// clearing canvas with each loop ///////////////////////////////////////////////////////////////////////////
    
    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    /// Event Listener ///////////////////////////////////////////////////////////////////////////
 
    $(document).keydown(function(event) {
        if($.inArray(event.which, [down, up, left, right]) != -1) { // so that only the arrow keys can be pressed. not sure why -1
            keyPressed = checkKeyIsAllowed(event.which);
            // console.log(keyPressed); //testing
        }
    });

    /// Avoiding unintentional ouorobos events ///////////////////////////////////////////////////////////////////////////
  
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

    /// Game Conditions ///////////////////////////////////////////////////////////////////////////

    function ouro(x,y) { // game over if snake eats itself
        return snake.filter((value, index) => {
            return index != 0 && value.x == x && value.y == y; // game over if snake eats itself
        }).length > 0 || x < 0 || x > canvas.width || y < 0 || y > canvas.height; // it returns an array, so if that array length is greater than 0, then it's the body etc.
    };

    function displayGameOver() {
        ctx.font = "43px 'Press Start 2P', cursive";
        ctx.fillStyle = 'red';
        ctx.fillText("GAME OVER", 50, 265);
    }

    function resetSnake() {
        score = 0;
        snake = [
            {x: 50, y: 100, oldX: 0, oldY: 0},
            {x: 51, y: 100, oldX: 0, oldY: 0},
            {x: 52, y: 100, oldX: 0, oldY: 0}
        ];
        let food = {x: 200, y: 200, eaten: false};
        gameLoop();
    }

    function gameOver() {
        clearInterval(game);
        displayGameOver();
    };
});