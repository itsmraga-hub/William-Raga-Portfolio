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

const ProjectObject = [
  {
    projectName: '',
    projectDescription: '',
    projectImg: '',
    projectTechnologies: '',
    projectLive: '',
    projectSource: '',
  },
];

ProjectObject[0].projectName = 'Name';
// Select the project-card to blur it
// const btns = document.querySelectorAll('[data-id="btn-1"]');
// const btnsArray = Array.from(btns);
// const closeBtns = document.querySelectorAll('[data-id="close"]');
// const closeBtnArray = Array.from(closeBtns);

// const blurBackground1 = document.querySelectorAll('[data-id="blur"]');
// const popup1 = document.querySelectorAll('[data-id="pop-up"]');
// const blurArray = Array.from(blurBackground1);
// const popArray = Array.from(popup1);

// const toggle = () => {
// blurArray.forEach((blurBackground) => {
//   blurBackground.classList.toggle('pop-active');
// });
// popArray.forEach((pop) => {
//   pop.classList.toggle('pop-active');
//   if (pop.classList.contains('pop-active')) {
//     document.body.classList.add('scroll');
//   } else {
//     document.body.classList.remove('scroll');
//   }
// });
// for (let i = 0; i < blurArray.length; i += 1) {
//   if(blurArray[i].classList.contains('pop-active'))
// }
// blurBackground1.classList.toggle('pop-active');
// popup1.classList.toggle('pop-active');
// blurBackground1.classList.toggle('pop-active');
// popup1.classList.toggle('pop-active');
// };

// btnsArray.forEach((btn) => {
//   btn.addEventListener('click', toggle);
// });

// btnsArray.forEach((button, i) => {
//   button.addEventListener('click', (e) => {
//     if (e.target.id == 1) {
//       blurArray[i].classList.toggle('pop-active');
//       return;
//     } if (e.target.id == 2) {
//       blurArray[i].classList.toggle('pop-active');
//       return;
//     } if (e.target.id == 3) {
//       blurArray[i].classList.toggle('pop-active');
//       return;
//     } if (e.target.id == 4) {
//       blurArray[i].classList.toggle('pop-active');
//       return;
//     }
//   });
// });
// closeBtnArray.forEach((closeBtn) => {
//   closeBtn.addEventListener('click', toggle);
// });
