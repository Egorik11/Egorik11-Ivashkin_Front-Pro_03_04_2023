const box = [...document.querySelector('.box').children];
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
let currentIndex = 0;

function showSlide(index) {
  for (let i = 0; i < box.length; i++) {
    box[i].classList.remove('active');
  }
  box[index].classList.add('active');
}

function checkDisabled() {
  if (currentIndex === box.length - 1) {
    next.disabled = true;
  }
  if (currentIndex === 0) {
    prev.disabled = true;
  }
}

prev.addEventListener('click', function () {
  currentIndex--;
  next.disabled = false;
  checkDisabled();
  showSlide(currentIndex);
});

next.addEventListener('click', function () {
  currentIndex++;
  prev.disabled = false;
  checkDisabled();
  showSlide(currentIndex);
});

checkDisabled();
