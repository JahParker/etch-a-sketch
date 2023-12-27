function updateGridSize() {
  let gridSize = 1; 
  let notValidSize = true;

  if (drawingBoard.hasChildNodes()) {
    while(drawingBoard.firstChild) {
      drawingBoard.removeChild(drawingBoard.firstChild);
    }
  }

  do {
    gridSize = prompt("Enter grid size between 1-100", 100)
    notValidSize = gridSize > 100 || gridSize < 1;
  } while (notValidSize);

  for (let i = 0; i < Math.pow(gridSize, 2); i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.cssText = `flex-basis: ${100 / gridSize}%;`;
    block.addEventListener('mouseover', () => {
      block.classList.add('colored');
    })
    drawingBoard.appendChild(block);
  }
}

function clear() {
  const blocks = drawingBoard.childNodes
  blocks.forEach(block => {
    block.classList.remove('colored');
  });
}

const drawingBoard = document.querySelector('#drawing-board');
const gridSizeButton = document.querySelector('#grid-size')
const clearButton = document.querySelector('#clear');

gridSizeButton.addEventListener('click', updateGridSize);
clearButton.addEventListener('click', clear);