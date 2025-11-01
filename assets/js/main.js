(function() {
    const btn = document.querySelector('.nav-display');
    const menu = document.querySelector('.nav-dropdown');
    if(!btn) return;

    const isOpen = () => btn.getAttribute('aria-expanded') === 'true';
    const open   = () => btn.setAttribute('aria-expanded', 'true');
    const close  = () => btn.setAttribute('aria-expanded', 'false');

    // Toggle on button click
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        isOpen() ? close() : open();
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!isOpen()) return;
        if (btn.contains(e.target) || menu.contains(e.target)) return;
        close();
    });

    // Smooth scroll then close on click menu item
    menu.addEventListener('click', (e) => {
        const a = e.target.closest('a[href^="#"], a[href^="/#"]');
        if (!a) return;
        const href   = a.getAttribute('href');
        const id     = href.replace(/^\/?#/,'');
        const target = document.getElementById(id);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({behaviour: 'smooth', block: 'start'});
        }
        close();
    });  
})();