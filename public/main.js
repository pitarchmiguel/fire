const button = document.querySelector('#info');
const closed = document.querySelector('#cerrar-popup');

button.addEventListener('click', () => {
    console.log('Button clicked');
    const popup = document.querySelector('#popup');
    popup.classList.toggle('bottom-0');
});

closed.addEventListener('click', () => {
    console.log('Closed clicked');
    const popup = document.querySelector('#popup');
    popup.classList.toggle('bottom-0');
});