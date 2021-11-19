// Gera uma string RGB aleatória.
function randomColors() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

// Seta as cores iniciais.
const colorPalette = document.querySelectorAll('.color');
function setInitialColor(elementList) {
  for (let i = 1; i < elementList.length; i += 1) {
    const element = elementList;
    element[i].style.background = randomColors();
  }
}

setInitialColor(colorPalette);

// remove todas as divas com classe pixel.
function removePixel() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
}

// Cria as divs pixels.
const pixelBoard = document.querySelector('#pixel-board');
function createPixels(number) {
  let newNumber = null;
  if (number < 5) {
    newNumber = 5;
  } else if (number > 50) {
    newNumber = 50;
  } else {
    newNumber = number;
  }

  for (let i = 1; i <= newNumber * newNumber; i += 1) {
    const pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    pixelBoard.appendChild(pixel);
  }
  pixelBoard.style.gridTemplateColumns = `repeat(${newNumber}, 40px)`;
}

createPixels(5);

// Adiciona evento de seleção de cor e classe selected.
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('color')) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    e.target.classList.add('selected');
  }
});

// Adiciona evento que troca a cor dos pixels ao clicar.
pixelBoard.addEventListener('click', (e) => {
  const selectedElement = document.querySelector('.selected');
  const color = getComputedStyle(selectedElement).background;
  e.target.style.background = color;
});

// função de limpar a tela ao clica no botão limpar
const clearBoard = document.querySelector('#clear-board');
clearBoard.onclick = () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.background = '#FFF';
  }
};

const resizeBtn = document.querySelector('#generate-board');
resizeBtn.addEventListener('click', () => {
  const input = document.querySelector('#board-size');
  if (input.value !== '') {
    removePixel();
    createPixels(input.value);
  } else {
    alert('Board inválido!');
  }
});
