let player = {
name : "deba" ,
chips : 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")
console.log(cards)
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    firstCard = anyNum()
    secondCard = anyNum()
    cards = [firstCard , secondCard]
    sum += firstCard + secondCard

    renderGame()
}
function anyNum() {
let randomNumber = Math.floor(Math.random()* 12 + 1)
return randomNumber
}
function renderGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    cardsEl.textContent = "cards : " 
    for( let i = 0 ; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + " "

    }  
    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
 function newCard() {
    if (isAlive === true && hasBlackJack === false){
      let card = anyNum()
    sum += card
   cards.push(card)
   renderGame()
    }

}
