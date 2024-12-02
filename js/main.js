gsap.registerPlugin(ScrollTrigger);

function animateElements(animations) {
    // Проверяем, если ширина экрана меньше 800px, не запускаем анимации
    if (window.matchMedia("(max-width: 800px)").matches) return;

    animations.forEach(({ selector, fromProps, toProps, triggerSelector, start = "top 80%", end = "top 60%" }) => {
        gsap.fromTo(
            selector,
            fromProps,
            {
                ...toProps,
                scrollTrigger: {
                    trigger: triggerSelector || selector,
                    start: start,
                    end: end,
                    toggleActions: "play none none none",
                    once: true,
                },
            }
        );
    });
}

const animations = [
    { selector: ".block-center", fromProps: { opacity: 0, x: -50 }, toProps: { opacity: 1, x: 0, duration: 1 } },
    { selector: ".photo-o", fromProps: { opacity: 0, x: 50 }, toProps: { opacity: 1, x: 0, duration: 1 } },
    { selector: ".wel_left", fromProps: { opacity: 0, x: -50 }, toProps: { opacity: 1, x: 0, duration: 1 } },
    { selector: ".cenCenter", fromProps: { opacity: 0, x: 50 }, toProps: { opacity: 1, x: 0, duration: 1 } },
    { selector: ".endEnd", fromProps: { opacity: 0, x: -50 }, toProps: { opacity: 1, x: 0, duration: 1 } },
    { selector: ".welcome-img2", fromProps: { opacity: 0, x: 50 }, toProps: { opacity: 1, x: 0, duration: 1 } },
    { selector: ".photo-house", fromProps: { opacity: 0, x: -50 }, toProps: { opacity: 1, x: 0, duration: 1 } },
    { selector: ".block-uncenter", fromProps: { opacity: 0, x: 50 }, toProps: { opacity: 1, x: 0, duration: 1 } },
    { selector: ".ll", fromProps: { opacity: 0, x: -50 }, toProps: { opacity: 1, x: 0, duration: 1 } },
    { selector: ".rr", fromProps: { opacity: 0, x: 50 }, toProps: { opacity: 1, x: 0, duration: 1 } },
    { selector: ".img-city", fromProps: { opacity: 0, x: -50 }, toProps: { opacity: 1, x: 0, duration: 1 } },
    { selector: ".block__city-text", fromProps: { opacity: 0, x: 50 }, toProps: { opacity: 1, x: 0, duration: 1 } },
    { selector: ".lll", fromProps: { opacity: 0, x: -50 }, toProps: { opacity: 1, x: 0, duration: 1 } },
    { selector: ".rrr", fromProps: { opacity: 0, x: 50 }, toProps: { opacity: 1, x: 0, duration: 1 } },
];

animateElements(animations);



document.getElementById('burger-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
});