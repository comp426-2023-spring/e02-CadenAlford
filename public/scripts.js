// If you would like to see some examples of similar code to make an interface interact with an API,
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

const gameModeSelect = document.getElementById("game-mode");
const playModeInputs = document.getElementsByName("play-mode");
const choiceInputs = document.getElementsByName("choice");
const playButton = document.getElementById("play-button");
const resetButton = document.getElementById("reset-button");
const resultsSection = document.getElementById("results-section");
const resultText = document.getElementById("result-text");

let gameMode = gameModeSelect.value;
let playMode = playModeInputs[0].value;

gameModeSelect.addEventListener("change", () => {
  gameMode = gameModeSelect.value;
  updateChoices();
});

for (let input of playModeInputs) {
  input.addEventListener("change", () => {
    if (input.value === "random") {
      document.getElementById("choices-section").style.display = "none";
    } else {
      document.getElementById("choices-section").style.display = "inline-block";
    }

    playMode = input.value;
  });
}

playButton.addEventListener("click", async () => {
  const choice = getSelectedChoice();
  const playMode = getSelectedPlayMode();

  let url = `http://localhost:8080/app/${gameMode}/`;

  console.log(choice, playMode, url);

  if (playMode === "opponent") {
    url += `play/${choice}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    displayResult(data);
  } catch (error) {
    alert("An error occurred. Please try again.");
  }

  //hide everything & show reset
  document.getElementById("game-mode-section").style.display = "none";
  document.getElementById("play-mode-section").style.display = "none";
  document.getElementById("choices-section").style.display = "none";
  document.getElementById("play-button").style.display = "none";
  document.getElementById("reset-button").style.display = "inline-block";
});

resetButton.addEventListener("click", () => {
  resultText.textContent = "";
  resultsSection.style.display = "none";

  //show everything & hide reset
  document.getElementById("game-mode-section").style.display = "block";
  document.getElementById("play-mode-section").style.display = "block";

  if (playMode === "opponent") {
    document.getElementById("choices-section").style.display = "block";
  }

  document.getElementById("play-button").style.display = "inline-block";
  document.getElementById("reset-button").style.display = "none";
});

function updateChoices() {
  if (gameMode === "rps") {
    document.getElementById("lizard").style.display = "none";
    document.querySelector('label[for="lizard"]').style.display = "none";
    document.getElementById("spock").style.display = "none";
    document.querySelector('label[for="spock"]').style.display = "none";
  } else {
    document.getElementById("lizard").style.display = "inline-block";
    document.querySelector('label[for="lizard"]').style.display =
      "inline-block";
    document.getElementById("spock").style.display = "inline-block";
    document.querySelector('label[for="spock"]').style.display = "inline-block";
  }

  document.getElementById("rock").checked = true;
}

function getSelectedChoice() {
  for (let input of choiceInputs) {
    if (input.checked) {
      return input.value;
    }
  }
}

function getSelectedPlayMode() {
  for (let input of playModeInputs) {
    if (input.checked) {
      return input.value;
    }
  }
}

function displayResult(result) {
  resultsSection.style.display = "block";

  if (playMode === "opponent") {
    resultText.textContent = `You played: ${result.player.toUpperCase()}. Opponent played: ${result.opponent.toUpperCase()}. Result: ${result.result.toUpperCase()}.`;
  } else {
    resultText.textContent = `Random draw: ${result.player.toUpperCase()}.`;
  }
}

updateChoices();