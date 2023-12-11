const API_URL = `http://api.codeoverdose.space/api/emoji/v1/find/?query=`;

const cardsWrapper = document.querySelector('.section__cards');
const getData = async (url, query = '') => {
  try {
    const res = await fetch(url + query);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const cards = await getData(API_URL);

const input = document.querySelector('.input');
input.addEventListener('input', async () => {
  const cards = await getData(API_URL, input.value);

  renderCards(cards);
});

const createCard = ({ title, symbol, keywords }) => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `<h3 class = card__icon> ${symbol} </h3>
  <p class = "card__name">${title}</p>
  <p class = "">${keywords}</p>`;
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
