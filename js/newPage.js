gsap.set(".coming-soon", { opacity: 1 });

const text = document.querySelector(".coming-soon");
const chars = text.textContent.split(""); 
text.innerHTML = chars.map((char) => `<span class="char">${char}</span>`).join(""); 

gsap.fromTo(
  ".char",
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: .8,
    ease: "power2.out",
    stagger: {
      amount: 1.5,
      from: "start", 
      repeat: -1,
      yoyo: true,
    },
  }
);