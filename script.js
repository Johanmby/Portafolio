// Menú Móvil
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    menuIcon.querySelector('i').classList.toggle('bx-x');
    navLinks.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace (Móvil)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.querySelector('i').classList.remove('bx-x');
        navLinks.classList.remove('active');
    });
});

// Resaltar sección activa en el menú al hacer scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
    
    // Navbar estilo al hacer scroll
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = getComputedStyle(document.documentElement).getPropertyValue('--surface-color');
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
        // Añadir backdrop filter inicial a través del css
    }
});

// Animaciones al hacer Scroll (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Solo anima una vez
        }
    });
}, observerOptions);

// Aplicar clase fade-in a elementos que queremos animar
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = [
        '.about-container',
        '.skills-grid .skill-card',
        '.projects-grid .project-card',
        '.contact-container'
    ];
    
    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    });
});


// --- Lógica de Temas e Idiomas ---

const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const rootElement = document.documentElement;

// --- Tema Claro / Oscuro ---
let currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    rootElement.classList.add('light-theme');
    themeToggle.innerHTML = "<i class='bx bx-moon'></i>";
}

themeToggle.addEventListener('click', () => {
    rootElement.classList.toggle('light-theme');
    if (rootElement.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = "<i class='bx bx-moon'></i>";
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = "<i class='bx bx-sun'></i>";
    }
});

// --- Traducciones ---
const translations = {
    es: {
        title: "Johan | Ingeniero de Sistemas & Desarrollador",
        nav_home: "Inicio",
        nav_about: "Sobre Mí",
        nav_skills: "Habilidades",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",
        hero_greeting: "Hola, soy",
        hero_role1: "Ingeniero de Sistemas",
        hero_role2: "Desarrollador de Software",
        hero_desc: "Construyendo soluciones digitales modernas, escalables y con un diseño estético de alta calidad.",
        hero_btn_projects: "Ver Proyectos",
        hero_btn_contact: "Contáctame",
        hero_btn_cv: "CV",
        about_title1: "Sobre",
        about_title2: "Mí",
        about_p1: "Soy un <strong>Ingeniero de Sistemas</strong> apasionado por el desarrollo de software y las nuevas tecnologías. Me especializo en crear aplicaciones web y sistemas robustos que no solo funcionen a la perfección, sino que también ofrezcan una experiencia de usuario increíble.",
        about_p2: "Mi enfoque se basa en la combinación de lógica limpia y diseño estético moderno. Creo que un buen software debe ser tan hermoso por fuera como lo es por dentro.",
        stat_years: "Años de <br>Experiencia",
        stat_projects: "Proyectos <br>Completados",
        stat_clients: "Satisfacción <br>del Cliente",
        skills_title1: "Mis",
        skills_title2: "Habilidades",
        skills_db: "Base de Datos",
        skills_tools: "Herramientas",
        projects_title1: "Proyectos",
        projects_title2: "Destacados",
        p1_title: "Dashboard Analítico",
        p1_desc: "Una plataforma de análisis de datos con gráficos en tiempo real, autenticación segura y tema oscuro moderno.",
        p2_title: "Plataforma E-commerce",
        p2_desc: "Tienda en línea completa con pasarela de pagos integrada, carrito dinámico y panel de administración.",
        p3_title: "App de Gestión",
        p3_desc: "Sistema de gestión de tareas y proyectos para equipos remotos, con notificaciones y chat en vivo.",
        p_link: "Ver Proyecto",
        contact_title1: "Trabajemos",
        contact_title2: "Juntos",
        contact_h3: "¿Tienes un proyecto en mente?",
        contact_p: "Estoy disponible para trabajos freelance y nuevas oportunidades laborales. Envíame un mensaje y hablemos de tecnología.",
        contact_location: "Colombia",
        contact_ph_name: "Tu Nombre",
        contact_ph_email: "Tu Email",
        contact_ph_subject: "Asunto del Mensaje",
        contact_ph_msg: "Tu Mensaje...",
        contact_btn: "Enviar Mensaje",
        footer: "&copy; 2026 Johan Dev. Todos los derechos reservados."
    },
    en: {
        title: "Johan | Systems Engineer & Developer",
        nav_home: "Home",
        nav_about: "About Me",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hi, I am",
        hero_role1: "Systems Engineer",
        hero_role2: "Software Developer",
        hero_desc: "Building modern, scalable digital solutions with high-quality aesthetic design.",
        hero_btn_projects: "View Projects",
        hero_btn_contact: "Contact Me",
        hero_btn_cv: "Resume",
        about_title1: "About",
        about_title2: "Me",
        about_p1: "I am a <strong>Systems Engineer</strong> passionate about software development and new technologies. I specialize in creating web applications and robust systems that not only work perfectly but also offer an incredible user experience.",
        about_p2: "My approach is based on the combination of clean logic and modern aesthetic design. I believe good software should be as beautiful on the outside as it is on the inside.",
        stat_years: "Years of <br>Experience",
        stat_projects: "Completed <br>Projects",
        stat_clients: "Client <br>Satisfaction",
        skills_title1: "My",
        skills_title2: "Skills",
        skills_db: "Database",
        skills_tools: "Tools",
        projects_title1: "Featured",
        projects_title2: "Projects",
        p1_title: "Analytics Dashboard",
        p1_desc: "A data analysis platform with real-time charts, secure authentication, and a modern dark theme.",
        p2_title: "E-commerce Platform",
        p2_desc: "Complete online store with integrated payment gateway, dynamic cart, and admin panel.",
        p3_title: "Management App",
        p3_desc: "Task and project management system for remote teams, with notifications and live chat.",
        p_link: "View Project",
        contact_title1: "Let's Work",
        contact_title2: "Together",
        contact_h3: "Have a project in mind?",
        contact_p: "I am available for freelance work and new job opportunities. Send me a message and let's talk technology.",
        contact_location: "Colombia",
        contact_ph_name: "Your Name",
        contact_ph_email: "Your Email",
        contact_ph_subject: "Message Subject",
        contact_ph_msg: "Your Message...",
        contact_btn: "Send Message",
        footer: "&copy; 2026 Johan Dev. All rights reserved."
    }
};

