Hey there! <br />
This game is clone variation of the ever famous Snake, a video game genre that gained traction after its variant was preloaded on Nokia mobile phones in 1998. 
  
------------------------------------------------------------------------------- <br />
CONTROL <br />
Arrow keys <br />
  
------------------------------------------------------------------------------- <br />
BEGIN <br />
- The play space is a canvas.
- Snake length of one square grid in white will appear in the center, moving continuously to it's right, to the speed of 1/4 of a second. Snake will not change direction unless prompted by user's chosen arrow key. Otherwise, it will turn left upon reaching a border.
- The food, which is one square grid in green, appears randomly.
- Snake length increases as it eats more food.

------------------------------------------------------------------------------- <br />
END <br />
The snake game ends when an ouroboros event occurs. 

------------------------------------------------------------------------------- <br />
METHODS <br />
- setInternal()
- pop()
- push()

------------------------------------------------------------------------------- <br />
IMPORTANT NOTE <br />
This game is not mobile compatible as it requires 2 sets of arrow keys. 

------------------------------------------------------------------------------- <br />
FEATURES (To be added if possible) <br />
- Level Two
When the snake reaches 5 squares in length, a level-up indication will appear, followed by a thick border that reduces the play space from 529(23 by 23) to 441(21 by 21). 

- Level Three
When the snake reaches 11 squares in length, a level-up indication will appear, followed by a thick border that reduces the play space from 441(21 by 21) to 361(19 by 19). 

- Level Four
When the snake reaches 17 squares in length, a level-up indication will appear, followed by a thick border that reduces the play space from 361(19 by 19) to 289(17 by 17). 

- Level Five: if snake reaches 29 squares in length, a level-up indication will appear, followed by a thick border that reduces the play space from 289(17 by 17) tp 225(15 by 15). In this level, extra food will appear every 3 seconds, regardless of whether prev food has been eaten. Leading to an eventual ouroboros event. 

- BONUS: To prevent an ouroboros event in level 5, player can call a friend to help split the snake by activating alt arrows keys (W,A,S,D). The snake will split, and the play space will revert to its original 529 grid size. Levels One to Four will repeat with number continuation, and instead of basing on square length, it will add borders every 11 seconds. The game will end with any ouroboros event from either snake (including ouroboros events where they eat one another). 

This bonus is a tribute to the 1976 two-player arcade game Blockade from Gremlin Industries, the origins of Snake. Except the two players are helping one another out instead of sabotage. 

- Logs: Game ends with a high-score log. Player(s) may key in their names. 

------------------------------------------------------------------------------- <br />

BONUS BONUS: Mobile-friendly option that detects finger swipes and its direction.