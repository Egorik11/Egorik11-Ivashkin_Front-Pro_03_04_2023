const container = document.querySelector('#container');

const randomNumber = Math.floor(Math.random() * 10) + 1;

const img = document.createElement('img');

img.setAttribute('src', `./img/${randomNumber}.jpg`);

container.appendChild(img);
