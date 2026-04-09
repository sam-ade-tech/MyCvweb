document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById('menuBtn');
    const navItem = document.getElementById('nav-item');
  
    menuBtn.addEventListener('click', () => {
      navItem.classList.toggle('active');
    });
  });