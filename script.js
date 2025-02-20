// Mobile Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Show Menu
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Hide Menu
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Hide menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
})

// Change Header Background on Scroll
function scrollHeader() {
    const header = document.querySelector('.header')
    if(this.scrollY >= 50) {
        header.style.backgroundColor = '#ffffff'
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'
    } else {
        header.style.backgroundColor = 'transparent'
        header.style.boxShadow = 'none'
    }
}
window.addEventListener('scroll', scrollHeader)

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.hero-content, .section-title', {})
sr.reveal('.feature-card', {delay: 600, distance: '100px', interval: 100})
sr.reveal('.bridge-card', {delay: 400, distance: '60px', interval: 200})
sr.reveal('.bridge-block', {delay: 500, distance: '80px', interval: 150})
sr.reveal('.bridge-cta', {delay: 600, distance: '40px'})
sr.reveal('.footer-content', {delay: 200, distance: '60px'})

// Intersection Observer for Bridge Section Animations
const animateElements = document.querySelectorAll('.animate-fade-up, .animate-slide-right, .animate-slide-left')

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.2s'
            entry.target.style.animationPlayState = 'running'
            observer.unobserve(entry.target)
        }
    })
}, observerOptions)

animateElements.forEach(element => {
    element.style.animationPlayState = 'paused'
    observer.observe(element)
})
