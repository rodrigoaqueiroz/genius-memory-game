let order = [];
let clickedOrder = [];
let score = 0;

// Ordem: 0 - verde; 1 - vermelho; 2 - amarelo; 3 - azul

const blue = document.querySelector('.color-blue');
const yellow = document.querySelector('.color-yellow');
const green = document.querySelector('.color-green');
const red = document.querySelector('.color-red');

const lightColor = (element, number) => {
  number *= 500;
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  });
};

const shuffleOrder = () => {
  const colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (const i in order) {
    const elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  };
};

const checkOrder = () => {
  for (const i in clickedOrder) {
    if (clickedOrder[i] !== order[i]) {
      gameOver();
      break;
    };
  };
  if (clickedOrder.length === order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  };
};

const click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
};

const createColorElement = (color) => {
  if (color === 0) return green;
  if (color === 1) return red;
  if (color === 2) return yellow;
  if (color === 3) return blue;
};

const nextLevel = () => {
  score += 1;
  shuffleOrder();
};

const gameOver = () => {
  alert(`Pontuação: ${score}!\n Você perdeu o jogo!\n Click em "OK" para iniciar um novo jogo`);
  order = [];
  clickedOrder = [];
  playGame();
}

const playGame = () => {
  alert('Bem vindo ao Genius Game! Iniciando um novo jogo!');
  score = 0;
  nextLevel();
};

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
