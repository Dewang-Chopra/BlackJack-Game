let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
function getrandomCard()
{
    let random = Math.floor(Math.random()*13) + 1
    return random
}
function startgame()
{
    isAlive= true
let firstCard = getrandomCard()
let secondCard = getrandomCard()                                                        
cards = [firstCard, secondCard]
sum = firstCard + secondCard
rendergame()
}
function rendergame()
{
if(sum<=20)
{
    message = "Do you want to draw a new card?"
}
else if(sum === 21)
{
    message = "Wohoo, Blackjack"
}
else{
    message = "Out of the game"
isAlive = false
}
messageEl.textContent = message
sumEl.textContent = "Sum: " + sum
cardsEl.textContent = "Cards: "            // -- -- --
    for(let i=0;i<cards.length;i++)        //        |
{                                          //        |
    cardsEl.textContent +=  cards[i] + " " //"Cards: 10 5 2 " // "Cards: 10 5 10 5 2 "
}
}
function newCard()
{
    if(sum<21)
    {
    let newCard = getrandomCard()
    sum += newCard
    cards.push(newCard)
    rendergame()
    }
}
// let cards = [7, 4, 6]
// for(let i = 0;i<cards.length; i++)
// {
//     console.log(cards[i])
// }
// let sentence = ["Hello", "my", "name", "is", "John"]
// let greetingEl = document.getElementById("greeting-el")
// for(let i=0;i<sentence.length;i++)
// {
//     greetingEl.textContent += sentence[i] + " "
// }
// player1time = 102
// player2time = 107
// function time()
// {
//     return player1time + player2time
// }
// let ttime = time()
// console.log(ttime)
//let randomNumber = Math.random()*6
//console.log(randomNumber)
// Math.random() - 0.001-0.999 0.001*13 = 0.013 0.999*13 = 12.987 0 1 2 3 4 ----12 +1 1 2 3 ---- 13
// Math.random()*6 - 0.006-5.999
// Math.floor() - remove decimals
// let floorednumber = Math.floor(7.999889)
// console.log(floorednumber)
// let random = Math.floor(Math.random()*6)
// console.log(random)
// Gives random number between 0 and 5
// 
