import gsap from "gsap";

export const heroAnimation = () => {
  gsap.to(".hero .hero-content .action-btn", 0, {
    opacity: 0,
  });
  const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
  tl.from(".hero .hero-content .letter", 1.5, {
    opacity: 0,
    delay: 0.8,
    y: 25,
    ease: "power3.out",
    stagger: {
      amount: 0.5,
    },
  })
    .from(".hero .hero-content .line .slogan", 1.6, {
      opacity: 0,
      y: 100,
      ease: "power4.out",
      delay: -1,
      skewY: 8,
      stagger: {
        amount: 0.5,
      },
    })
    .to(".hero .hero-content .action-btn", 1.5, {
      opacity: 1,
      delay: -0.6,
      ease: "power1.easeOut",
      stagger: {
        amount: 0.2,
      },
    });
};
