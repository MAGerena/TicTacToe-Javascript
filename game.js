const board = document.querySelector("#board");
const tiles =  ["","","",
                "","","",
                "","",""];
let turn = 0;

initBoard();

function initBoard() {
    tiles.forEach((Element, index) => {
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
}