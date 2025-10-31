(function() {
    const btn = document.querySelector('.nav-display');
    const menu = document.querySelector('.nav-dropdown');
    if(!btn) return;

    const isOpen = () => btn.getAttribute('aria-expanded') === 'true';
    const open   = () => btn.setAttribute('aria-expanded', 'true');
    const close  = () => btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        isOpen() ? close() : open();
    });

    document.addEventListener('click', (e) => {
        if (!isOpen()) return;
        if (btn.contains(e.target) || menu.contains(e.target)) return;
        close();
    });
})();