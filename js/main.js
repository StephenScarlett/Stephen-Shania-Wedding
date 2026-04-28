/* ═══════════════════════════════════════════════════════════
   Stephen & Shania Wedding — Main JavaScript
   Tab switching, countdown, lightbox
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initCountdown();
    initLightbox();
    initMobileNav();
    initFadeOnScroll();
});

/* ═══════════════════ TAB SWITCHING ═══════════════════ */

function initTabs() {
    const navLinks = document.querySelectorAll('.nav-link[data-tab]');
    const sections = document.querySelectorAll('.tab-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-tab');

            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Show target section, hide others
            sections.forEach(section => {
                section.classList.toggle('active', section.id === targetId);
            });

            // Scroll to the active section (past the hero)
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            // Close mobile nav if open
            const navLinksContainer = document.getElementById('navLinks');
            const navToggle = document.getElementById('navToggle');
            navLinksContainer.classList.remove('open');
            navToggle.classList.remove('open');
        });
    });
}

/* ═══════════════════ COUNTDOWN TIMER ═══════════════════ */

function initCountdown() {
    // Wedding date: May 16, 2026 at 4:30 PM Trinidad time (AST = UTC-4)
    const weddingDate = new Date('2026-05-16T16:30:00-04:00');

    function updateCountdown() {
        const now = new Date();
        const diff = weddingDate - now;

        if (diff <= 0) {
            document.getElementById('countdown-days').textContent = '0';
            document.getElementById('countdown-hours').textContent = '0';
            document.getElementById('countdown-minutes').textContent = '0';
            document.getElementById('countdown-seconds').textContent = '0';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('countdown-days').textContent = days;
        document.getElementById('countdown-hours').textContent = hours;
        document.getElementById('countdown-minutes').textContent = minutes;
        document.getElementById('countdown-seconds').textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/* ═══════════════════ LIGHTBOX ═══════════════════ */

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!lightbox || galleryItems.length === 0) return;

    let currentIndex = 0;

    // Collect image sources from gallery
    function getImageSrc(item) {
        const img = item.querySelector('img.gallery-img');
        if (img) return img.src;
        return null;
    }

    function openLightbox(index) {
        const src = getImageSrc(galleryItems[index]);
        if (!src) return; // Don't open lightbox for placeholders

        currentIndex = index;
        lightboxImg.src = src;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        lightboxImg.src = '';
        document.body.style.overflow = '';
    }

    function navigate(direction) {
        // Find next/prev item that has an actual image
        let newIndex = currentIndex;
        const total = galleryItems.length;

        for (let i = 1; i <= total; i++) {
            const idx = (currentIndex + direction * i + total) % total;
            if (getImageSrc(galleryItems[idx])) {
                newIndex = idx;
                break;
            }
        }

        if (newIndex !== currentIndex) {
            openLightbox(newIndex);
        }
    }

    // Click on gallery items
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });

    // Close
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Navigation
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); navigate(-1); });
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); navigate(1); });

    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigate(-1);
        if (e.key === 'ArrowRight') navigate(1);
    });
}

/* ═══════════════════ MOBILE NAV ═══════════════════ */

function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });
}

/* ═══════════════════ FADE ON SCROLL ═══════════════════ */

function initFadeOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
}
