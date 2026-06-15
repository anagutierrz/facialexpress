const WA_NUMBER = "18092000000";
const WA_MSG = "Hola! Quiero información sobre los servicios de Facial Express.";

const NAV = `
<nav class="nav" id="mainNav">
  <a href="index.html" class="logo" style="display:flex;align-items:center;">
    <img src="logofacial.png" alt="Facial Express" class="logo-img" 
         onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
    <span style="display:none;font-family:var(--serif);font-size:19px;font-weight:300;letter-spacing:0.14em;text-transform:uppercase;color:var(--white);">Facial <em style="font-style:italic;background:var(--mirror);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Express</em></span>
  </a>
  <ul class="nav-links">
    <li><a href="servicios.html">Servicios</a></li>
    <li><a href="academia.html">Academia</a></li>
    <li><a href="productos.html">Productos</a></li>
    <li><a href="eventos.html">Eventos</a></li>
    <li><a href="academia-beautyprofit.html">BeautyProfit</a></li>
  </ul>
  <a href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}" class="nav-cta" target="_blank">Agendar</a>
  <button class="nav-toggle" aria-label="Menú" id="menuToggle">
    <span></span><span></span><span></span>
  </button>
</nav>`;

const FOOTER = `
<footer>
  <div class="footer-top">
    <a href="index.html" style="display:flex;align-items:center;gap:12px;text-decoration:none;">
      <img src="logofacial.png" alt="Facial Express" style="height:28px;width:auto;filter:brightness(0) invert(0.35);"
           onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <span class="footer-logo" style="display:none;">Facial <em>Express</em></span>
    </a>
    <div class="footer-cols">
      <div class="footer-col">
        <span class="footer-col-title">Servicios</span>
        <ul>
          <li><a href="servicios-facial.html">Faciales</a></li>
          <li><a href="servicios-laser.html">Láser & VÉA Medical</a></li>
          <li><a href="servicios-cejas.html">Cejas & Pestañas</a></li>
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
        <span class="footer-col-title">Contáctanos</span>
        <ul>
          <li><a href="https://wa.me/${WA_NUMBER}" target="_blank">WhatsApp</a></li>
          <li><a href="https://www.instagram.com/facialexpressrd/" target="_blank">@facialexpressrd</a></li>
          <li><a href="productos.html">Productos</a></li>
          <li><a href="eventos.html">Eventos</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-copy">© 2025 Facial Express · Esthetic · Lashes · Brows · Santo Domingo, RD</p>
    <div class="footer-social">
      <a href="https://www.instagram.com/facialexpressrd/" target="_blank">Instagram</a>
      <a href="https://wa.me/${WA_NUMBER}" target="_blank">WhatsApp</a>
    </div>
  </div>
</footer>`;

const WA_BUTTON = `
<a href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}"
   class="wa-float" target="_blank" aria-label="Contactar por WhatsApp">
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
  <span class="wa-float-label">WhatsApp</span>
</a>`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV);
  document.body.insertAdjacentHTML('beforeend', FOOTER);
  document.body.insertAdjacentHTML('beforeend', WA_BUTTON);

  // Nav scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (nav) nav.style.boxShadow = window.scrollY > 60 ? '0 1px 32px rgba(0,0,0,0.45)' : 'none';
  });

  // Mobile menu toggle
  const toggle = document.getElementById('menuToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const links = document.querySelector('.nav-links');
      const isOpen = links.style.display === 'flex';
      links.style.display = isOpen ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '69px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'rgba(10,10,10,0.98)';
      links.style.padding = '24px 32px';
      links.style.gap = '20px';
      links.style.backdropFilter = 'blur(12px)';
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.faq-item').classList.toggle('open'));
  });
});
