// Mobile menu toggle
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navbarMenu.classList.remove('active');
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

// Scroll indicator click handler
const scrollIndicator = document.querySelector('.scroll-indicator');
scrollIndicator.addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Login Modal Functionality
const modal = document.getElementById('loginModal');
const startInvestingBtn = document.getElementById('startInvestingBtn');
const closeModalBtn = document.querySelector('.close-modal');
const loginForm = document.getElementById('loginForm');

// Open modal
startInvestingBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

// Close modal
const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
};

closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Prevent modal close when clicking inside the modal
modal.querySelector('.login-modal').addEventListener('click', (e) => {
    e.stopPropagation();
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);
    const email = formData.get('email');
    const password = formData.get('password');
    
    // Here you would typically send the login data to a server
    console.log('Login attempt:', { email, password });
    
    // For demo purposes, show success message
    alert('Login successful!');
    closeModal();
    loginForm.reset();
});

// Form submission handler for contact form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}