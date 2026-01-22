document.addEventListener('DOMContentLoaded', () => {

  /* ---------- orbs ---------- */
  const orbs = document.querySelectorAll('.orb');
  const isMobile = window.innerWidth <= 768;

  orbs.forEach(orb => {
    const spreadX = (Math.random() - 0.5) * (isMobile ? 30 : 60);
    const spreadY = (Math.random() - 0.5) * (isMobile ? 30 : 60);

    orb.style.left = (50 + spreadX) + 'vw';
    orb.style.top  = (50 + spreadY) + 'vh';
    orb.style.animationDuration = (Math.random() * 4 + 4) + 's';
  });

  /* ---------- ABOUT ---------- */
  const aboutBtn = document.querySelector('.about-btn');
  const aboutPanel = document.getElementById('about-panel');
  const aboutOverlay = document.getElementById('about-overlay');
  const aboutClose = document.querySelector('.about-close');

  function openAbout() {
    aboutPanel.classList.add('open');
    aboutOverlay.classList.add('visible');
  }

  function closeAbout() {
    aboutPanel.classList.remove('open');
    aboutOverlay.classList.remove('visible');
  }

  if (aboutBtn) aboutBtn.addEventListener('click', e => {
    e.preventDefault();
    openAbout();
  });

  if (aboutOverlay) aboutOverlay.addEventListener('click', closeAbout);
  if (aboutClose) aboutClose.addEventListener('click', closeAbout);

  /* ---------- CONTACT ---------- */
  const contactBtn = document.querySelector('.contact-btn');
  const contactModal = document.getElementById('contact-modal');
  const contactOverlay = document.getElementById('contact-overlay');

  if (contactBtn) {
    contactBtn.addEventListener('click', e => {
      e.preventDefault();
      contactModal.classList.add('open');
      contactOverlay.classList.add('visible');
    });
  }

  if (contactOverlay) {
    contactOverlay.addEventListener('click', () => {
      contactModal.classList.remove('open');
      contactOverlay.classList.remove('visible');
    });
  }

});
