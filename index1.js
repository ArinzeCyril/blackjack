// variable Declaration
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let newPlayer = true
let message = ""
let auth = false
let start = true
let player = {
  name: null,
  chip: 0,
  alive: true,
}

// DOM manipulation
let messageEl = document.querySelector("#message-el")
let startBtn = document.querySelector("#start-btn")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let detailEl = document.querySelector("#detail-el")

// return a random number between 1 and 11 to serve as cards
function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1

 const random_ = random === 1
    ? 11
    : random > 10
    ? 10
    : random

    return random_
}

// function runs when start game button is clicked
function startGame() {
    ///////////////////
    if (start) {
        if (!isAlive) {
            isAlive = true
            let firstCard = getRandomCard()
            let secndCard = getRandomCard()
            cards = [firstCard, secndCard]
            sum = firstCard + secndCard

            renderGame()
///////////////////
            if (cards.length < 3) {
            chipReward()
            }

            // get player details if player is new or continue with prev player
            newPlayer
            ? getGameDetails()
            : detailEl.textContent = `${player.name}: $${player.chip}`
            newPlayer = false
        } else {
            messageEl.textContent = "Game is ON, Play a New Card"
        }
    }
    authChech()
}

// control for the player details; name and chip
function getGameDetails() {
  player.name = prompt(`Enter your Name`)
  let chip = parseInt(prompt(`Enter your game credit. Must be a number`))
  chip > 1 ? `${player.chip = chip}` : ``
  detailEl.textContent = `${player.name}: $${player.chip}`
}

// this function control the view display for message, cards and sum
function renderGame() {
  // cards display control
  cardEl.textContent = `Cards: `
  sumEl.textContent = 'Sum: '

  for (let i = 0; i < cards.length; i++) {
    auth && ` ${cardEl.textContent += cards[i] + ' ' }`
    console.log(cards)
  }

  // sum display control for firstcard and secondcard only
  // sum of all cards including new card is controled by newCard()
    auth && `${sumEl.textContent += sum}`

  // message display control, hasBlacJack & isAlive control
  if (auth) {
    if (sum > 0 && sum < 21) {
      message = "Do you want to draw a new card?"
      hasBlackJack = false
    } else if (sum === 21) {
      message = `
        YAHHH, you got a Black Jack!!!. You've been rewarded with 10 chips
        `
      chipReward()
      isAlive = false
      hasBlackJack = true
    } else if (sum > 21) {
      message = `OUCH, you're out of the game`
      chipPenalty()
      hasBlackJack = false
      isAlive = false
    }
    console.log(sum)
    
  }

  messageEl.textContent = message
}

// this function controls the new card button
function newCard() {


  if (isAlive && !hasBlackJack) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    authChech()
    renderGame()
    authEr()
    if (auth && player.chip <= 0) {
      const gameOver = "GAME OVER"
      player.alive = false
      detailEl.textContent = `${player.name}: ${gameOver}`
      messageEl.textContent = "You lost this round, Restart Game"
      return
    }
  }

  auth && !isAlive && !hasBlackJack ? `${messageEl.textContent = 'You lost this round, Start Game'}` : ``
}

function chipReward() {
  auth && hasBlackJack
    ? `${(player.chip += 11)}`
    : ``
}
function chipPenalty() {
    auth && !isAlive
      ? `${(player.chip -= 1)}`
    : ``
}

const authChech = () => {
 player.name === null || player.chip < 1 ? `${auth = false} ${start = false}` : auth = true
}

const authEr = () => {
    !auth ? `${messageEl.textContent =
        "Restart Game by Reloading Page, chose a Name and Game Credit to Start"}`
    :``
}
