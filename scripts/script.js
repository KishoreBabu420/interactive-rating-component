'use strict';
const ratingEl = document.getElementById('rating-value');
const btnSubmit = document.getElementById('btn-submit');

const ratingContainer = document.getElementById('rating');
const thanksContainer = document.getElementById('thanks');

const ratingButtons = document.querySelectorAll('[type = button]');

for (let ratingButton of ratingButtons) {
  ratingButton.addEventListener('click', (e) => {
    for (let ratingBtn of ratingButtons) {
      ratingBtn.classList.remove('active');
    }
    e.target.classList.add('active');
    ratingEl.innerText = e.target.innerText;
  });
}

btnSubmit.addEventListener('click', () => {
  if (ratingEl.innerText === '' || ratingEl.innerText < 1) {
    console.log(ratingEl.innerText);
    ratingContainer.style.display = 'block';
  } else {
    console.log(ratingEl.innerText);
    ratingContainer.style.display = 'none';
    thanksContainer.style.display = 'block';
  }
});
