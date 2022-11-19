const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let colorIndex = 0;
let intervalId = null;

const trafficLigth = (event) => {
    stopAutomatic();
  turnOn[event.target.id]();
 
};

// Ternário explicando que: Quando a cor for menor que 2, some. Caso contrario, retorne a zero
const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changecolor = () => {
  const cores = ["red", "yellow", "green"];
  const color = cores[colorIndex];
  turnOn[color]();
  nextIndex();
};

const stopAutomatic = () => {
    clearInterval ( intervalId );
}

const turnOn = {
  red: () => (img.src = "./img/vermelho.png"),
  yellow: () => (img.src = "./img/amarelo.png"),
  green: () => (img.src = "./img/verde.png"),
  automatic: () => intervalId = setInterval(changecolor, 1000),
};

buttons.addEventListener("click", trafficLigth);
