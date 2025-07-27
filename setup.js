const GRIDSIZE = 600;
let squaresPerSide = 16;

const sketchArea = document.querySelector("#sketch-area");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;
sketchArea.style.width = sketchArea.style.height = `${GRIDSIZE}px`;

function changeBackgroundColor() {
    this.style.backgroundColor = "black";
}

function createGridCells(squaresPerSide) {
    const numberOfSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight = `${(GRIDSIZE / squaresPerSide) - 2}px`;

    for (let i = 0; i < (numberOfSquares); i++) {
        const gridCell = document.createElement("div");
        
        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", changeBackgroundColor);
    }
}

function removeGridCells() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

slider.oninput = function () {
    let txt = `${this.value} x ${this.value} (Resolution)`;
    sliderValue.innerHTML = txt;
    removeGridCells();
    createGridCells(this.value);
}

createGridCells(squaresPerSide);