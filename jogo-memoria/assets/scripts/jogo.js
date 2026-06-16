const COVER = "./assets/images/cover.png";

const stickers = [
  "./assets/images/alisson.webp",
  "./assets/images/cristiano.webp",
  "./assets/images/endrick.webp",
  "./assets/images/mbape.webp",
  "./assets/images/messi.webp",
  "./assets/images/neymar.webp"
];

const board = document.getElementById("board");

const MovesText = document.getElementById("jogadas");

const pairsText = document.getElementById("pares");

const winText = document.getElementById("winText");

let cards = [];
let moves = 0;
let pairs = 0;
let firstCard = null;
let secondCard = null;
let locked = false;

// duplicar cada figurinha
function createPairs() {
  cards = [];
  stickers.forEach(sticker => {
    cards.push(sticker);
    cards.push(sticker);
  });
}

// embaralha
function shuffle() {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}

// aparecer os card no tabuleiro
function renderCards() {
  board.innerHTML = '';
  cards.forEach((sticker, index) => {
    const card = document.createElement('button');
    card.className = 'card';
    card.dataset.index = index;
    card.dataset.sticker = sticker;
    
    const img = document.createElement('img');
    img.src = COVER;
    img.alt = 'Card';
    card.appendChild(img);
    
    card.addEventListener('click', flipCard);
    board.appendChild(card);
  });
}

// virar as cartinhas
function flipCard(e) {
  if (locked) return;
  
  const card = e.currentTarget;
  if (card.classList.contains('flipped')) return;
  
  card.classList.add('flipped');
  card.querySelector('img').src = card.dataset.sticker;
  
  if (!firstCard) {
    firstCard = card;
  } else {
    secondCard = card;
    locked = true;
    moves++;
    MovesText.textContent = moves;
    
    checkMatch();
  }
}

// verificar
function checkMatch() {
  if (firstCard.dataset.sticker === secondCard.dataset.sticker) {
    pairs++;
    pairsText.textContent = pairs + '/8';
    firstCard = null;
    secondCard = null;
    locked = false;
    
    if (pairs === 8) {
      setTimeout(() => winText.style.display = 'block', 500);
    }
  } else {
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      firstCard.querySelector('img').src = COVER;
      secondCard.classList.remove('flipped');
      secondCard.querySelector('img').src = COVER;
      firstCard = null;
      secondCard = null;
      locked = false;
    }, 800);
  }
}

// inicia o jogo
createPairs();
shuffle();
renderCards();
