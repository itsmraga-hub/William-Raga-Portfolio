const primaryNav = document.querySelector('.primary-navigation');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelectorAll('.nav-links li');
const navLinksATag = document.querySelectorAll('.jav-link-class');
const navArray = Array.from(navLinksATag);

// Select the project-card to blur it
const btn = document.getElementById('btn-1');
const closeBtn = document.getElementById('close');
// const bodyTag = document.getElementById('body');
const toggle = () => {
  const blurBackground1 = document.getElementById('blur-background');
  const popup1 = document.getElementById('pop-up-window');
  blurBackground1.classList.toggle('pop-active');
  popup1.classList.toggle('pop-active');
  if (popup1.classList.contains('pop-active')) {
    document.documentElement = 'scroll';
  } else {
    document.body.style.overflowY = 'hidden';
  }
  // bodyTag.classList.toggle('scroll');
};

btn.addEventListener('click', toggle);
closeBtn.addEventListener('click', toggle);

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

// Youtube content
$(document).ready( function (){ 
  // Defining that "overlay" is the element that has a changing display value
  var overlay = document.querySelector('.w-nav-overlay');

  // Creating our mutation observer, which we attach to overlay later
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {

      // Checking if it's the style attribute got changed and if display value now set to 'none'?
      if( mutationRecord.attributeName === 'style' && window.getComputedStyle(overlay).getPropertyValue('display') !== 'none'){

        //Overlay's  display value is no longer 'none', now changing the "body" styles:
        if (iOS) { 
          // for iOS devices:
          var x = $(window).scrollTop().toFixed()
          

          $('body').css({'overflow': 'hidden',
                          'position': 'fixed',
                          'top' : '-' + x + 'px',
                          'width': '100vw'});
        }
        // for all other devices:
        $('body').css('overflow', 'hidden');  
      } 
        //Overlay's  display value back to 'none' , now changing the "body" styles again:
        else {
              if (iOS) {
              //  for iOS devices:
                var t = $('body').css('top').replace('-','').replace('px','')
                $('body').css({'overflow': 'auto',
                                'position': '',
                                'width': '100vw'});
                $('body').animate({scrollTop:t}, 0);
              }
            // for all other devices:
            $('body').css('overflow', '');

      }

    });    
  });
  // Attach the mutation observer to overlay, and only when attribute values change
  observer.observe(overlay, { attributes : true, attributeFilter : ['style']});

  });