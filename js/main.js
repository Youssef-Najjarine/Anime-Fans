const h1 = document.querySelector('h1');
const houseIcon = document.querySelector('.houseIcon');
const homeScreen = document.querySelector('.homeScreen');
const animeTriviaView = document.querySelector('.animeTriviaView');
const animeTriviaButton = document.querySelector('.animeTriviaButton');
const animeTriviaViewParagraph = document.querySelector('.animeTriviaView p');
const animeTriviaSubmit = document.querySelector('.animeTriviaSubmit');
const animeName = document.querySelector('#animeName');
const animeCharacter = document.querySelector('#animeCharacter');
const correctAnime = document.querySelector('.correctAnime');
const correctCharacter = document.querySelector('.correctCharacter');
const modal = document.querySelector('.blackBox');
const modalTitle = document.querySelector('.h3');
const next = document.querySelector('.next');
const favoriteButton = document.querySelector('.favoriteHeart');
const myFavoritesUl = document.querySelector('.myFavoritesUl');
const myFavorites = document.querySelector('.myFavorites');
const heartIcon = document.querySelector('.heartIcon');
const reviewAnimesButton = document.querySelector('.reviewAnimes');
const reviewsUl = document.querySelector('.reviewsUl');
const reviewAnimesSection = document.querySelector('.reviewAnimesSection');

document.addEventListener('click', handleClicks);

function handleClicks(event) {
  const buttonPressed = event.target.className;
  if (buttonPressed === houseIcon.className) {
    handleHouseIcon();
  } else if (buttonPressed === animeTriviaButton.className) {
    handleAnimeTriviaButton();
  } else if (buttonPressed === animeTriviaSubmit.className) {
    handleAnimeTriviaSubmit();
  } else if (buttonPressed === next.className) {
    handleNextButton();
  } else if (buttonPressed === favoriteButton.className) {
    handleFavoriteButton();
  } else if (buttonPressed === heartIcon.className) {
    handleHeartIcon();
  } else if (buttonPressed === reviewAnimesButton.className) {
    handleReviewAnimesButton();
  }
}

function handleApi() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://animechan.vercel.app/api/random');
  xhr.responseType = 'json';
  xhr.addEventListener('load', handleXhr);
  function handleXhr() {
    // console.log(xhr.status);
    // console.log(xhr.response);
    animeTriviaViewParagraph.textContent = xhr.response.quote;
    correctAnime.textContent = xhr.response.anime;
    correctCharacter.textContent = xhr.response.character;
  }
  xhr.send();
}

function handleAnimeTriviaButton() {
  handleApi();
  h1.textContent = 'Anime Trivia';
  animeTriviaView.classList.remove('hidden');
  homeScreen.classList.add('hidden');
}

function handleAnimeTriviaSubmit() {
  if (animeName.value.toLowerCase() === correctAnime.textContent.toLowerCase() || animeCharacter.value.toLowerCase() === correctCharacter.textContent.toLowerCase()) {
    modal.classList.remove('hidden');
    modalTitle.textContent = 'Correct!';
    modalTitle.classList.add('correct');
  } else {
    modal.classList.remove('hidden');
    modalTitle.textContent = 'inCorrect!';
    modalTitle.classList.remove('correct');
    modalTitle.classList.add('incorrect');
  }
}

function handleHouseIcon() {
  animeTriviaViewParagraph.textContent = '';
  reviewsUl.innerHTML = '';
  h1.textContent = 'Anime Fans';
  homeScreen.classList.remove('hidden');
  animeTriviaView.classList.add('hidden');
  myFavorites.classList.add('hidden');
}
function handleNextButton() {
  handleApi();
  modal.classList.add('hidden');
  animeCharacter.value = '';
  animeName.value = '';
}
function handleFavoriteButton() {
  h1.textContent = 'My Favorites';
  const li = document.createElement('li');
  li.textContent = correctAnime.textContent;
  myFavoritesUl.appendChild(li);
  modal.classList.add('hidden');
  homeScreen.classList.add('hidden');
  animeTriviaView.classList.add('hidden');
  myFavorites.classList.remove('hidden');
}
function handleHeartIcon() {
  h1.textContent = 'My Favorites';
  homeScreen.classList.add('hidden');
  animeTriviaView.classList.add('hidden');
  myFavorites.classList.remove('hidden');
}
function handleReviewAnimesButton() {
  h1.textContent = 'Review Animes';
  reviewAnimesSection.classList.remove('hidden');
  homeScreen.classList.add('hidden');
  animeTriviaView.classList.add('hidden');
  myFavorites.classList.add('hidden');
  for (let i = 0; i < 10; i++) {
    handleReviewsApi();
  }
}
function handleReviewsApi() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://animechan.vercel.app/api/random');
  xhr.responseType = 'json';
  xhr.addEventListener('load', handleXhr);
  function handleXhr() {
    // console.log(xhr.status);
    // console.log(xhr.response);
    const li = document.createElement('li');
    li.textContent = xhr.response.anime;
    reviewsUl.appendChild(li);
  }
  xhr.send();
}
