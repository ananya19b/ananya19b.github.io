const menuButton=document.getElementById('menu-button');
const nav=document.getElementById('primary-nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
