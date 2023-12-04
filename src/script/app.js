import { cards } from './data/emoji.js';

const cardsWrapper = document.querySelector('.section__cards');

const filterWords = (str) => {
  return [...new Set(str.split(' '))].join(' ');
};

const input = document.querySelector('.input');
input.addEventListener('input', () => {
  const filteredCards = cards.filter(
    (key) =>
      key.keywords.includes(input.value.toLowerCase().trim()) ||
      key.title.includes(input.value.toLowerCase().trim())
  );
  renderCards(filteredCards);
});

const createCard = ({ title, symbol, keywords }) => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `<h3 class = card__icon> ${symbol} </h3>
  <p class = "card__name">${title}</p>
  <p class = "">${filterWords(keywords)}</p>`;
  return card;
};

const renderCards = (cards) => {
  cardsWrapper.innerHTML = '';
  cards.forEach((icon) => {
    const card = createCard(icon);
    cardsWrapper.append(card);
  });
};

renderCards(cards);

document.getElementById('year').innerHTML = new Date().getFullYear();
