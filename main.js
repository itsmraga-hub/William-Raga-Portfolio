const primaryNav = document.querySelector('.primary-navigation');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelectorAll('.nav-links li');
const navLinksATag = document.querySelectorAll('.jav-link-class');
const navArray = Array.from(navLinksATag);

// Function to check the respective links to disappear nav-link if clicked
function checkLink() {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'true') {
    primaryNav.setAttribute('data-visible', false);
    mobileNavToggle.setAttribute('aria-expanded', false);
  }
}

// Looping through the array, to call the checkLink function on each
navArray.forEach((link) => {
  link.addEventListener('click', checkLink);
});

// Burger eventListener to toggle the navLink view
mobileNavToggle.addEventListener('click', () => {
  const visible = primaryNav.getAttribute('data-visible');

  if (visible === 'false') {
    primaryNav.setAttribute('data-visible', true);
    mobileNavToggle.setAttribute('aria-expanded', true);
  } else if (visible === 'true') {
    primaryNav.setAttribute('data-visible', false);
    mobileNavToggle.setAttribute('aria-expanded', false);
  }

  navLinks.forEach((link, i) => {
    if (link.getElementsByClassName.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `fadein 500ms ease forwards ${i / 7 + 0.3}s`;
    }
  });
});

// Project-card pop up window definitions

//  Select the body to append modal to it and to blur it
const body = document.querySelector('.body-blur');
const popUpContainer = document.querySelector('#Pop-up-container');

const ProjectObjects = [
  {
    projectName: 'Mialoni Conference page',
    projectDescription: 'HTML / CSS / JavaScript Module Microverse Capstone Project. The project is a landing page for a group I love and I am passionate about - MIALONI. I also had a lot of fun building this project and bringing everything I have learnt together.',
    projectImg: './assets/mialoni-2.png',
    projectTechnologies: ['html', 'css', 'Javascript', 'npm'],
    projectLive: 'https://itsmraga-hub.github.io/Conference-Page/',
    projectSource: 'https://github.com/itsmraga-hub/Conference-Page',
  },
  {
    projectName: 'My Portfolio',
    projectDescription: 'Welcome to my personal website portfolio where I showcase my skills and accomplishments. Here, you will find an overview of my professional experiences, education, and projects. I am a dynamic and motivated individual with a passion for continuous learning and development. Take a look and see how I can bring value to your organization.',
    projectImg: 'assets/portfolio-2.png',
    projectTechnologies: ['html', 'Sass', 'scss', 'Javascript'],
    projectLive: 'https://itsmraga.netlify.app/',
    projectSource: 'https://github.com/itsmraga-hub/Portfolio-Website',
  },
  {
    projectName: 'Space Traveler\'s Hub',
    projectDescription: 'The application allows users to book rockets and join selected space missions working with real life data from the SpaceX API.',
    projectImg: 'assets/space-2.png',
    projectTechnologies: ['html', 'React.js', 'css', 'Redux.js'],
    projectLive: 'https://fanciful-space-travelers.netlify.app/',
    projectSource: 'https://github.com/itsmraga-hub/Space-Travelers-Hub',
  },
  {
    projectName: 'Cashverse - A budget App',
    projectDescription: 'A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what. Built with Ruby on Rails.',
    projectImg: 'assets/cashverse-2.png',
    projectTechnologies: ['Ruby on rails', 'postgresql', 'html', 'css'],
    projectLive: 'https://cashverse-raga.onrender.com',
    projectSource: 'https://github.com/itsmraga-hub/budget-app',
  },
];

