// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

const gameModeSelect = document.getElementById('game-mode');
const playModeInputs = document.getElementsByName('play-mode');
const choiceInputs = document.getElementsByName('choice');
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const resultsSection = document.getElementById('results-section');
const resultText = document.getElementById('result-text');

let gameMode = gameModeSelect.value;
let playMode = playModeInputs[0].value;

gameModeSelect.addEventListener('change', () => {
  gameMode = gameModeSelect.value;
  updateChoices();
});

for (let input of playModeInputs) {
  input.addEventListener('change', () => {
    playMode = input.value;
  });
}

playButton.addEventListener("click", async () => {
    const choice = playMode === "opponent" ? getSelectedChoice() : undefined;
  
    let url = `http://localhost:8080/app/${gameMode}/`;
    let fetchOptions = {};
  
    if (choice !== undefined) {
      if (gameMode === "rps") {
        url += "/play/";
      } else if (gameMode === "rpsls") {
        url += "/play/";
      }
  
      fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ shot: choice }),
      };
    }
  
    try {
      const response = await fetch(url, fetchOptions);
      const result = await response.json();
  
      if (result === "error") {
        alert("An error occurred. Please try again.");
      } else {
        displayResult(result);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  });

resetButton.addEventListener('click', () => {
  resultText.textContent = '';
  resultsSection.style.display = 'none';
});

function updateChoices() {
  if (gameMode === 'rps') {
    document.getElementById('lizard').style.display = 'none';
    document.querySelector('label[for="lizard"]').style.display = 'none';
    document.getElementById('spock').style.display = 'none';
    document.querySelector('label[for="spock"]').style.display = 'none';
  } else {
    document.getElementById('lizard').style.display = 'inline-block';
    document.querySelector('label[for="lizard"]').style.display = 'inline-block';
    document.getElementById('spock').style.display = 'inline-block';
    document.querySelector('label[for="spock"]').style.display = 'inline-block';
  }
}

function getSelectedChoice() {
  for (let input of choiceInputs) {
    if (input.checked) {
      return input.value;
    }
  }
}

function displayResult(result) {
  resultsSection.style.display = 'block';
  resultText.textContent = `You played: ${result.player.toUpperCase()}. Opponent played: ${result.opponent.toUpperCase()}. Result: ${result.result.toUpperCase()}.`;
}

updateChoices();