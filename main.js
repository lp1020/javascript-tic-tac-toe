
//display all elements on the page
 const Display = function(displayElement) {
  //declaring variable 'display'
  const display = displayElement
  //message area
  function setText(message) {
    display.innerText = message;
  }
//display the message set at setMessage
  return {setMessage: setText};
};
  //function to see if button is
  function isValid(button) {
    return button.innerText.length == 0;
  }

  function checkForWinner(squares, players, currentTurn) {
    //if 1st row is all players[currentTurn] X || O
    if (squares[0].innerText == players[currentTurn] &&
        squares[1].innerText == players[currentTurn] &&
        squares[2].innerText == players[currentTurn])
        return true;

    if (squares[3].innerText == players[currentTurn] &&
        squares[4].innerText == players[currentTurn] &&
        squares[5].innerText == players[currentTurn])
        return true;

    if (squares[6].innerText == players[currentTurn] &&
        squares[7].innerText == players[currentTurn] &&
        squares[8].innerText == players[currentTurn])
        return true;

    if (squares[0].innerText == players[currentTurn] &&
        squares[3].innerText == players[currentTurn] &&
        squares[6].innerText == players[currentTurn])
        return true;

    if (squares[1].innerText == players[currentTurn] &&
        squares[4].innerText == players[currentTurn] &&
        squares[7].innerText == players[currentTurn])
        return true;

    if (squares[2].innerText == players[currentTurn] &&
        squares[5].innerText == players[currentTurn] &&
        squares[8].innerText == players[currentTurn])
        return true;

    if (squares[0].innerText == players[currentTurn] &&
        squares[4].innerText == players[currentTurn] &&
        squares[8].innerText == players[currentTurn])
        return true;

    if (squares[2].innerText == players[currentTurn] &&
        squares[4].innerText == players[currentTurn] &&
        squares[6].innerText == players[currentTurn])
        return true;
  }

function setMark (btn, mark) {
  btn.innerText = mark;
}

function isBoardFull(squares) {
  for (var i = 0; i < squares.length; i++) {
    if (squares[i].innerText.length == 0)
      return false;
  }
    return true;
}

function main () {
  const squares = document.querySelectorAll('#game button');
  const players = ['X', 'O'];
  let currentTurn = 0;
  const isGameOver = false;
  const display = new Display(document.querySelector('#gameActionDisplay'));

display.setMessage('Game is ready. Player ' + players[currentTurn] + ' ' + 'turn.');

  for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', function(){
        if (isGameOver)
          return 'Game Over';
        //todo:
        if (!isValid(this)) {
            display.setMessage('Invalid move!');
        } else {
          setMark(this, players[currentTurn]);



          isGameOver = checkForWinner(squares, players, currentTurn);
            if (isGameOver) {
              display.setMessage('Player ' + players[currentTurn] + ' won!');
              return;
            }
          //game is over someone won)
          //game over, draw
          if (isBoardFull(squares)) {
            display.setMessage('Draw!');
            return;
          }
          //game not over, continue playing

         //Takes two boolean values, if different, returns true
          currentTurn = currentTurn ^ 1;
          display.setMessage('Player ' + players[currentTurn] + ' move.');
        }
      });
  }

}


main();
