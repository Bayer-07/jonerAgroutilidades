// JavaScript para o menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.getElementById('nav-overlay');

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    mobileMenu.addEventListener('click', toggleMobileMenu);

    // Fechar menu mobile ao clicar no overlay
    navOverlay.addEventListener('click', closeMobileMenu);

    // Fechar menu mobile ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Fechar menu mobile ao redimensionar a tela
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
});
