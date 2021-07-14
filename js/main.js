const h1 = document.querySelector('h1');
const houseIcon = document.querySelector('.houseIcon');
const homeScreen = document.querySelector('.homeScreen');
const animeTriviaView = document.querySelector('.animeTriviaView');
const animeTriviaButton = document.querySelector('.animeTriviaButton');
const animeTriviaViewParagraph = document.querySelector('.animeTriviaView p');

document.addEventListener('click', handleClicks);

function handleClicks(event) {
  const buttonPressed = event.target.className;
  if (buttonPressed === houseIcon.className) {
    h1.textContent = 'Anime Fans';
    homeScreen.classList.remove('hidden');
    animeTriviaView.classList.add('hidden');
  } else if (buttonPressed === animeTriviaButton.className) {
    handleApi();
    h1.textContent = 'Anime Trivia';
    animeTriviaView.classList.remove('hidden');
    homeScreen.classList.add('hidden');
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
  }
  xhr.send();
}

handleApi();
