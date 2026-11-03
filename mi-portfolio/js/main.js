// Funcionalidad del Menú Hamburguesa para Dispositivos Móviles
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Cerrar menú al hacer clic en cualquier enlace en versión móvil
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Validación y retroalimentación para el formulario de contacto (Formspree)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'json'
                }
            });

            if (response.ok) {
                formStatus.style.color = '#16a34a';
                formStatus.textContent = '¡Mensaje enviado con éxito! Te responderé pronto.';
                contactForm.reset();
            } else {
                formStatus.style.color = '#dc2626';
                formStatus.textContent = 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';
            }
        } catch (error) {
            formStatus.style.color = '#dc2626';
            formStatus.textContent = 'Error de conexión. Verifica tu red.';
        }
    });
}