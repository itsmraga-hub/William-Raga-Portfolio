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
