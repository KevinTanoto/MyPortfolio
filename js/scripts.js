// ===== Mobile Menu Toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});

// ===== Back to Top Button =====
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll(
    '.timeline-item, .education-card, .project-card, .skill-category, .stat-card, .highlight-post, .publication-banner'
).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== Dynamic Year =====
document.getElementById('current-year').textContent = new Date().getFullYear();

// ===== Horizontal Scroll with Mouse Wheel =====
document.querySelectorAll('.projects-grid, .trips-slider').forEach(slider => {
    slider.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            slider.scrollBy({ left: e.deltaY * 2, behavior: 'smooth' });
        }
    }, { passive: false });
});

// ===== Slider Arrow Buttons =====
document.querySelectorAll('.slider-arrow').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.closest('.slider-wrapper').querySelector('.projects-grid, .trips-slider');
        const scrollAmount = 360;
        if (btn.classList.contains('slider-arrow--left')) {
            target.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            target.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    });
});

// ===== Navbar scroll effect =====
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'var(--border)';
    } else {
        navbar.style.borderBottomColor = 'transparent';
    }
});
