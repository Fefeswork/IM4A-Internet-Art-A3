let currTreasureTile;
let currPirateTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setTreasure, 1000); // 1000 miliseconds = 1 second, every 1 second call setMole
    setInterval(setPirate, 2000); // 2000 miliseconds = 2 seconds, every 2 second call setPlant
}

function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setTreasure() {
    if (gameOver) {
        return;
    }
    if (currTreasureTile) {
        currTreasureTile.innerHTML = "";
    }
    let treasure = document.createElement("img");
    treasure.src = "./monty-mole.png";

    let num = getRandomTile();
    if (currPirateTile && currPirateTile.id == num) {
        return;
    }
    currTreasureTile = document.getElementById(num);
    currTreausreTile.appendChild(treasure);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPirateTile) {
        currPirateTile.innerHTML = "";
    }
    let pirate = document.createElement("img");
    pirate.src = "./piranha-plant.png";

    let num = getRandomTile();
    if (currTreasureTile && currTreasureTile.id == num) {
        return;
    }
    currPirateTile = document.getElementById(num);
    currPirateTile.appendChild(pirate);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currTreasureTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currPirateTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}