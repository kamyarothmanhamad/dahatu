document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Reveal animations
    gsap.utils.toArray('.reveal').forEach(function(elem) {
        ScrollTrigger.create({
            trigger: elem,
            start: "top 80%",
            end: "bottom 20%",
            markers: false,
            onEnter: function() {
                gsap.fromTo(elem, {y: 100, autoAlpha: 0}, {
                    duration: 1.25, 
                    y: 0, 
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                });
            },
            onLeave: function() {
                gsap.fromTo(elem, {autoAlpha: 1}, {autoAlpha: 0, overwrite: "auto"});
            },
            onEnterBack: function() {
                gsap.fromTo(elem, {y: -100, autoAlpha: 0}, {
                    duration: 1.25, 
                    y: 0, 
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                });
            },
            onLeaveBack: function() {
                gsap.fromTo(elem, {autoAlpha: 1}, {autoAlpha: 0, overwrite: "auto"});
            }
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission (you'll need to replace this with a service like Formspree)
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted! (This is a placeholder - implement actual form submission)');
    });
});
