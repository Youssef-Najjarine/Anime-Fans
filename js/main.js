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
const loadingModal = document.querySelector('.modal');

document.addEventListener('click', handleClicks);

function handleClicks(event) {
  const buttonPressed = event.target.className;
  if (buttonPressed === houseIcon.className) {
    handleHouseIcon();
  } else if (buttonPressed === animeTriviaButton.className) {
    handleAnimeTriviaButton();
  } else if (buttonPressed === reviewAnimesButton.className) {
    handleReviewAnimesButton();
  } else if (buttonPressed === animeTriviaSubmit.className) {
    handleAnimeTriviaSubmit();
  } else if (buttonPressed === next.className) {
    handleNextButton();
  } else if (buttonPressed === favoriteButton.className) {
    handleFavoriteButton();
  } else if (buttonPressed === heartIcon.className) {
    handleHeartIcon();
  } else if (buttonPressed === 'reviewsSubmit') {
    handleReviewsSubmit();
  } else if (buttonPressed === 'fa fa-star') {
    handleStars();
  } else if (buttonPressed === 'reviewsHeart') {
    handleReviewsFavoriteButtons();
  }

}
function handleApi() {
  const promise = new Promise((resolve, reject) => {
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
      resolve();
    }
    xhr.send();
  });
  return promise;
}
function handleAnimeTriviaButton() {
  const newArray = [];
  loadingModal.classList.remove('hidden');
  newArray.push(handleApi());
  Promise.all(newArray).then(values => {
    h1.textContent = 'Anime Trivia';
    animeTriviaView.classList.remove('hidden');
    homeScreen.classList.add('hidden');
    loadingModal.classList.add('hidden');
  });
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
  animeName.value = '';
  animeCharacter.value = '';
  h1.textContent = 'Anime Fans';
  homeScreen.classList.remove('hidden');
  animeTriviaView.classList.add('hidden');
  myFavorites.classList.add('hidden');
  reviewAnimesSection.classList.add('hidden');
}
function handleNextButton() {
  handleApi();
  modal.classList.add('hidden');
  animeCharacter.value = '';
  animeName.value = '';
}
function handleFavoriteButton() {
  var items = myFavoritesUl.getElementsByTagName('li');

  for (var i = 0; i < items.length; i++) {
    if (items[i].textContent === 'You have no favorite animes!') {
      myFavoritesUl.removeChild(myFavoritesUl.childNodes[0]);
    }
  }
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
  if (myFavoritesUl.getElementsByTagName('li').length === 0) {
    const li = document.createElement('li');
    li.textContent = 'You have no favorite animes!';
    myFavoritesUl.appendChild(li);
  }
  h1.textContent = 'My Favorites';
  homeScreen.classList.add('hidden');
  animeTriviaView.classList.add('hidden');
  reviewAnimesSection.classList.add('hidden');
  myFavorites.classList.remove('hidden');
}
function handleReviewAnimesButton() {
  const newArray = [];
  loadingModal.classList.remove('hidden');
  for (let i = 0; i < 11; i++) {
    newArray.push(handleReviewsApi());
  }
  Promise.all(newArray).then(values => {
    h1.textContent = 'Review Animes';
    reviewAnimesSection.classList.remove('hidden');
    homeScreen.classList.add('hidden');
    animeTriviaView.classList.add('hidden');
    myFavorites.classList.add('hidden');
    loadingModal.classList.add('hidden');
  });
}
function handleReviewsApi() {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://animechan.vercel.app/api/random');
    xhr.responseType = 'json';
    xhr.addEventListener('load', handleXhr);
    function handleXhr() {
      // console.log(xhr.status);
      // console.log(xhr.response);
      const li = document.createElement('li');
      const div1 = document.createElement('div');
      const div2 = document.createElement('div');
      const div3 = document.createElement('div');
      const textArea = document.createElement('textarea');
      const button1 = document.createElement('button');
      const button2 = document.createElement('button');
      const img = document.createElement('img');
      const a1 = document.createElement('a');
      const a2 = document.createElement('a');
      const a3 = document.createElement('a');
      const a4 = document.createElement('a');
      const a5 = document.createElement('a');
      li.setAttribute('class', xhr.response.anime);
      reviewsUl.appendChild(li);
      li.textContent = xhr.response.anime;
      li.appendChild(div1);
      div1.setAttribute('class', 'row');
      div1.appendChild(div2);
      div2.setAttribute('class', 'reviewsFirstDiv');
      div2.appendChild(a1);
      div2.appendChild(a2);
      div2.appendChild(a3);
      div2.appendChild(a4);
      div2.appendChild(a5);
      div2.appendChild(textArea);
      div1.appendChild(div3);
      div3.appendChild(button1);
      button1.setAttribute('class', 'reviewsHeartButton');
      button1.appendChild(img);
      img.setAttribute('src', 'images/heart.png');
      img.setAttribute('class', 'reviewsHeart');
      div3.appendChild(button2);
      button2.setAttribute('class', 'reviewsSubmit');
      button2.textContent = 'Submit';
      a1.setAttribute('class', 'fa fa-star');
      a2.setAttribute('class', 'fa fa-star');
      a3.setAttribute('class', 'fa fa-star');
      a4.setAttribute('class', 'fa fa-star');
      a5.setAttribute('class', 'fa fa-star');
      resolve();
    }
    xhr.send();
  });
  return promise;
}
function handleStars() {
  if (event.target.className === 'fa fa-star checked') {
    event.target.classList.remove('checked');
  } else {
    event.target.classList.add('checked');
  }
}
function handleReviewsFavoriteButtons() {
  var items = myFavoritesUl.getElementsByTagName('li');

  for (var i = 0; i < items.length; i++) {
    if (items[i].textContent === 'You have no favorite animes!') {
      myFavoritesUl.removeChild(myFavoritesUl.childNodes[0]);
    }
  }
  h1.textContent = 'My Favorites';
  const li = document.createElement('li');
  li.textContent = event.target.closest('li').className;
  myFavoritesUl.appendChild(li);
  modal.classList.add('hidden');
  homeScreen.classList.add('hidden');
  animeTriviaView.classList.add('hidden');
  myFavorites.classList.remove('hidden');
  reviewAnimesSection.classList.add('hidden');
}
function handleReviewsSubmit() {
  const li = event.target.closest('li');
  li.remove();
  handleReviewsApi();
}
