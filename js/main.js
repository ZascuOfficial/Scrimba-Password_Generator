const characters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',

  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',

  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',

  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '\'', '[', '{', ']', '}', '|', '\\', ';', ':', '"', ',', '<', '.', '>', '/', '?'
];

const generatePasswordBtn = document.getElementById('generate-password-btn');

const firstPasswordEl = document.getElementById('pswrd-one');
const secondPasswordEl = document.getElementById('pswrd-two');
const thirdPasswordEl = document.getElementById('pswrd-three');
const fourthPasswordEl = document.getElementById('pswrd-four');

function generateRandomPassword() {
  let randomPassword = '';

  for (let i = 0; i < 12; i++) {
    randomPassword += characters[Math.floor(
      Math.random() * characters.length
    )];
  }

  return randomPassword;
}

generatePasswordBtn.addEventListener('click', () => {

  firstPasswordEl.textContent = generateRandomPassword();
  secondPasswordEl.textContent = generateRandomPassword();
  thirdPasswordEl.textContent = generateRandomPassword();
  fourthPasswordEl.textContent = generateRandomPassword();

});