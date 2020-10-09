document.addEventListener('DOMContentLoaded', () =>{
    var schild = document.getElementById("board").children;
    //var i = 0;
    var i;
    for(let i = 0; i < schild.length; i++) {
        const squares = schild[i].setAttribute("class", "square");
    }

    //while (i < schild.length) {
    //    const squares = document.getElementById("board").classList.add("square");
    //    i++;
    //}
});