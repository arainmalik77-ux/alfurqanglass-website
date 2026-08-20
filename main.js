// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  // Contact form -> WhatsApp
  const form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const wa = form.whatsapp ? form.whatsapp.value.trim() : '';
      const service = form.service.value;
      const message = form.message ? form.message.value.trim() : '';

      let text = `Hello AL Furqan Glass, I'd like to request a free quote.%0A`;
      text += `Name: ${encodeURIComponent(name)}%0A`;
      text += `Phone: ${encodeURIComponent(phone)}%0A`;
      if (wa) text += `WhatsApp: ${encodeURIComponent(wa)}%0A`;
      if (service) text += `Service: ${encodeURIComponent(service)}%0A`;
      if (message) text += `Details: ${encodeURIComponent(message)}%0A`;

      window.open(`https://wa.me/966542562535?text=${text}`, '_blank');
      const note = document.getElementById('formNote');
      if (note) note.classList.remove('hidden');
      form.reset();
    });
  }

  // Gallery filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('btn-primary'));
        filterBtns.forEach(b => b.classList.add('btn-outline-dark'));
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-outline-dark');
        const cat = btn.dataset.filter;
        galleryItems.forEach(item => {
          if (cat === 'all' || item.dataset.category === cat) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
});
