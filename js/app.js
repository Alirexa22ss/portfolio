/* =========================================
   LUXIN PORTFOLIO - JAVASCRIPT
   علیرضا نقدبیشی
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Header
    const header = document.querySelector(".site-header");

    if (header) {
        const updateHeader = () => {
            header.classList.toggle("scrolled", window.scrollY > 50);
        };
        updateHeader();
        window.addEventListener("scroll", updateHeader, { passive: true });
    }

    // Mobile menu
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {
       menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");

    mainNav.classList.toggle("open", isOpen);
    mainNav.classList.toggle("active", isOpen);

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("is-open");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Smooth internal navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Reveal animation
    const revealElements = document.querySelectorAll(
        ".reveal, .project-card, .skill-card, .section-title, .section-heading"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("show", "active");
                obs.unobserve(entry.target);
            });
        }, { threshold: 0.12 });

        revealElements.forEach(element => observer.observe(element));
    } else {
        revealElements.forEach(element => {
            element.classList.add("show", "active");
        });
    }

    // Typing effect
    const typingElement = document.querySelector(".typing-text");

    if (typingElement) {
        const words = [
            "طراح وب",
            "توسعه‌دهنده فرانت‌اند",
            "طراح رابط کاربری",
            "علاقه‌مند به تکنولوژی"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        const typeEffect = () => {
            const word = words[wordIndex];

            if (!deleting) {
                typingElement.textContent = word.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === word.length) {
                    deleting = true;
                    setTimeout(typeEffect, 1800);
                    return;
                }
            } else {
                typingElement.textContent = word.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    deleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            }

            setTimeout(typeEffect, deleting ? 60 : 100);
        };

        typeEffect();
    }

    // Skill bars
    const skillBars = document.querySelectorAll(".skill-progress");

    if ("IntersectionObserver" in window && skillBars.length) {
        const skillObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const progress = entry.target.dataset.progress;
                if (progress) {
                    entry.target.style.width = `${progress}%`;
                }

                obs.unobserve(entry.target);
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => skillObserver.observe(bar));
    }

    // Back to top
    const backTop = document.querySelector(".back-to-top");

    if (backTop) {
        const updateBackTop = () => {
            backTop.classList.toggle("show", window.scrollY > 500);
        };

        updateBackTop();
        window.addEventListener("scroll", updateBackTop, { passive: true });

        backTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Current year
    const yearElement = document.querySelector("#current-year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Contact form
    const contactForm = document.querySelector("#contact-form") ||
                        document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();

            const formMessage = document.querySelector(".form-message");
            if (formMessage) {
                formMessage.textContent =
                    "پیام شما با موفقیت ثبت شد. به‌زودی با شما تماس می‌گیریم.";
                formMessage.classList.add("success");
            }

            contactForm.reset();
        });
    }

    console.log("وب‌سایت شخصی علیرضا نقدبیشی با موفقیت اجرا شد.");
});
