/*
- When start game is pressed
-- start a timer, counting up
-- set a flag that the game has started

- When player 1 hits A key
-- move them forward

- When player 2 hits ' key
-- move them forward

- When a player passes finish line
-- stop the timer
-- Declare the winner
-- remove click listeners

*/

const $timer = $('#timer');
const $player1 = $('#player1');
const $player2 = $('#player2');
const $player1Pos = $('#player1-position');
const $player2Pos = $('#player2-position');

let timer = 0;
let gameInPlay = false;
let player1Position = 0;
let player2Position = 0;
let counter;


function renderStats() {
  $timer.text(`Time: ${timer}`);
  $player1Pos.text(`Player1 Position: ${player1Position}`);
  $player2Pos.text(`Player2 Position: ${player2Position}`);
}





function startTimer() {
  counter = setInterval(function () {
    timer++;
    renderStats();
  }, 1000);
}


function endGame(winner) {
  $(window).off('keypress');
  clearInterval(counter);

  $('#anouncements').text(`${winner} wins!`);
  return;
}



$(window).on('keypress', function(event) {

  if (!gameInPlay) {
    return;
  }

  if (event.which === 97) {
    console.log('a key pressed')
    $player1.animate({left: '+=5'}, 5);
    player1Position += 5;
    renderStats();
  }
  
  if (event.which === 59) {
    console.log('; key pressed');
    $player2.animate({left: '+=5'}, 5);
    player2Position += 5;
    renderStats();
  }

  if (player1Position > 1000) {
    gameInPlay = false;
    endGame('player1');
  }
  
  if (player2Position > 1000) {
    gameInPlay = false;
    endGame('player2');
  }
})



$('#start-button').on('click', function() {
  startTimer();
  gameInPlay = true;
});