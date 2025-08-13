// ==== TYPEWRITER EFFECT FOR "Hawa Mubarak" ====
document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-content h1");
    const originalText = heroText.textContent;
    heroText.textContent = "";
    let i = 0;

    function typeWriter() {
        if (i < originalText.length) {
            heroText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    setTimeout(typeWriter, 500); // slight delay
});

// ==== SMOOTH SCROLL ON NAVBAR CLICK ====
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ==== SCROLL ANIMATIONS ====
const observerOptions = {
    threshold: 0.2
};

const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(revealOnScroll, observerOptions);
document.querySelectorAll('.section, .project, .contact-box').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});

// ==== ACTIVE NAV LINK ON SCROLL ====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});
