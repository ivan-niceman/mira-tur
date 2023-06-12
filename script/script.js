// slider for header

let slideHeaderImg = document.querySelectorAll(".slide__header__img");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 10000);

function nextSlide() {
  slideHeaderImg[currentSlide].className = "slide__header__img";
  currentSlide = (currentSlide + 1) % slideHeaderImg.length;
  slideHeaderImg[currentSlide].className = "slide__header__img active";
}

// mobile menu

const buttonBurger = document.querySelector('.burger__menu');
const menuMobile = document.querySelector('.mobile__nav');
const buttonCloseMobileMenu = document.querySelector('.btn-close');

function closeMobileMenu() {
  menuMobile.classList.remove('mobile__nav_visible');
}

buttonBurger.addEventListener('click', () => {
  menuMobile.classList.add('mobile__nav_visible');
})

buttonCloseMobileMenu.addEventListener('click', () => {
  closeMobileMenu();
})

// close mobile menu overlay

// document.addEventListener('mousedown', evt => {
//   if (!menuMobile.contains(evt.target)) {
//     closeMobileMenu();
//   }
// });

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeMobileMenu();
  }
});

// scroll

const scroll = document.querySelector(".scrollup");
scroll.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
}

window.onscroll = function () { scrollFunction() };

// popup

const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.popup__close-button');

const feedbackButton = document.querySelectorAll('.header__contact_feedback');
const feedbackPopup = document.querySelector('.popup__feedback');

const buyButtonInOffice = document.querySelectorAll('.header__by__in-office');
const popupBuyInOffice = document.querySelector('.popup__office-tour');

const testButtonSend = document.querySelector('.test__button-send');
const popupQuestionnaire = document.querySelector('.popup__questionnaire');

const staffButtonManager = document.querySelectorAll('.staff__button__popup');
const popupManager = document.querySelector('.popup__office-tour-manager');

const hotToursButton = document.querySelector('.ready__button');
const popupHotTours = document.querySelector('.popup__hot-tours');

function closePopup(popup) {
  popup.classList.remove('popup__opend');
  // let forms = popup.querySelectorAll('.form');
  // forms.forEach(function (form) {
  //   form.reset();
  // });
}

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup');
    closePopup(popup);
  });
});

feedbackButton.forEach(elem => {
  elem.addEventListener('click', () => {
    feedbackPopup.classList.add('popup__opend');
  });
});

buyButtonInOffice.forEach(elem => {
  elem.addEventListener('click', (evt) => {
    evt.preventDefault();
    popupBuyInOffice.classList.add('popup__opend');
  });
});

testButtonSend.addEventListener('click', () => {
  popupQuestionnaire.classList.add('popup__opend');
});

staffButtonManager.forEach(elem => {
  elem.addEventListener('click', () => {
    popupManager.classList.add('popup__opend');
  });
});

hotToursButton.addEventListener('click', () => {
  popupHotTours.classList.add('popup__opend');
});

// name managers

const managerButtons = document.querySelectorAll('.staff__button__popup');
const popupTitleManagerName = document.querySelector('.popup__title__manager-name');

managerButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const managerName = this.getAttribute('data-manager-name');
    const subject = `Подбор и покупка тура у ${managerName}!`;

    popupTitleManagerName.textContent = `Подбор и покупка тура у ${managerName}`;
    document.querySelector('#buy-tour-manager input[name="subject"]').value = subject;
  });
});

// remove the anchor from the address bar

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    document.getElementById(link.getAttribute('href').substring(1)).scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, null, ' ');
  });
});
