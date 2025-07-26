const GRIDSIZE = 600;
let rows = 16;
let cols = 16;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${GRIDSIZE}px`;
sketchArea.style.height = `${GRIDSIZE}px`;

function changeBackgroundColor() {
    this.style.backgroundColor = "black";
}

function createGridCells() {
    for (let i = 0; i < (rows * cols); i++) {
        const gridCell = document.createElement("div");
        
        gridCell.style.width = `${(GRIDSIZE / cols) - 2}px`;
        gridCell.style.height = `${(GRIDSIZE / rows) - 2}px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", changeBackgroundColor);
    }
}

createGridCells();