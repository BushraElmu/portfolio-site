(function() {
    const btn = document.querySelector('.nav-display');
    if(!btn) return;

    const isOpen = () => btn.getAttribute('aria-expanded') === 'true';
    const open   = () => btn.setAttribute('aria-expanded', 'true');
    const close  = () => btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        isOpen() ? close() : open();
    });
})();