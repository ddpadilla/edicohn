const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 2500,
};


ScrollReveal().reveal('#maindiv', {
  ...scrollRevealOption,
  origin: "left",
  delay: 250,
});


ScrollReveal().reveal('#card1', {
  ...scrollRevealOption,
  origin: "left",
  delay: 250,
});


ScrollReveal().reveal('#card2', {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 250,
});


ScrollReveal().reveal('#card3', {
  ...scrollRevealOption,
  origin: "right",
  delay: 250,
});

// Animar las tarjetas de servicios
ScrollReveal().reveal('.service-card', {
  distance: '40px',
  origin: 'bottom',
  duration: 2000,
  interval: 200,
  delay: 200,
});

// Animar el logo principal
ScrollReveal().reveal('#imgLogo', {
  distance: '20px',
  origin: 'top',
  duration: 1500,
  delay: 100,
  scale: 0.85,
});

// Animar el footer
ScrollReveal().reveal('footer', {
  distance: '30px',
  origin: 'bottom',
  duration: 1800,
  delay: 300,
});

// Animar los botones principales del hero
ScrollReveal().reveal('.hero-section .btn', {
  distance: '20px',
  origin: 'bottom',
  duration: 1200,
  interval: 150,
  delay: 400,
});

// navbar cambia sombra/fondo al hacer scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los enlaces internos que empiezan con #
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});

// Animaciones de disolución suave al hacer scroll ScrollReveal
window.sr = window.ScrollReveal({
  distance: '40px',
  duration: 900,
  easing: 'ease',
  opacity: 0,
  scale: 1,
  reset: false
});

// Aplica el efecto a las secciones principales
sr.reveal('section', {
  origin: 'bottom',
  interval: 120,
  cleanup: true
});
  