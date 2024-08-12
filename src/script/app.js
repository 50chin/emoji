// const API_URL = `http://api.codeoverdose.space/api/emoji/v1/find/?query=`;

import { data } from './emoji.js';
// console.log(data);

const cardsWrapper = document.querySelector('.section__cards');

const filterWords = (str) => {
  return [...new Set(str.split(' '))].join(' ');
};

// const getData = async (url, query = '') => {
//   try {
//     const res = await fetch(url + query);
//     return res.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// // const cards = await getData(API_URL);

const input = document.querySelector('.input');
input.addEventListener('input', (evt) => {
  const text = evt.target.value;
  const search = data.filter(
    (el) =>
      el.keywords.toLowerCase().includes(text.toLowerCase().trim()) ||
      el.title.toLowerCase().includes(text.toLowerCase().trim())
  );
  renderCards(search);
});

const createCard = ({ title, symbol, keywords }) => {
  const card = document.createElement('article');
  card.className = 'card';

  card.innerHTML = `<h3 class = card__icon> ${symbol} </h3>
  <p class = "card__name">${title}</p>
  <p class = "">${filterWords(keywords)}</p>`;
  return card;
};

const renderCards = (data) => {
  cardsWrapper.innerHTML = '';
  data.forEach((icon) => {
    const card = createCard(icon);
    cardsWrapper.append(card);
  });
};

renderCards(data);

document.getElementById('year').innerHTML = new Date().getFullYear();
