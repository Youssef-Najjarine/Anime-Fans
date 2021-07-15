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
const modalTitle = document.querySelector('.blackBox h3');
const next = document.querySelector('.next');

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
  } else if (buttonPressed === next.className) {
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

  }
  xhr.send();
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

function handleNextButton() {
  handleApi();
  modal.classList.add('hidden');
  animeCharacter.value = '';
  animeName.value = '';
}
