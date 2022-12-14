// константа задания скорости анимации
const INCREASE_NUMBER_ANIMATION_SPEED = 50;

// сама функция

function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + '+';
    } else {
      element.innerText = i;
    }

    i += 100;

  }
  setTimeout(() => increaseNumberAnimationStep(i, element, endNumber), INCREASE_NUMBER_ANIMATION_SPEED)
}

// запускаем анимацию счетчика
function initIncreaseNumberAnimation() {
  let element = document.querySelector(".features__clients-count")
  increaseNumberAnimationStep(0, element, 5000)

}


// Форма выбора цены раздел другое

const SELECT_BUDGET = document.querySelector('#budget');
const INPUT = document.createElement('input');
const FORM = document.querySelector('.form #form');
const FORM_BUTTON = document.querySelector('.form__submit');


SELECT_BUDGET.addEventListener('change', function handleSelectChange(event) {

  if (event.target.value === 'other') {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form__group', 'form__other-input');

    INPUT.placeholder = 'Введите ваш вариант';
    INPUT.type = 'text';

    formContainer.appendChild(INPUT);

    FORM.insertBefore(formContainer, FORM_BUTTON);
  };

  // удаляем ранее добавленное полеб если оно есть в DOM
  const OTHER_INPUT = document.querySelector('.form__other-input');

  if (event.target.value !== 'other' && Boolean(OTHER_INPUT)) {

    FORM.removeChild(OTHER_INPUT)

  }

});


// Изменяем шапку при скролле

let animstionInited = false;

function updateScroll() {
  // Скролл для Header
  const HEADER = document.querySelector('header');
  if (window.scrollY > 0) {

    HEADER.classList.add('header__scrolled')

  } else {
    HEADER.classList.remove('header__scrolled')

  }

  // Скролл для анимации увеличение числа
  let windowBottomPosition = window.scrollY + window.innerHeight;
  let countElementPosition = document.querySelector('.features__clients-count').offsetTop;

  if (windowBottomPosition >= 0 && !animstionInited) {
    animstionInited = true;
    initIncreaseNumberAnimation()
  }
}

window.addEventListener('scroll', updateScroll)


// Добавляем тегу <a> обработчик

function addSmoothScroll(anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'

    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  addSmoothScroll(anchor);
});


addSmoothScroll(document.querySelector('.more-button'));
