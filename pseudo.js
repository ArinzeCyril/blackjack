// variable Declaration
let cards = [] //list of cards
let sum = 0 //sum of cards
let hasBlackJack = false //jackport?
let isAlive = false //check if game has started
let newPlayer = true //check if a player is currently playing
let message = "" //displayed above cards
let auth = false //if user provided a name and chip
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
let detailEl = document.querySelector("#detail-el") //display player name and chip

//Functions
function getRandomCard() {
  //generate a random number between 1 and 13
  //return 11 if random is 1 or 10 if random number is > 10
}

function startGame() {
  //runs when start btn is clicked
  /*
    check if the user is {auth}
      if game {!isAlive}
        if so, change it to true
        create two variables and assign {getRandomCard}
        update cards array with the two variables above
        update sum by adding the value of the two variales
        call {renderGame}
          if {newplayer}, call {getplayerdetails}
          else update detailEl with {player name & player chip}
        change {newPlayer} to false
      else print Game is ON, Play a New Card to {messageEl}
  */
}

// control for the player details; name and chip
function getGameDetails() {}

// this function control the view display for message, cards and sum
function renderGame() {}

// this function controls the new card button
function newCard() {}

function chipReward() {}
function chipPenalty() {}

const authChech = () => {}

const authEr = () => {}

/*
on start,
  if game is on and player.!alive
    return
  while a player detail is ! registereded
    get player detail
    change player.alive to true
  if game is ! on
    chage game mode to on
    generate 2 random cards
    push to cards[]
    get sum of the cards
    link all dom elemnts
    display player detail to detailEl

  else
    print game is on, play new card (messageEl)

on new card
  if player.alive
    get a random card
    if random card is 1
      change value to 11
    elif its > 10
      change value to 10
    else
      use random value
    push random card to cards[]
    get sum of the card
    if card is < 21
      prin draw new card
    if card is 21
      print you hit jackpot
      update chip by 10
      change game on to false
      {hasBlackjack is true}////
    if card > 21
      print you lost this round, start new game
      change game on to false
      update chip by -1
    if chip is 0
      player.alive to false
      print game over
  else
    Print you lost, reload page to start new game
  update player details
*/