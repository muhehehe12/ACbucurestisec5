document.addEventListener('DOMContentLoaded', () => {

    // --- Control Meniu Mobil (Hamburger) ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenuContainer = document.getElementById('mobile-menu-container');
    const mobileLinksList = document.querySelectorAll('.mobile-link');

    hamburgerBtn.addEventListener('click', () => {
        mobileMenuContainer.classList.toggle('active');
    });

    mobileLinksList.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuContainer.classList.remove('active');
        });
    });

    // --- Control Schimbare Limba (RO / EN) ---
    const appBody = document.body;
    const desktopLangBtn = document.getElementById('lang-toggle');
    const mobileLangBtn = document.getElementById('lang-toggle-mobile');

    function switchLanguage() {
        if (appBody.classList.contains('lang-ro')) {
            appBody.classList.replace('lang-ro', 'lang-en');
            desktopLangBtn.textContent = 'RO';
            mobileLangBtn.textContent = 'Versiunea in Romana';
        } else {
            appBody.classList.replace('lang-en', 'lang-ro');
            desktopLangBtn.textContent = 'EN';
            mobileLangBtn.textContent = 'English Version';
        }
    }

    desktopLangBtn.addEventListener('click', switchLanguage);
    mobileLangBtn.addEventListener('click', () => {
        switchLanguage();
        mobileMenuContainer.classList.remove('active');
    });

    // --- Animații la Scroll (Intersection Observer) ---
    const trackedElements = document.querySelectorAll('.scroll-anim');

    const triggerAnimation = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Se rulează o singură dată pentru fluiditate premium
            }
        });
    };

    const configOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.12
    };

    const scrollTrackingObserver = new IntersectionObserver(triggerAnimation, configOptions);

    trackedElements.forEach(element => {
        scrollTrackingObserver.observe(element);
    });
});
