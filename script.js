document.addEventListener('DOMContentLoaded', () => {

  const orbs = document.querySelectorAll('.orb');

//   orbs.forEach(orb => {
// // random
//     const centerX = 50;
//     const centerY = 50;

//     const spreadX = (Math.random() - 0.5) * 60;
//     const spreadY = (Math.random() - 0.5) * 60;

//     orb.style.left = (centerX + spreadX) + 'vw';
//     orb.style.top  = (centerY + spreadY) + 'vh';

// // speed
//     orb.style.animationDuration = (Math.random() * 4 + 4) + 's';
//   });
const isMobile = window.innerWidth <= 768;

orbs.forEach(orb => {
  const centerX = 50;
  const centerY = 50;

  const spreadX = (Math.random() - 0.5) * (isMobile ? 30 : 60);
  const spreadY = (Math.random() - 0.5) * (isMobile ? 30 : 60);

  orb.style.left = (centerX + spreadX) + 'vw';
  orb.style.top  = (centerY + spreadY) + 'vh';

  orb.style.animationDuration =
    (Math.random() * 4 + 4) + 's';
});



// about
  const aboutBtn = document.querySelector('.about-btn');
  const aboutPanel = document.getElementById('about-panel');
  const aboutOverlay = document.getElementById('about-overlay');

  if (aboutBtn && aboutPanel && aboutOverlay) {
    aboutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      aboutPanel.classList.add('open');
      aboutOverlay.classList.add('visible');
    });

    aboutOverlay.addEventListener('click', () => {
      aboutPanel.classList.remove('open');
      aboutOverlay.classList.remove('visible');
    });
  }

//contact
  const contactBtn = document.querySelector('.contact-btn');
  const contactModal = document.getElementById('contact-modal');
  const contactOverlay = document.getElementById('contact-overlay');

  if (contactBtn && contactModal && contactOverlay) {
    contactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      contactModal.classList.add('open');
      contactOverlay.classList.add('visible');
    });

    contactOverlay.addEventListener('click', () => {
      contactModal.classList.remove('open');
      contactOverlay.classList.remove('visible');
    });
  }

});

function setVH() {
  document.documentElement.style.setProperty(
    '--vh',
    window.innerHeight * 0.01 + 'px'
  );
}

setVH();
window.addEventListener('resize', setVH);

