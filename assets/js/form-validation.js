document.addEventListener('DOMContentLoaded', function() {
    // Contact form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = this.querySelector('#contact-name');
            const emailInput = this.querySelector('#contact-email');
            const messageInput = this.querySelector('#contact-message');
            let isValid = true;
            
            // Reset errors
            this.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            
            // Validate name
            if (nameInput.value.trim() === '') {
                nameInput.classList.add('error');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailInput.classList.add('error');
                isValid = false;
            }
            
            // Validate message
            if (messageInput.value.trim() === '') {
                messageInput.classList.add('error');
                isValid = false;
            }
            
            if (isValid) {
                // Here you would typically send the form data to the server
                alert('Ваше сообщение успешно отправлено!');
                this.reset();
            } else {
                // Scroll to first error
                const firstError = this.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }
    
    // Subscribe form validation
    const subscribeForms = document.querySelectorAll('.subscribe-form');
    subscribeForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(emailInput.value.trim())) {
                emailInput.classList.add('error');
                emailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                emailInput.classList.remove('error');
                alert('Спасибо за подписку!');
                this.reset();
            }
        });
    });
    
    // Comment form validation
    const commentForm = document.querySelector('.comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = this.querySelector('#comment-name');
            const emailInput = this.querySelector('#comment-email');
            const textInput = this.querySelector('#comment-text');
            let isValid = true;
            
            // Reset errors
            this.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            
            // Validate name
            if (nameInput.value.trim() === '') {
                nameInput.classList.add('error');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailInput.classList.add('error');
                isValid = false;
            }
            
            // Validate comment text
            if (textInput.value.trim() === '') {
                textInput.classList.add('error');
                isValid = false;
            }
            
            if (isValid) {
                // Here you would typically send the comment to the server
                alert('Ваш комментарий успешно отправлен и будет опубликован после модерации.');
                this.reset();
            } else {
                // Scroll to first error
                const firstError = this.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }
});