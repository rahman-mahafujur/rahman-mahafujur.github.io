const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  htmlElement.setAttribute('data-theme', newTheme);
  
  themeToggleBtn.innerHTML = newTheme === 'light' 
    ? '<i class="fa-solid fa-moon"></i>' 
    : '<i class="fa-solid fa-sun"></i>';
});