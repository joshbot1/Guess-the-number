'use strict';

//generating random number
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const logic = function (status) {
  displayMessage(status);
  // score updation
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You have lost the game!');
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#FF0000';
  }
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//click button handling
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === randomNumber) {
    displayMessage('Correct!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > randomNumber) {
    logic('Too high!!!');
  } else if (guess < randomNumber) {
    logic('Too low!!!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
