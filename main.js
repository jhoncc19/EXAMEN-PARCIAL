document.addEventListener('DOMContentLoaded', function() {

    // ==================== MARCAR NAV ACTIVO ====================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else if (currentPage === 'index.html' && href === 'index.html') {
            link.classList.add('active');
        }
    });

    // ==================== SCROLL EFFECT NAVBAR ====================
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ==================== BOTÓN INSCRÍBETE GLOBAL ====================
    const btnInscripcion = document.getElementById('btnInscripcion');
    if (btnInscripcion) {
        btnInscripcion.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'solicita.html';
        });
    }

    // ==================== FORMULARIO ====================
    const formContacto = document.getElementById('formContacto');
    if (formContacto) {
        formContacto.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ ¡Gracias por tu interés!\n\nUn asesor educativo se contactará contigo en las próximas 24 horas.\n\nUniversidad Continental - Transformamos vidas.');
            formContacto.reset();
        });
    }

    // ==================== CONTADORES ANIMADOS ====================
    const counters = document.querySelectorAll('.counter');
    if (counters.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    let count = 0;
                    const increment = target / 50;
                    const updateCount = () => {
                        if (count < target) {
                            count += increment;
                            counter.innerText = Math.ceil(count);
                            setTimeout(updateCount, 20);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    }

    console.log('✅ Universidad Continental - Rediseño cargado');
});
