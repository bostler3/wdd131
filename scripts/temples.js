const today = new Date();
currentyear.innerHTML = today.getFullYear();
currentdatetime.innerHTML = document.lastModified;
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});