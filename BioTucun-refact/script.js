const barras = document.querySelectorAll('.bar');

const observador = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('barAnimation');
    } else {
      entry.target.classList.remove('barAnimation'); // reseta ao sair
    }
  });
}, {
  threshold: 0.2
});

barras.forEach(barra => observador.observe(barra));

// Objetivos — click para abrir/fechar
const cards = document.querySelectorAll('.container-objetivos .container');

cards.forEach(card => {
  const toggle = () => {
    const isActive = card.classList.contains('active');

    // Fecha todos
    cards.forEach(c => {
      c.classList.remove('active');
      c.setAttribute('aria-expanded', 'false');
    });

    // Abre o clicado, se não estava aberto
    if (!isActive) {
      card.classList.add('active');
      card.setAttribute('aria-expanded', 'true');
    }
  };

  card.addEventListener('click', toggle);

  // Acessibilidade: Enter e Space também abrem
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
});

AOS.init();