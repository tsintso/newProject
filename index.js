function togglePlayButtons() {
  const buttonsCont = document.getElementById('buttonsCont');
  buttonsCont.classList.toggle('hidden')
}

function startGame() {
  const startGameButton = document.getElementById('startGame');
  startGameButton.classList.add('hidden');
  togglePlayButtons()
}

function getWinner(computerDicision, playerDicision) {
  const tie = "ფრეა 🫱🏻‍🫲🏽";
  const playerWon = "შენ მოიგე 🎊";
  const computerWon = "კომპიუტერმა მოიგო 💻";
  if (computerDicision == playerDicision) {
    return tie;
  }
  switch(computerDicision) {
    case 0:
      if (playerDicision == 3, 2) {
        return computerWon;
      } 
      return playerWon
    case 1:
      if (playerDicision == 0, 4) {
        return playerWon;
      } 
      return computerWon
    case 2:
      if (playerDicision == 1, 3) {
        return computerWon;
      } 
      return playerWon
    case 3:
      if (playerDicision == 4, 1) {
        return computerWon;
      } 
      return playerWon
    case 4:
      if (playerDicision == 2, 0) {
        return computerWon;
      } 
      return playerWon
    default:
      console.warn("რაღაცა ნიტოა, მასეთი მნიშვნელობა აქ არ უნდა მოსულიყო");
  }
}

function addH2InContainer(innerText) {
  const container = document.getElementById('container')
  const myH2 = document.createElement('h2');
  myH2.innerText = innerText;
  container.appendChild(myH2);
}

function makeChoice(playerChoice) {
  const emojies = ["✊", "✌️", "✋", "🦎", "🖖"]
  const computerChoice = Math.round(Math.random()*2);
  const result = `კომპიუტერის არჩევანი არის ${emojies[computerChoice]} \n შენი არჩევანი არის ${emojies[playerChoice]}`
  addH2InContainer(result);
  togglePlayButtons();
  const winner = getWinner(computerChoice, playerChoice);
  addH2InContainer(winner);
  const startAgainBtn = document.getElementById('startAgain');
  startAgainBtn.classList.remove('hidden')
}

function removeH2(h2){
  h2.remove()
}

function playAgain() {
  togglePlayButtons();
  const container = document.getElementById('container')
  const h2Elements = container.querySelectorAll('h2');
  h2Elements.forEach(removeH2)
}