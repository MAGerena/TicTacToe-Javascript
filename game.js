const board = document.querySelector("#board");
const infoPanel = document.querySelector("#info")
const startTiles =  ["","","",
                "","","",
                "","",""];
let turn = 0;

initBoard();

function initBoard() {
    startTiles.forEach((Element, index) => {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        board.append(tile);
        tile.id = index;
        tile.addEventListener("click", insertToken);
    })
}

function insertToken(e) {
    if (turn) {
        e.target.innerHTML = "X";
        e.target.dataset.turn = "x";
        turn = 0;
    } else {
        e.target.innerHTML = "O";
        e.target.dataset.turn = "o";
        turn = 1;
    }
    e.target.removeEventListener("click", insertToken);
    checkWinner();
}

function checkWinner() {
    const tiles = document.querySelectorAll(".tile");
    const winningCombinations = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    winningCombinations.forEach(array => {
        const circleWins = array.every(tile => 
            tiles[tile].innerHTML === "O"
        )
        if(circleWins) {
            infoPanel.innerHTML = "circles wins";
            for (let index = 0; index < tiles.length; index++) {
                tiles[index].removeEventListener("click", insertToken);
            }
        }
    })

    winningCombinations.forEach(array => {
        const crossWins = array.every(tile => 
            tiles[tile].innerHTML === "X"
        )
        if(crossWins) {
            infoPanel.innerHTML = "Cross wins";
            for (let index = 0; index < tiles.length; index++) {
                tiles[index].removeEventListener("click", insertToken);
            }
        }
    })

}
