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
const correctAnime2 = document.querySelector('.correctAnime2');
const correctCharacter2 = document.querySelector('.correctCharacter2');
const correctAnswerModal = document.querySelector('.correctAnswerModal');
const inCorrectAnswerModal = document.querySelector('.inCorrectAnswerModal');
const next1 = document.querySelector('.next1');
const next2 = document.querySelector('.next2');

document.addEventListener('click', handleClicks);

function handleClicks(event) {
  const buttonPressed = event.target.className;
  if (buttonPressed === houseIcon.className) {
    animeTriviaViewParagraph.textContent = '';
    h1.textContent = 'Anime Fans';
    homeScreen.classList.remove('hidden');
    animeTriviaView.classList.add('hidden');
  } else if (buttonPressed === animeTriviaButton.className) {
    handleApi();
    h1.textContent = 'Anime Trivia';
    animeTriviaView.classList.remove('hidden');
    homeScreen.classList.add('hidden');
  } else if (buttonPressed === animeTriviaSubmit.className) {
    handleAnimeTriviaSubmit();
  } else if (buttonPressed === next1.className || buttonPressed === next2.className) {
    handleNextButton();
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
    correctAnime2.textContent = xhr.response.anime;
    correctCharacter2.textContent = xhr.response.character;
  }
  xhr.send();
}

function handleAnimeTriviaSubmit() {
  if (animeName.value.toLowerCase() === correctAnime.textContent.toLowerCase() || animeCharacter.value.toLowerCase() === correctCharacter.textContent.toLowerCase()) {
    correctAnswerModal.classList.remove('hidden');
  } else {
    inCorrectAnswerModal.classList.remove('hidden');
  }

}

function handleNextButton() {
  handleApi();
  correctAnswerModal.classList.add('hidden');
  inCorrectAnswerModal.classList.add('hidden');
  animeCharacter.value = '';
  animeName.value = '';
}
