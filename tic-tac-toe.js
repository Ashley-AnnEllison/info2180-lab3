document.addEventListener('DOMContentLoaded', () =>{
    var schild = document.getElementById("board").children;

    var i;
    for(let i = 0; i < schild.length; i++) {
        const squares = schild[i].setAttribute("class", "square");
        schild[i].addEventListener('click', function() {
            //console.log('Square' + i + "clicked");
            schild[i].innerHTML = currentPlayer;
            changePlayer();
        });
    }

    //Stores the letter play
    let currentPlayer = "X";

    const statusDisplay = document.querySelector('#status');

    statusDisplay.innerHTML = currentPlayerTurn();

    //Tracks the plays
    let xo = ["", "", "", "", "", "", "", "", ""];

    //Stores the player turn
    var player_one = 1;

    //Switch players
    function changePlayer() {
        if(player_one === 1) {
            currentPlayer = "X";
            player_one = 0;
        } else {
            currentPlayer = "O";
            player_one = 1;
        }
        
    }
});