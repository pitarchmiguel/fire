const button = document.querySelector('#info');
const cerrar = document.querySelector('#cerrar-popup');

if (button) {
    button.addEventListener('click', () => {
        const popup = document.querySelector('#popup');
        popup?.classList.toggle('bottom-0');
    });
}

if (cerrar) {
    cerrar.addEventListener('click', () => {
        const popup = document.querySelector('#popup');
        popup?.classList.toggle('bottom-0');
    });
}