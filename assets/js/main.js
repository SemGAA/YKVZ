document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            
            // Disable scroll when menu is open
            if (nav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav && nav.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll reveal animation
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1000,
            delay: 200,
            reset: true
        });
        
        sr.reveal('.stat-card, .product-card, .news-card', { 
            interval: 200,
            distance: '40px'
        });
    }
    
    // Add active class to current section in viewport
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav__link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Form validation for contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = this.querySelector('input[name="name"]');
            const emailInput = this.querySelector('input[name="email"]');
            const messageInput = this.querySelector('textarea[name="message"]');
            let isValid = true;
            
            // Simple validation
            if (nameInput && nameInput.value.trim() === '') {
                nameInput.classList.add('error');
                isValid = false;
            } else if (nameInput) {
                nameInput.classList.remove('error');
            }
            
            if (emailInput && (emailInput.value.trim() === '' || !emailInput.value.includes('@'))) {
                emailInput.classList.add('error');
                isValid = false;
            } else if (emailInput) {
                emailInput.classList.remove('error');
            }
            
            if (messageInput && messageInput.value.trim() === '') {
                messageInput.classList.add('error');
                isValid = false;
            } else if (messageInput) {
                messageInput.classList.remove('error');
            }
            
            if (isValid) {
                // Here you would typically send the form data to the server
                alert('Форма успешно отправлена!');
                this.reset();
            }
        });
    }
});