
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById('menuBtn');
    const navItem = document.getElementById('nav-item');
  
    menuBtn.addEventListener('click', () => {
      navItem.classList.toggle('active');
    });
  });
  const bars = document.querySelectorAll(".bar-fill");

  setTimeout(() => {
    bars.forEach(bar => {
      bar.style.width = bar.dataset.pct + "%";
    });
  }, 200);