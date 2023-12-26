function updateGridSize() {
  let gridSize = 1;
  let notValidSize = true;

  if (drawingBoard.hasChildNodes()) {
    while(drawingBoard.firstChild) {
      drawingBoard.removeChild(drawingBoard.firstChild);
    }
  }

  do {
    gridSize = prompt("Enter grid size between 1-100", 1)
    notValidSize = gridSize > 100 || gridSize < 1;
  } while (notValidSize);

  for (let i = 0; i < Math.pow(gridSize, 2); i++) {
    const block = document.createElement('div');
    block.textContent = 'Block'
    block.classList.add('block');
    drawingBoard.appendChild(block);
  }
}

const drawingBoard = document.querySelector('#drawing-board');
const gridSizeButton = document.querySelector('#grid-size')
const clearButton = document.querySelector('#clear');

gridSizeButton.addEventListener('click', updateGridSize);