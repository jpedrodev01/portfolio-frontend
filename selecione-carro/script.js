const whiteCar = document.getElementById('white');
const redCar = document.getElementById('red');
const whiteBtn = document.getElementById('branco');
const redBtn = document.getElementById('vermelho');
const result = document.getElementById('result');
const body = document.body;
const textElements = document.querySelectorAll('body, h1, p, #result'); // textos para trocar cor

function selectCar(color) {
    result.textContent = color;

    if (color === 'Branco') {
        body.style.backgroundColor = 'white';
        textElements.forEach(el => el.style.color = 'black');
    } else {
        body.style.backgroundColor = '#4b0000';
        textElements.forEach(el => el.style.color = 'white');
    }
}

// Clique nos carros
whiteCar.addEventListener('click', () => selectCar('Branco'));
redCar.addEventListener('click', () => selectCar('Vermelho'));

// Clique nos botões do rodapé
whiteBtn.addEventListener('click', () => selectCar('Branco'));
redBtn.addEventListener('click', () => selectCar('Vermelho'));