// Generating html pop-up window content dynamically
function createModal(i) {
  const popUpWindow = document.createElement('div');
  popUpWindow.classList.add('pop-up-window');
  const iden = 'pop-up-window';
  popUpWindow.id = iden;
  popUpWindow.innerHTML = `<div class="head">
    <h4 class="project-title roboto white pop-up-title">${ProjectObjects[i].projectName}</h4>
    <a href="" id="close" onClick="() => destroyModal()">
    <svg data-id="close" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="white"/>
      </svg></a>
  </div>
  <img src="${ProjectObjects[i].projectImg}" alt=" an image for my project" class="pop-up-img">
  <p class="pop-up-text roboto white text-400">${ProjectObjects[i].projectDescription}</p>
  <ul class="lists pop-up-list">
    <li class="inter white li-border pop-up-textlist">${ProjectObjects[i].projectTechnologies[0]}</li>
    <li class="inter white li-border pop-up-textlist">${ProjectObjects[i].projectTechnologies[1]}</li>
    <li class="inter white li-border pop-up-textlist">${ProjectObjects[i].projectTechnologies[2]}</li>
    <li class="inter white pop-up-textlist">${ProjectObjects[i].projectTechnologies[3]}</li>
  </ul>
  <div class="pop-up-btns">
    <a href="${ProjectObjects[i].projectLive}" target="_blank" class="btn btn-primary pop-up-btn white roboto">See Live<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="white"/>
    </svg></a>
    <a href="${ProjectObjects[i].projectSource}" target="_blank" class="btn roboto btn-primary pop-up-btn white github">See Source <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.4019 7.46114C18.4019 6.32124 18.0359 5.25043 17.3372 4.31779C17.6033 3.41969 17.6699 2.27979 17.6033 0.967185C17.5701 0.414508 17.1375 0 16.6052 0C16.3057 0 13.7771 0.0345423 12.3131 1.38169C11.0488 1.1399 9.71794 1.1399 8.42034 1.38169C6.98966 0.0345423 4.46101 0 4.12829 0C3.59594 0 3.16341 0.414508 3.13014 0.967185C3.03032 2.27979 3.13014 3.41969 3.39631 4.31779C2.6976 5.28497 2.33162 6.35579 2.33162 7.46114C2.33162 9.8791 4.12829 12.0553 6.85657 13.0915C6.75675 13.2988 6.69021 13.5406 6.62367 13.7824C3.72903 13.4715 2.36489 10.7427 2.29834 10.639C2.06544 10.1209 1.46655 9.91364 0.967475 10.19C0.468399 10.4318 0.268769 11.0535 0.534942 11.5717C0.601486 11.7444 2.43143 15.4404 6.45731 15.8549V18.9637C6.45731 19.5509 6.88984 20 7.45546 20H13.278C13.8436 20 14.2762 19.5509 14.2762 18.9637V14.8532C14.2762 14.2314 14.1431 13.6442 13.9102 13.1261C16.6052 12.0553 18.4019 9.91364 18.4019 7.46114Z" fill="#505F79"/>
      </svg></a>
  </div>`;
  body.appendChild(popUpWindow);
}

const destroyModal = (e) => {
  e.preventDefault();
  const body = document.querySelector("#body");
  body.lastChild.remove()
}

// Select all buttons
const btns = document.querySelectorAll('[data-id="btn-1"]');
const btnsArray = Array.from(btns);

btnsArray.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    createModal(i);

    const modal = document.getElementById('pop-up-window');
    const close = document.getElementById('close');
    const modalBackgrounds = document.querySelectorAll('.modal-background');
    const modalsArr = Array.from(modalBackgrounds);
    modalsArr.forEach((modalBG) => {
      modalBG.style.opacity = '0.05';
    });
    modal.style.display = 'block';
    // close.onclick = function Close() {
    //   // modal.style.display = 'hidden';
    //   destroyModal()
    // };
  });
});

// Email lowercase letters validation only!!!
const emailRegExp = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

// Regex for email
// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// Get form element by Id
const form = document.querySelector('#contact-form');
let text;

// Add event listener for form
form.addEventListener('submit', (e) => {
  // Stop submit
  e.preventDefault();

  // Validate email
  const mail = form.email.value;
  if (emailRegExp.test(mail)) {
    form.submit();
    text = "Message Received."
  } else {
    text = 'Email must be lowercase!!!';
    // document.getElementById('err-display').innerHTML = text;
    // document.getElementById('err-display').style.border = '1px solid rgba(255, 0, 0, 0.9)';
  }
  document.getElementById('err-display').innerHTML = text;
});

// Local storage

// Select all form inputs
const formInputs = document.querySelectorAll('.input-cls');
const formInputsArr = Array.from(formInputs);

// Select form sbmit button
// const submitBtn = document.querySelector('.submit-btn');

window.onload = () => {
  // select localstorage to check if there is already existing data
  const localData = localStorage;

  // Check if there is data and if its there, fill the inputs with it
  if (localData.fullName || localData.email || localData.message) {
    formInputsArr[0].value = localData.fullName;
    formInputsArr[1].value = localData.email;
    formInputsArr[2].value = localData.message;
  }
};

// Object to store our collected data
const ContactForm = {
  fullName: '',
  email: '',
  message: '',
};

// Event listener to all input tags to store the data to local storage on input

formInputsArr.forEach((input) => {
  input.addEventListener('input', () => {
    ContactForm.fullName = formInputsArr[0].value;
    ContactForm.email = formInputsArr[1].value;
    ContactForm.message = formInputsArr[2].value;

    localStorage.setItem('fullName', ContactForm.fullName);
    localStorage.setItem('email', ContactForm.email);
    localStorage.setItem('message', ContactForm.message);
  });
});
