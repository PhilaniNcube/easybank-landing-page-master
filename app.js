const menu = document.querySelector('.toggle-menu');
const navList = document.querySelector('.nav-items');

menu.addEventListener('click', () => {
  menu.classList.toggle('close');
  navList.classList.toggle('active');
});
