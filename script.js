function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const playerDisplay = document.getElementById('player-choice');
  const computerDisplay = document.getElementById('computer-choice');
  const winnerDisplay = document.getElementById('winner');

  // Reset styles
  playerDisplay.className = '';
  computerDisplay.className = '';
  winnerDisplay.className = '';

  playerDisplay.textContent = playerChoice;
  computerDisplay.textContent = computerChoice;

  let winner = '';

  if (playerChoice === computerChoice) {
    winner = "It's a tie! 🤝";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    winner = 'You win! 🎉';
    playerDisplay.classList.add('win-glow');
    winnerDisplay.classList.add('result-animate');
  } else {
    winner = 'Computer wins! 💻';
    computerDisplay.classList.add('lose-glow');
    winnerDisplay.classList.add('result-animate');
  }

  winnerDisplay.textContent = winner;

  // Auto-reset after 5 seconds
  setTimeout(() => {
    playerDisplay.textContent = '-';
    computerDisplay.textContent = '-';
    winnerDisplay.textContent = 'Make your move!';
    playerDisplay.className = '';
    computerDisplay.className = '';
    winnerDisplay.className = '';
  }, 5000);
}