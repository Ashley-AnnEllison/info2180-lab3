document.addEventListener('DOMContentLoaded', () =>{

    //Carries out main functions
    var schild = document.getElementById("board").children;
    var i;
    for(let i = 0; i < schild.length; i++) {
        const squares = schild[i].setAttribute("class", "square");
        highlightSq();
        schild[i].addEventListener('click', function() {
            //console.log('Square' + i + "clicked");
            schild[i].innerHTML = currentPlayer;
            changePlayer();
            //checkCombo();
        });
    }

    //Changes the colour of the square
    function highlightSq() {
        let squares = document.querySelectorAll('.square');
        for(let i =0; i < squares.length; i++) {
            squares[i].addEventListener('mouseover', function(e) {
                e.target.classList.add('hover');
            });
            squares[i].addEventListener('mouseout', function(e) {
                e.target.classList.remove('hover');
            });
        }
    }

    //Stores the letter play
    let currentPlayer = "X";

    //Tracks the plays
    let xo = ["", "", "", "", "", "", "", "", ""];

    //Winning selections
    let winner = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]
    ]

    //Stores the player turn
    var player_one = 1;

    //Switch players
    function changePlayer() {
        if(player_one === 1) {
            currentPlayer = "O";
            player_one = 0;
            console.log("it's o turn");
            displayStatus.innerHTML = playerStatus();
        } else {
            currentPlayer = "X";
            player_one = 1;
            console.log("it's x turn");
            displayStatus.innerHTML = playerStatus();
        } 
    }

    const displayStatus = document.querySelector('#status');
    const playerStatus = () => "It's " + currentPlayer + "'s turn";
    const winnerStatus = () => "Congratulations!" + currentPlayer + " is the Winner!";

    //Checks for winner
    function checkCombo() {
        let roundWon;
        for(let i =0; i < 6; i++) {
            const win = winner[i];
            let x = xo[win[0]];
            let o = xo[win[1]];
            let y = xo[win[2]];
            if(x === o || o === y) {
                roundWon = true;
            } else {
                roundWon = false;
            }
        }

        if(roundWon) {
            alert(displayStatus.innerHTML = winnerStatus())
        }
    }

    //Restarts the game
    function restartGame() {
        document.querySelector('#btn').addEventListener('click', function() {
            currentPlayer = "X";
            xo = ["", "", "", "", "", "", "", "", ""];
            displayStatus.innerHTML = playerStatus();
            document.querySelectorAll('.square').forEach(function(square) {
                square.innerHTML = "";
            });
        });
        restartGame();
    }

});