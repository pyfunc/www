// Animations Script for PyFunc Website

// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Logo Animation
function initLogoAnimation() {
    const logo = document.querySelector('#pyfunc-logo');
    if (logo) {
        gsap.fromTo(logo,
            { scale: 0.8, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: logo,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }
}

// Project Cards Animation
function animateProjectCards() {
    const projectCards = document.querySelectorAll('#project-list > div');

    projectCards.forEach((card, index) => {
        gsap.fromTo(card,
            {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                delay: index * 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

// Header Animation
function animateHeader() {
    gsap.fromTo('header',
        {
            opacity: 0,
            y: -50
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        }
    );
}

// Hero Section Animation
function animateHeroSection() {
    const heroTitle = document.querySelector('section h2');
    const heroText = document.querySelector('section p');
    const heroCTA = document.querySelector('section .flex');

    if (heroTitle && heroText && heroCTA) {
        const heroTimeline = gsap.timeline();

        heroTimeline
            .fromTo(heroTitle,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
            )
            .fromTo(heroText,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
                '-=0.3'
            )
            .fromTo(heroCTA,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
                '-=0.3'
            );
    }
}

// Initialize All Animations
function initAnimations() {
    animateHeader();
    animateHeroSection();
    initLogoAnimation();
    animateProjectCards();
}

// Run animations when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initAnimations);