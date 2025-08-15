// ==== TYPEWRITER EFFECT ====
function typeWriter(el, text, speed = 100, delay = 500) {
    let i = 0;
    el.textContent = "";
    setTimeout(function write() {
        if (i < text.length) {
            el.textContent += text.charAt(i++);
            setTimeout(write, speed);
        }
    }, delay);
}

document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-content h1");
    if (heroText) {
        typeWriter(heroText, heroText.textContent, 100, 500);
    }
});

// ==== SMOOTH SCROLL ON NAVBAR CLICK ====
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==== SCROLL ANIMATIONS ====
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.section, .project, .contact-box').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});

// ==== NAVBAR ACTIVE LINK + BACK TO TOP BUTTON ====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    // Active nav link
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });

    // Back to top toggle
    backToTop.classList.toggle("show", scrollY > 300);
});

// ==== BACK TO TOP CLICK ====
if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
