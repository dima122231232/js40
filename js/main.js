gsap.registerPlugin(ScrollTrigger);

function animateElements(animations) {
    if (window.matchMedia("(max-width: 800px)").matches) {
        gsap.fromTo(".block-center",{ opacity: 0, x: 50 },{opacity: 1,x: 0,duration: 1,scrollTrigger: {trigger: ".block-center",start: "top 80%",end: "top 60%",toggleActions: "play none none none",once: true,},});
        gsap.fromTo(".animation1,.welcome-h1,.welcome-h6",{ opacity: 0, x: 50 },{opacity: 1,x: 0,duration: 1,scrollTrigger: {trigger: ".animation1",start: "top 80%",end: "top 60%",toggleActions: "play none none none",once: true,},});
        gsap.fromTo(".animation2",{ opacity: 0, x: -50 },{opacity: 1,x: 0,duration: 1,scrollTrigger: {trigger: ".animation2",start: "top 80%",end: "top 60%",toggleActions: "play none none none",once: true,},});
        gsap.fromTo(".photo-house",{ opacity: 0, y: -50 },{opacity: 1,y: 0,duration: 1,scrollTrigger: {trigger: ".photo-house",start: "top 80%",end: "top 60%",toggleActions: "play none none none",once: true,},});
        gsap.fromTo(".block-uncenter",{ opacity: 0, x: -50 },{opacity: 1,x: 0,duration: 1,scrollTrigger: {trigger: ".block-uncenter",start: "top 80%",end: "top 60%",toggleActions: "play none none none",once: true,},});
        gsap.fromTo(".block-center2-animation",{ opacity: 0, x: 50 },{opacity: 1,x: 0,duration: 1,scrollTrigger: {trigger: ".block-center2-animation",start: "top 80%",end: "top 60%",toggleActions: "play none none none",once: true,},});
        gsap.fromTo(".photo-r",{ opacity: 0, y: 50 },{opacity: 1,y: 0,duration: 1,scrollTrigger: {trigger: ".photo-r",start: "top 80%",end: "top 60%",toggleActions: "play none none none",once: true,},});
        gsap.fromTo(".now-p,.now-h3",{ opacity: 0, },{opacity: 1,duration: 1,scrollTrigger: {trigger: ".now-p",start: "top 80%",end: "top 60%",toggleActions: "play none none none",once: true,},});
        gsap.fromTo(".animationImg1",{ opacity: 0, },{opacity: 1,duration: 1.5,scrollTrigger: {trigger: ".animationImg1",start: "top 80%",end: "top 60%",toggleActions: "play none none none",once: true,},});
        gsap.fromTo(".animationImg2",{ opacity: 0, },{opacity: 1,duration: 1.5,scrollTrigger: {trigger: ".animationImg2",start: "top 80%",end: "top 60%",toggleActions: "play none none none",once: true,},});
        gsap.fromTo(".animationImg3",{ opacity: 0, },{opacity: 1,duration: 1.5,scrollTrigger: {trigger: ".animationImg3",start: "top 80%",end: "top 60%",toggleActions: "play none none none",once: true,},});
        gsap.fromTo(".img-city",{ opacity: 0, },{opacity: 1,x: 0,duration: 1,scrollTrigger: {trigger: ".img-city",start: "top 80%",end: "top 60%",toggleActions: "play none none none",once: true,},});
        gsap.fromTo(".section__movement",{ opacity: 0, y: 50 },{opacity: 1,y: 0,duration: 1,scrollTrigger: {trigger: ".section__movement",start: "top 80%",end: "top 60%",toggleActions: "play none none none",once: true,},});
        gsap.fromTo(".cImg",{ opacity: 0, x: 50 },{opacity: 1,x: 0,duration: 1,scrollTrigger: {trigger: ".cImg",start: "top 80%",end: "top 60%",toggleActions: "play none none none",once: true,},});
        gsap.fromTo(".items_newEra",{ opacity: 0, x: -50 },{opacity: 1,x: 0,duration: 1,scrollTrigger: {trigger: ".items_newEra",start: "top 80%",end: "top 60%",toggleActions: "play none none none",once: true,},});

        return;
    }
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