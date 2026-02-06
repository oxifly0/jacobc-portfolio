// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));

// Fullscreen media modal
const modal = document.getElementById('mediaModal');
const modalContent = document.getElementById('modalContent');

document.querySelectorAll('.card img, .card video').forEach(media => {
  media.addEventListener('click', () => {
    modalContent.innerHTML = '';

    const clone = media.cloneNode(true);
    clone.controls = true;
    modalContent.appendChild(clone);

    modal.classList.add('active');
  });
});

modal.addEventListener('click', () => {
  modal.classList.remove('active');
  modalContent.innerHTML = '';
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modal.classList.remove('active');
    modalContent.innerHTML = '';
  }
});