let currentLang = localStorage.getItem('language') || 'es';
rootElement.setAttribute('lang', currentLang);
langToggle.textContent = currentLang === 'es' ? 'EN' : 'ES';

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    document.querySelectorAll('[data-placeholder]').forEach(el => {
        const key = el.getAttribute('data-placeholder');
        if (translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });
}

// Inicializar idioma si está en inglés
if (currentLang === 'en') {
    setLanguage('en');
}

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('language', currentLang);
    rootElement.setAttribute('lang', currentLang);
    langToggle.textContent = currentLang === 'es' ? 'EN' : 'ES';
    setLanguage(currentLang);
});

// --- Integración con EmailJS ---
(function() {
    // Inicializar EmailJS con tu Public Key
    if (typeof emailjs !== 'undefined') {
        emailjs.init({
          publicKey: "AuBXC9BYczA6qYY7Z",
        });
    }
})();

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar recarga de página
        
        // Estado de carga
        const originalText = btnText.textContent;
        const currentLanguage = document.documentElement.getAttribute('lang') || 'es';
        btnText.textContent = currentLanguage === 'es' ? 'Enviando...' : 'Sending...';
        submitBtn.disabled = true;
        
        // Enviar el formulario usando el Service ID y Template ID proporcionados
        emailjs.sendForm('service_uoctmpn', 'template_6taxbjo', this)
            .then(() => {
                // Éxito
                btnText.textContent = originalText;
                submitBtn.disabled = false;
                
                formMessage.style.display = 'block';
                formMessage.style.color = '#4caf50'; // Verde (éxito)
                formMessage.textContent = currentLanguage === 'es' 
                    ? '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.' 
                    : 'Message sent successfully! I will get back to you soon.';
                
                // Limpiar el formulario
                contactForm.reset();
                
                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
                
            }, (error) => {
                // Error
                console.error('EmailJS Error:', error);
                btnText.textContent = originalText;
                submitBtn.disabled = false;
                
                formMessage.style.display = 'block';
                formMessage.style.color = '#f44336'; // Rojo (error)
                formMessage.textContent = currentLanguage === 'es' 
                    ? 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo más tarde.' 
                    : 'There was an error sending the message. Please try again later.';
            });
    });
}

