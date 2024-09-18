# Guessing_Game

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function makeGuess() {
    let userGuess = document.getElementById('guessInput').value;
    attempts++;
    let result = document.getElementById('result');
    let attemptsDisplay = document.getElementById('attempts');

    if (userGuess == randomNumber) {
        result.textContent = 'Congratulations! You guessed the right number.';
        attemptsDisplay.textContent = `It took you ${attempts} attempts.`;
    } else if (userGuess < randomNumber) {
        result.textContent = 'Too low! Try again.';
    } else {
        result.textContent = 'Too high! Try again.';
    }
}
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function makeGuess() {
    let userGuess = document.getElementById('guessInput').value;
    attempts++;
    let result = document.getElementById('result');
    let attemptsDisplay = document.getElementById('attempts');

    if (userGuess == randomNumber) {
        result.textContent = 'Congratulations! You guessed the right number.';
        attemptsDisplay.textContent = `It took you ${attempts} attempts.`;
    } else if (userGuess < randomNumber) {
        result.textContent = 'Too low! Try again.';
    } else {
        result.textContent = 'Too high! Try again.';
    }
}
