
const cardFaces = [
    'assets/img/carta-as.png',
    'assets/img/carta-dois.png',
    'assets/img/carta-cinco.png'  
  ];

  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  let matchedPairs = 0;

  function startGame() {
    const gameBoard = document.getElementById('gameBoard');
    const message = document.getElementById('message');
    message.textContent = '';
    gameBoard.innerHTML = '';
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    matchedPairs = 0;

    const cardsArray = [...cardFaces, ...cardFaces];
    shuffle(cardsArray);

    cardsArray.forEach(face => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <div class="card-inner" data-face="${face}">
          <div class="card-front">
            <img src="${face}" alt="Carta" />
          </div>
          <div class="card-back"></div>
        </div>
      `;

      card.addEventListener('click', () => handleCardClick(card));
      gameBoard.appendChild(card);
    });
  }

  function shuffle(array) {
    for (let i = array.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i +1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function handleCardClick(card) {
    if (lockBoard) return;
    if (card.classList.contains('flipped')) return;

    card.classList.add('flipped');

    if (!firstCard) {
      firstCard = card.querySelector('.card-inner');
    } else {
      secondCard = card.querySelector('.card-inner');
      lockBoard = true;

      if (firstCard.dataset.face === secondCard.dataset.face) {
        matchedPairs++;
        resetTurn();

        if (matchedPairs === cardFaces.length) {
          document.getElementById('message').textContent = 'PARABÉNS! Você encontrou todos os pares!';
        }
      } else {
        setTimeout(() => {
          firstCard.parentElement.classList.remove('flipped');
          secondCard.parentElement.classList.remove('flipped');
          resetTurn();
        }, 1000);
      }
    }
  }

  function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
  }

  startGame();
