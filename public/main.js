const button = document.querySelector('#info');
const cerrar = document.querySelector('#cerrar-popup');


    button.addEventListener('click', () => {
        console.log('click');
        const popup = document.querySelector('#popup');
        popup.classList.toggle('bottom-0');
    });

    cerrar.addEventListener('click', () => {
        console.log('cerrar');
        const popup = document.querySelector('#popup');
        popup.classList.toggle('bottom-0');
    });