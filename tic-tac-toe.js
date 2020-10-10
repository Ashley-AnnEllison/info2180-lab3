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
        });
    }

    //Changes the colour of the square
    function highlightSq() {
        let squares = document.querySelectorAll('.square');
        squares.forEach(function(highlight) {
        highlight.addEventListener('mouseover', function(e) {
            e.target.classList.add('hover');
        });
        highlight.addEventListener('mouseout', function(e) {
            e.target.classList.remove('hover');
        });
    });
    }

    //Stores the letter play
    let currentPlayer = "X";

    //Tracks the plays
    let xo = ["", "", "", "", "", "", "", "", ""];

    //Stores the player turn
    var player_one = 1;

    //Switch players
    function changePlayer() {
        if(player_one === 1) {
            currentPlayer = "O";
            player_one = 0;
        } else {
            currentPlayer = "X";
            player_one = 1;
        } 
    }
});