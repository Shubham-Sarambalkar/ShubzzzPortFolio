/* =========================================================
   SHUBHAM PORTFOLIO V2
   JAVASCRIPT
========================================================= */


/* =========================================================
   WAIT FOR PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       LOADER
    ===================================================== */

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 2200);

    });



    /* =====================================================
       CUSTOM CURSOR
    ===================================================== */

    const cursorDot =
        document.querySelector(".cursor-dot");

    const cursorRing =
        document.querySelector(".cursor-ring");


    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;


        if (cursorDot) {

            cursorDot.style.left =
                mouseX + "px";

            cursorDot.style.top =
                mouseY + "px";

        }

    });


    function animateCursor() {

        ringX +=
            (mouseX - ringX) * 0.12;

        ringY +=
            (mouseY - ringY) * 0.12;


        if (cursorRing) {

            cursorRing.style.left =
                ringX + "px";

            cursorRing.style.top =
                ringY + "px";

        }


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();



    /* =====================================================
       CURSOR HOVER EFFECT
    ===================================================== */

    const hoverElements =
        document.querySelectorAll(
            "a, button, .project, .skill-row, .hero-core"
        );


    hoverElements.forEach((element) => {

        element.addEventListener(
            "mouseenter",
            () => {

                document.body.classList.add(
                    "cursor-hover"
                );

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                document.body.classList.remove(
                    "cursor-hover"
                );

            }
        );

    });



    /* =====================================================
       PARTICLES
    ===================================================== */

    const particleContainer =
        document.getElementById("particles");


    if (particleContainer) {

        const particleCount = 80;


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const particle =
                document.createElement("span");


            particle.classList.add(
                "particle"
            );


            particle.style.left =
                Math.random() * 100 + "%";


            particle.style.top =
                Math.random() * 100 + "%";


            particle.style.animationDuration =
                5 + Math.random() * 10 + "s";


            particle.style.animationDelay =
                Math.random() * 8 + "s";


            particle.style.opacity =
                Math.random();


            particleContainer.appendChild(
                particle
            );

        }

    }



    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });



    /* =====================================================
       SKILL BAR ANIMATION
    ===================================================== */

    const skillRows =
        document.querySelectorAll(
            ".skill-row"
        );


    const skillObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        const row =
                            entry.target;


                        const skill =
                            row.dataset.skill;


                        row.style.setProperty(
                            "--skill-width",
                            skill + "%"
                        );


                        row.classList.add(
                            "show"
                        );


                        skillObserver.unobserve(
                            row
                        );

                    }

                });

            },
            {
                threshold: 0.4
            }
        );


    skillRows.forEach((row) => {

        skillObserver.observe(row);

    });



    /* =====================================================
       MAGNETIC BUTTONS
    ===================================================== */

    const magneticElements =
        document.querySelectorAll(
            ".magnetic"
        );


    magneticElements.forEach((element) => {


        element.addEventListener(
            "mousemove",
            (e) => {

                const rect =
                    element.getBoundingClientRect();


                const x =
                    e.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    e.clientY -
                    rect.top -
                    rect.height / 2;


                element.style.transform =
                    `translate(${x * 0.15}px,
                               ${y * 0.15}px)`;

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                element.style.transform =
                    "translate(0, 0)";

            }
        );

    });



    /* =====================================================
       3D HERO CARD TILT
    ===================================================== */

    const heroCard =
        document.querySelector(
            ".hero-core"
        );


    if (heroCard) {


        heroCard.addEventListener(
            "mousemove",
            (e) => {

                const rect =
                    heroCard.getBoundingClientRect();


                const x =
                    e.clientX -
                    rect.left;


                const y =
                    e.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -8;


                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    8;


                heroCard.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateZ(10px)`;

            }
        );


        heroCard.addEventListener(
            "mouseleave",
            () => {

                heroCard.style.transform =
                    "perspective(1000px) rotateX(0deg) rotateY(0deg)";

            }
        );

    }



    /* =====================================================
       PROJECT CARD TILT
    ===================================================== */

    const projects =
        document.querySelectorAll(
            ".project"
        );


    projects.forEach((project) => {


        project.addEventListener(
            "mousemove",
            (e) => {

                const visual =
                    project.querySelector(
                        ".project-visual"
                    );


                if (!visual) return;


                const rect =
                    project.getBoundingClientRect();


                const x =
                    e.clientX -
                    rect.left;


                const y =
                    e.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -2;


                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    2;


                visual.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }
        );


        project.addEventListener(
            "mouseleave",
            () => {

                const visual =
                    project.querySelector(
                        ".project-visual"
                    );


                if (visual) {

                    visual.style.transform =
                        "";

                }

            }
        );

    });



    /* =====================================================
       NAVBAR ACTIVE SECTION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-item"
        );


    window.addEventListener(
        "scroll",
        () => {

            let currentSection = "";


            sections.forEach((section) => {

                const sectionTop =
                    section.offsetTop -
                    200;


                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >=
                        sectionTop &&
                    window.scrollY <
                        sectionTop +
                        sectionHeight
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            });


            navLinks.forEach((link) => {

                link.classList.remove(
                    "active"
                );


                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    href ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });

        }
    );



    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar =
        document.querySelector(
            ".navbar"
        );


    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 50
            ) {

                navbar.style.background =
                    "rgba(5,5,5,.85)";

                navbar.style.borderBottom =
                    "1px solid rgba(255,255,255,.1)";

            } else {

                navbar.style.background =
                    "rgba(5,5,5,.55)";

            }

        }
    );



    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    const heroVisual =
        document.querySelector(
            ".hero-visual"
        );


    window.addEventListener(
        "scroll",
        () => {

            if (!heroVisual) return;


            const scroll =
                window.scrollY;


            if (scroll < window.innerHeight) {

                heroVisual.style.transform =
                    `translateY(${scroll * 0.12}px)`;

            }

        }
    );



    /* =====================================================
       MOUSE PARALLAX BACKGROUND
    ===================================================== */

    const glow1 =
        document.querySelector(
            ".glow-1"
        );


    const glow2 =
        document.querySelector(
            ".glow-2"
        );


    document.addEventListener(
        "mousemove",
        (e) => {

            const x =
                (e.clientX /
                    window.innerWidth -
                    0.5) *
                50;


            const y =
                (e.clientY /
                    window.innerHeight -
                    0.5) *
                50;


            if (glow1) {

                glow1.style.transform =
                    `translate(${x}px, ${y}px)`;

            }


            if (glow2) {

                glow2.style.transform =
                    `translate(${-x}px, ${-y}px)`;

            }

        }
    );



    /* =====================================================
       SMOOTH ANCHOR SCROLL
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach((link) => {


        link.addEventListener(
            "click",
            (e) => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    e.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.querySelector(
            ".menu-toggle"
        );


    const navMenu =
        document.querySelector(
            ".nav-menu"
        );


    if (
        menuToggle &&
        navMenu
    ) {


        menuToggle.addEventListener(
            "click",
            () => {

                navMenu.classList.toggle(
                    "mobile-open"
                );


                menuToggle.classList.toggle(
                    "open"
                );

            }
        );


        navMenu
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        navMenu.classList.remove(
                            "mobile-open"
                        );

                        menuToggle.classList.remove(
                            "open"
                        );

                    }
                );

            });

    }



    /* =====================================================
       MOUSE TRAIL
    ===================================================== */

    let lastTrailTime = 0;


    document.addEventListener(
        "mousemove",
        (e) => {

            const now =
                Date.now();


            if (
                now - lastTrailTime <
                80
            ) {

                return;

            }


            lastTrailTime = now;


            const trail =
                document.createElement(
                    "div"
                );


            trail.className =
                "mouse-trail";


            trail.style.left =
                e.clientX + "px";


            trail.style.top =
                e.clientY + "px";


            document.body.appendChild(
                trail
            );


            setTimeout(() => {

                trail.remove();

            }, 500);

        }
    );



   /* =====================================================
   SMOOTH DIGITAL TEXT ANIMATION
===================================================== */

const glitchText = document.querySelector(".outline-text");

if (glitchText) {

    const originalText = "DIGITAL";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let animationFrame = null;
    let isAnimating = false;

    glitchText.textContent = originalText;

    function animateDigital() {

        if (isAnimating) return;

        isAnimating = true;

        const duration = 700;
        const startTime = performance.now();

        function frame(currentTime) {

            const elapsed = currentTime - startTime;

            const progress =
                Math.min(elapsed / duration, 1);

            // Smooth easing
            const eased =
                1 - Math.pow(1 - progress, 3);

            const revealCount =
                Math.floor(
                    eased * originalText.length
                );

            let output = "";

            for (
                let i = 0;
                i < originalText.length;
                i++
            ) {

                if (i < revealCount) {

                    output += originalText[i];

                } else {

                    output +=
                        characters[
                            Math.floor(
                                Math.random() *
                                characters.length
                            )
                        ];

                }

            }

            glitchText.textContent = output;

            if (progress < 1) {

                animationFrame =
                    requestAnimationFrame(frame);

            } else {

                glitchText.textContent =
                    originalText;

                isAnimating = false;

            }

        }

        animationFrame =
            requestAnimationFrame(frame);

    }


    glitchText.addEventListener(
        "mouseenter",
        animateDigital
    );


    glitchText.addEventListener(
        "mouseleave",
        () => {

            if (animationFrame) {

                cancelAnimationFrame(
                    animationFrame
                );

            }

            glitchText.textContent =
                originalText;

            isAnimating = false;

        }
    );

}


    /* =====================================================
       PROJECT NUMBER COUNTER
    ===================================================== */

    const numbers =
        document.querySelectorAll(
            ".project-number"
        );


    numbers.forEach(
        (number, index) => {

            number.style.opacity =
                "0";


            number.style.transform =
                "translateX(-20px)";


            setTimeout(
                () => {

                    number.style.transition =
                        "all .8s ease";

                    number.style.opacity =
                        "1";

                    number.style.transform =
                        "translateX(0)";

                },
                1000 +
                index * 200
            );

        }
    );



    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backTop =
        document.querySelector(
            ".back-top"
        );


    if (backTop) {

        backTop.addEventListener(
            "click",
            (e) => {

                e.preventDefault();


                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }



    /* =====================================================
       DYNAMIC YEAR
    ===================================================== */

    const currentYear =
        new Date().getFullYear();


    document
        .querySelectorAll(
            ".footer-bottom"
        )
        .forEach((footer) => {

            footer.innerHTML =
                footer.innerHTML.replace(
                    "2026",
                    currentYear
                );

        });



    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%c Hey 👋",
        "font-size:25px;font-weight:bold;color:#b7ff00;"
    );


    console.log(
        "%c Welcome to Shubham's portfolio.",
        "font-size:14px;color:#aaa;"
    );


    console.log(
        "%c Built with HTML + CSS + JavaScript.",
        "font-size:12px;color:#666;"
    );


});