//  Value of Players
let one = document.querySelector("#one")
let two = document.querySelector(".two")
let player1Btn = document.querySelector(".player1") 
let player2Btn = document.querySelector(".player2") 
let resetBtn = document.querySelector(".reset")
let select = document.querySelector('select')
// variables
    let player1Score = 0
    let player2Score = 0
    let gameOver = false
    let winningScore = 3;
player1Btn.addEventListener('click', ()=> {
   if (!gameOver) {
    player1Score++
    if(player1Score === winningScore) {
        gameOver = true
        one.style.color = "green" 
        two.style.color = "red" 
    }
    one.textContent =  player1Score
}
})
player2Btn.addEventListener('click', ()=> {
    if(!gameOver){
        player2Score++
   }
    if (player2Score === winningScore) {
        gameOver = true
        two.style.color = "green" 
        one.style.color = "red" 
    }
    two.textContent = player2Score
})
resetBtn.addEventListener('click', reset )
select.addEventListener('change', function(){
    reset()
    winningScore = +(select.value)
} )
function reset(){
    gameOver = false
    player1Score = 0
    player2Score = 0
    one.style.color = "black" 
    two.style.color = "black" 
    one.textContent = player1Score;
    two.textContent = player2Score;
}