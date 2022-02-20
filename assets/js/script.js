let order = [];
let clickOrder = [];
let score = 0;

// Ordem: 0 - verde; 1 - vermelho; 2 - amarelo; 3 - azul

const blue = document.querySelector('.color-blue')
const yellow = document.querySelector('.color-yellow')
const green = document.querySelector('.color-green')
const red = document.querySelector('.color-red')

const lightColor = (element, number) => {
  number *= 500;
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected')
  });
};

const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];
  
  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }; 
};

const checkOrder = () => {
  for (let i in clickedOrder) {
     if (clickedOrder[i] !== order[i]) {
       lose() 
       break;
     }
  }
  if (clickOrder.length === order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`)
    nextLevel()
  };
};
