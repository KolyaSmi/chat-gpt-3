
window.addEventListener('load', () => {
    const openButton = document.querySelector('.open-modal'),
        closeButton = document.querySelector('.modal-close');

    let modal = document.querySelector('.more');

    openButton?.addEventListener('click', () => {
        modal?.classList.add('more--active');
    });

    closeButton?.addEventListener('click', () => {
        modal?.classList.remove('more--active');
    });
});