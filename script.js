document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuList = document.querySelector('.menubar ul');
  
    hamburgerMenu.addEventListener('click', function () {
      menuList.classList.toggle('show');
    });
  });
  


