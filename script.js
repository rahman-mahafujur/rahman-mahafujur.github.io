const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// On page load: apply saved theme (if any) so it stays consistent across pages
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
  themeToggleBtn.innerHTML = savedTheme === 'light'
    ? '<i class="fa-solid fa-moon"></i>'
    : '<i class="fa-solid fa-sun"></i>';
}

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  themeToggleBtn.innerHTML = newTheme === 'light' 
    ? '<i class="fa-solid fa-moon"></i>' 
    : '<i class="fa-solid fa-sun"></i>';
});

// Mobile hamburger menu toggle
const menuToggleBtn = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggleBtn && navLinks) {
  menuToggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isOpen = navLinks.classList.contains('active');
    menuToggleBtn.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  // Close menu after tapping a link (so navigation feels normal on mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}