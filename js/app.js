<<<<<<<
/* =========================================
   LUXIN PORTFOLIO - JAVASCRIPT
   علیرضا نقدبیشی
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       Header Scroll Effect
    ========================= */

    const header = document.querySelector(".header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }


    /* =========================
       Mobile Menu
    ========================= */

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("active");
            menuButton.classList.toggle("active");
        });

        navigation.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navigation.classList.remove("active");
                menuButton.classList.remove("active");
            });
        });
    }


    /* =========================
       Smooth Scroll
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    /* =========================
       Scroll Reveal
    ========================= */

    const revealElements = document.querySelectorAll(
        ".reveal, .project-card, .skill-card, .about-content, .section-title"
    );

    if (revealElements.length) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    }


    /* =========================
       Back To Top
    ========================= */

    const backTop = document.querySelector(".back-to-top");

    if (backTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                backTop.classList.add("show");
            } else {
                backTop.classList.remove("show");
            }

        });

        backTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================
       Current Year
    ========================= */

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =========================
       Contact Form
    ========================= */

    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const formMessage =
                document.querySelector(".form-message");

            if (formMessage) {

                formMessage.textContent =
                    "پیام شما با موفقیت ثبت شد. به‌زودی با شما تماس می‌گیریم.";

                formMessage.classList.add("success");

            }

            contactForm.reset();

        });

    }


    /* =========================
       Typing Effect
    ========================= */

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

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentWord.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1800);

                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1) % words.length;

                }

            }

            setTimeout(
                typeEffect,
                deleting ? 60 : 100
            );
        }

        typeEffect();
    }


    /* =========================
       Skill Progress Animation
    ========================= */

    const skillBars = document.querySelectorAll(".skill-progress");

    if (skillBars.length) {

        const skillObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const progress =
                            entry.target.dataset.progress;

                        if (progress) {
                            entry.target.style.width =
                                progress + "%";
                        }

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.5
            }
        );

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });

    }


    /* =========================
       Project Cards Hover
    ========================= */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("hovered");
        });

    });


    /* =========================
       Console Message
    ========================= */

    console.log(
        "وب‌سایت شخصی علیرضا نقدبیشی با موفقیت اجرا شد."
    );
// ============================
// SCROLL REVEAL
// ============================


// ============================
// MOBILE MENU
// ============================

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });

    mainNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });
    }
    });
    /* ===== SCROLL REVEAL ===== */

const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();
const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

skillCards.forEach((card) => {
    skillObserver.observe(card);
});
const skillsSection = document.querySelector("#skills");

const skillsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const heading = entry.target.querySelector(".section-heading");
                const cards = entry.target.querySelectorAll(".skill-card");

                heading.classList.add("show");

                cards.forEach((card) => {
                    card.classList.add("show");
                });

                skillsObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2
    }
);

skillsObserver.observe(skillsSection);
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("is-open");
});
const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
    });
});
=======
/* =========================================
   LUXIN PORTFOLIO - JAVASCRIPT
   علیرضا نقدبیشی
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       Header Scroll Effect
    ========================= */

    const header = document.querySelector(".header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }


    /* =========================
       Mobile Menu
    ========================= */

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("active");
            menuButton.classList.toggle("active");
        });

        navigation.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navigation.classList.remove("active");
                menuButton.classList.remove("active");
            });
        });
    }


    /* =========================
       Smooth Scroll
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    /* =========================
       Scroll Reveal
    ========================= */

    const revealElements = document.querySelectorAll(
        ".reveal, .project-card, .skill-card, .about-content, .section-title"
    );

    if (revealElements.length) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    }


    /* =========================
       Back To Top
    ========================= */

    const backTop = document.querySelector(".back-to-top");

    if (backTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                backTop.classList.add("show");
            } else {
                backTop.classList.remove("show");
            }

        });

        backTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================
       Current Year
    ========================= */

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =========================
       Contact Form
    ========================= */

    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const formMessage =
                document.querySelector(".form-message");

            if (formMessage) {

                formMessage.textContent =
                    "پیام شما با موفقیت ثبت شد. به‌زودی با شما تماس می‌گیریم.";

                formMessage.classList.add("success");

            }

            contactForm.reset();

        });

    }


    /* =========================
       Typing Effect
    ========================= */

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

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentWord.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1800);

                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1) % words.length;

                }

            }

            setTimeout(
                typeEffect,
                deleting ? 60 : 100
            );
        }

        typeEffect();
    }


    /* =========================
       Skill Progress Animation
    ========================= */

    const skillBars = document.querySelectorAll(".skill-progress");

    if (skillBars.length) {

        const skillObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const progress =
                            entry.target.dataset.progress;

                        if (progress) {
                            entry.target.style.width =
                                progress + "%";
                        }

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.5
            }
        );

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });

    }


    /* =========================
       Project Cards Hover
    ========================= */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("hovered");
        });

    });


    /* =========================
       Console Message
    ========================= */

    console.log(
        "وب‌سایت شخصی علیرضا نقدبیشی با موفقیت اجرا شد."
    );
// ============================
// SCROLL REVEAL
// ============================


// ============================
// MOBILE MENU
// ============================

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });

    mainNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });
    }
    });
    /* ===== SCROLL REVEAL ===== */

const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();
const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

skillCards.forEach((card) => {
    skillObserver.observe(card);
});
const skillsSection = document.querySelector("#skills");

const skillsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const heading = entry.target.querySelector(".section-heading");
                const cards = entry.target.querySelectorAll(".skill-card");

                heading.classList.add("show");

                cards.forEach((card) => {
                    card.classList.add("show");
                });

                skillsObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2
    }
);

skillsObserver.observe(skillsSection);
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("is-open");
});
const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
    });
})

