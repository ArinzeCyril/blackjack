// variable Declaration
let cards = []
let sum = 0
let isAlive = false
let newPlayer = true
let player = {
  name: null,
  chip: 0,
  price: 0,
  alive: false,
  resart: false
}

// DOM manipulation
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let detailEl = document.querySelector("#detail-el")

const randomCard = () => {
    let random = Math.floor(Math.random()*13)+1
    return random === 1 ? 11 : random > 10 ? 10 : random
}

const getPlayerDetails = () => {
  while (player.name === null || player.name === '') {
    player.name = prompt("Enter your Name")
  }
  while (player.chip < 1) {
    let chip = parseInt(prompt("Enter Game Credit, Must be a number!"))
    chip > 0 ? (player.chip = chip) : (player.chip = 0)
  }
  player.price = player.chip * 2
}

const getSumAndCard = (card) => {
  let value = ''
  sum = 0
    for (let i = 0; i < cards.length; i++) {
      sum += cards[i]
      card && `${value += cards[i]+' '}`
    }
  return value
}

const updateCardsAndSum = () => {
  cardEl.textContent = `Cards: ${getSumAndCard(true)}`
  sumEl.textContent = `Sum: ${sum}`
}

const updateDetailEl = () => {
  detailEl.textContent = `${player.name}: $${player.chip}`
}

function updateMessage(print) {
  print && `${messageEl.textContent = print}`
}

const handleNewPlayer = () => {
  getPlayerDetails()
  player.alive = true
  newPlayer = false
}

const getRandomCard = () => {
  let card = randomCard()
  if (card === 1) {
    card = 11
  }else if (card > 10){
    card = 10
  }
  return card
}

const nextCard = () => {
  sum < 21 && updateMessage('Draw a New Card')
  sum === 21 && `${updateMessage(
      "YAHHH, you got a BlackJack!!!. You've been rewarded with 10 Credit Points")}
    ${(player.chip += 10)}
    ${(isAlive = false)}
    `
  sum > 21 && `${updateMessage("OUCH, you lost this round. Start Game")}
    ${player.chip -= 1}
    ${isAlive = false
    }`
}

const gameStatus = () => {
  if (player.chip === 0) {
    player.resart = true
    updateMessage("GAME OVER")
  }

  if (player.chip >= player.price) {
    updateMessage("YEHHH!!! You Won This Round, Restart Game")
    player.resart = true
  }
}

function startGame() {
  if (player.resart) {
    updateMessage('Restart Game')
    return
  }
  newPlayer && handleNewPlayer()
  if (!isAlive) {
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    updateCardsAndSum()
    sum > 20
      ? nextCard()
      : updateMessage(`Hi ${player.name.toUpperCase()}, Please Draw a New Card`)
    updateDetailEl()
  } else {
    updateMessage("Game is ON, Draw a New Card")
  }
}

function newCard() {
  if (player.alive) {
    isAlive && cards.push(getRandomCard())
    updateCardsAndSum()
    isAlive && nextCard()
    gameStatus()
    updateDetailEl()
  }else{
    updateMessage("You Lost, Restart Game")
  }
}