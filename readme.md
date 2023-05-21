# SSSNake
This game is clone variation of the ever famous [Snake](https://en.wikipedia.org/wiki/Snake_(video_game_genre) "Snake Wiki"), a video game genre that gained traction after its variant was preloaded on Nokia mobile phones in 1998.

![STML Snake GIF](https://media1.giphy.com/media/jAqreL9Cu89mbL9Zfw/giphy.gif?cid=790b7611b6f84984879e90af2fd01d38f3f107b839662a20&rid=giphy.gif&ct=g)

Play it here: https://shennamt.github.io/snake/
  
## Goals & Motivations
The main driver of my decision to code Snake was nostalgia; I have fond memories of changing my translucent Nokia Phone's cover design, and all the fun games that came with it.

Beyond that, I wanted to explore and improve my understanding of DOM manipulation.
  
## Build Status
- The play space is a canvas.
- The snake, 3 white blocks, will appear, moving down, to the speed of 1/5 of a second.
- Snake will not change direction unless prompted by user's chosen arrow key. Otherwise, it will reach a boder and end the game.
- The food, which is one square grid in green, appears randomly within the canvas.
- Snake length increases as it eats more food.
- The snake game ends when an ouroboros event occurs, or when the snake collides with a border.
- The game will auto-reset after it ends.

## Features
This game accepts WASD keys for left-handers, and will collapse into a single column on smaller screens. 

## TODOs
The game is not playable on phones/ devices that don't have arrow keys (yet).

## Technologies
- HTML, CSS, Javascript
- HTML Canvas for the main game space
- JQuery
