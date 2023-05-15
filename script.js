const menuLanche = document.querySelector('.menu-lanche');

const menu = document.querySelector('.menu');

menuLanche.addEventListener('click', () => {
    menu.classList.toggle('active')
})