/*EXERCISE 1: Guess the random number 

Create a function guessNumberGame that generates a random number between 1 and 10. 

The function should repeatedly prompt the user to guess the number until the correct number is guessed. 

Use a while loop to keep asking the user for input until they guess correctly.  

Provide feedback if the guess is too high or too low. */

function guessNum() {
  let randomNum = Math.floor(Math.random() * 10) + 1;
  let guessNum = parseInt(prompt("Guess a number between 1 and 10"));
  while (guessNum !== randomNum) {
    if (guessNum > randomNum) {
      guessNum = parseInt(prompt("Too high! Guess again"));
    }
  }
}
