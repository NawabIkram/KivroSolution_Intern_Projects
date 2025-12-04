// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Add animation to button
    const submitBtn = this.querySelector('.submit-btn');
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    submitBtn.style.background = 'var(--gradient-2)';
    
    // Show alert after a short delay for better UX
    setTimeout(() => {
        alert('Message Sent! I will get back to you soon.');
        this.reset();
        submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
        submitBtn.style.background = 'var(--gradient-1)';
    }, 1000);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.97)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Animate skill bars when they come into view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                // Reset width to 0 then animate to full width
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 300);
            });
        }
    });
}, observerOptions);

// Observe the about section for skill bar animation
const aboutSection = document.getElementById('about');
observer.observe(aboutSection);

// Add animation to project cards on scroll
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            entry.target.style.opacity = '0';
        }
    });
}, { threshold: 0.1 }); 

// Observe all project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    projectObserver.observe(card);
});

// Add hover effect to contact items with delay for staggered animation
document.querySelectorAll('.contact-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});

// Enhanced image hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    const image = card.querySelector('.project-image img');
    const overlay = card.querySelector('.project-overlay');
    
    card.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)';
        overlay.style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
        overlay.style.opacity = '0';
    });
});

// Home section animations
window.addEventListener('load', () => {
    // Ensure home section animations run on page load
    const homeSection = document.getElementById('home');
    homeSection.style.opacity = '1';
});