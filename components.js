// Facial Express — shared components

const NAV = `
<nav class="nav" id="mainNav">
  <a href="index.html" class="logo">Facial <em>Express</em></a>
  <ul class="nav-links">
    <li><a href="servicios.html">Servicios</a></li>
    <li><a href="academia.html">Academia</a></li>
    <li><a href="productos.html">Productos</a></li>
    <li><a href="eventos.html">Eventos</a></li>
    <li><a href="academia-beautyprofit.html">BeautyProfit</a></li>
  </ul>
  <a href="https://wa.me/1809000000" class="btn-dark nav-cta" target="_blank">Agendar</a>
  <button class="nav-toggle" aria-label="Menú" onclick="document.querySelector('.nav-links').style.display = document.querySelector('.nav-links').style.display === 'flex' ? 'none' : 'flex'">
    <span></span><span></span><span></span>
  </button>
</nav>`;

const FOOTER = `
<footer>
  <div class="footer-top">
    <a href="index.html" class="footer-logo">Facial <em>Express</em></a>
    <div class="footer-cols">
      <div class="footer-col">
        <span class="footer-col-title">Servicios</span>
        <ul>
          <li><a href="servicios-facial.html">Faciales</a></li>
          <li><a href="servicios-micropigmentacion.html">Micropigmentación</a></li>
          <li><a href="servicios-pestanas.html">Pestañas</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <span class="footer-col-title">Academia</span>
        <ul>
          <li><a href="academia-cejas-pestanas.html">Cejas y Pestañas</a></li>
          <li><a href="academia-micropigmentacion.html">Micropigmentación</a></li>
          <li><a href="academia-hydralips.html">Hydralips</a></li>
          <li><a href="academia-lifting.html">Lifting</a></li>
          <li><a href="academia-beautyprofit.html">BeautyProfit</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <span class="footer-col-title">Empresa</span>
        <ul>
          <li><a href="productos.html">Productos</a></li>
          <li><a href="eventos.html">Eventos</a></li>
          <li><a href="https://wa.me/1809000000" target="_blank">WhatsApp</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-copy">© 2025 Facial Express · Santo Domingo, RD</p>
    <div class="footer-social">
      <a href="#" target="_blank">Instagram</a>
      <a href="#" target="_blank">TikTok</a>
      <a href="#" target="_blank">Facebook</a>
    </div>
  </div>
</footer>`;

// Sticky nav shadow on scroll
document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV);
  document.body.insertAdjacentHTML('beforeend', FOOTER);

  const nav = document.getElementById('mainNav');
  // Mark dark nav pages
  if (document.body.dataset.navDark) nav.classList.add('dark');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.boxShadow = '0 1px 20px rgba(0,0,0,0.07)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      item.classList.toggle('open');
    });
  });
});
