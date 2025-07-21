// Scroll suave ao clicar nos links do menu
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // ajuste para compensar a navbar
        behavior: 'smooth'
      });
    }
  });
});

// Anima fade-in ao rolar a página
const elementos = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('aparecer');
    }
  });
}, {
  threshold: 0.1
});

elementos.forEach(el => observer.observe(el));

// Formulário fake (só para demonstração)
const form = document.querySelector('.form-agendamento');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Agendamento enviado com sucesso! Entraremos em contato pelo WhatsApp.');
  form.reset();
});

// Detectar cards e aplicar classe 'ativo' quando estiverem visíveis
const cards = document.querySelectorAll('.card');

const observerCards = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('ativo');
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => observerCards.observe(card));

function expandirCard(card) {
  // Fecha todos os outros cards
  document.querySelectorAll('.card-expandivel').forEach(c => {
    if (c !== card) c.classList.remove('expandido');
  });

  card.classList.add('expandido');
}

function fecharCard(e, botao) {
  e.stopPropagation(); // evita reabrir ao clicar
  const card = botao.closest('.card-expandivel');
  card.classList.remove('expandido');
}

  function toggleSubmenu(e) {
    e.preventDefault();
    const submenu = e.target.nextElementSibling;
    submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
  }

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.menu-dropdown > a');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', (e) => {
    if(window.innerWidth <= 720) {
      e.preventDefault(); // para evitar navegação
      const submenu = dropdown.nextElementSibling;

      if(submenu.style.display === 'flex') {
        submenu.style.display = 'none';
      } else {
        submenu.style.display = 'flex';
        submenu.style.flexDirection = 'column';
      }
    }
  });
});