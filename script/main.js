document.addEventListener('DOMContentLoaded', function () {

    // Efeito de "scroll" na barra de navegação
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ScrollReveal para animações de scroll
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });

    sr.reveal('.home-content', { origin: 'left' });
    sr.reveal('.home-img', { origin: 'right', delay: 400 });
    sr.reveal('.section-title');
    sr.reveal('#sobre .row', {});
    sr.reveal('.portfolio-item', { interval: 200 });

    // Lógica para destacar o link ativo na navbar
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function navHighlighter() {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            let sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') == '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', navHighlighter);

    // Adicionar lógica de formulário aqui, se desejar

});