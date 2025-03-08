// JavaScript for Phumlani - Your Personal Barber

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function (event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            event.preventDefault();
            alert('Please fill out all fields.');
        } else if (!validateEmail(email)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});
