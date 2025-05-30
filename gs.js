let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;

function makeGuess() {
    if (gameOver) return;

    const input = document.getElementById('guessInput');
    const result = document.getElementById('result');
    const attemptsDisplay = document.getElementById('attempts');
    const guess = parseInt(input.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = "❌ Please enter a valid number between 1 and 100.";
        result.style.color = 'red';
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        result.textContent = `🎉 Correct! You guessed the number: ${randomNumber}`;
        result.style.color = 'green';
        gameOver = true;
    } else if (guess < randomNumber) {
        result.textContent = "📉 Too low! Try again.";
        result.style.color = 'orange';
    } else {
        result.textContent = "📈 Too high! Try again.";
        result.style.color = 'orange';
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    if (attempts >= 10 && !gameOver) {
        result.textContent = `😢 Game Over! The correct number was ${randomNumber}.`;
        result.style.color = 'red';
        gameOver = true;
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;

    document.getElementById('guessInput').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('result').style.color = '';
    document.getElementById('attempts').textContent = '';
}
