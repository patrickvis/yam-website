import gsap from "gsap";

export const heroAnimation = (setAnimationComplete) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    onComplete: setAnimationComplete,
  });
  tl.to(".navbar", 0, {
    css: {
      zIndex: 200,
    },
    delay: -0.9,
  })
    .to(".overlays", 0, {
      css: {
        display: "block",
        width: "100%",
      },
    })
    .to(".hero .hero-content .letter, .hero .hero-content .slogan", 0, {
      css: {
        position: "relative",
        zIndex: 5000,
      },
    })
    .from(".hero .hero-content .letter", 1.1, {
      delay: 0.69,
      y: 300,
      ease: "power3.out",
      stagger: {
        amount: 0.42,
      },
    })
    .from(".hero .hero-content .slogan .line-slogan h2 ", 1.2, {
      opacity: 0,
      y: 100,
      ease: "power4.out",
      delay: -0.5,
      skewY: 8,
      stagger: {
        amount: 0.42,
      },
    })
    .to(".overlays .overlay", 1.3, {
      width: 0,
      stagger: {
        amount: 0.5,
      },
      delay: -0.5,
    })
    .to(".navbar", 0, {
      css: {
        zIndex: 5001,
      },
      delay: -0.9,
    })
    .to(".hero .hero-content .letter", 0, {
      css: {
        position: "relative",
        zIndex: 1,
      },
      delay: -0.8,
    })
    .to(".hero .hero-content .slogan", 0, {
      css: {
        position: "relative",
        zIndex: 1,
      },
    })
    .to(".navbar", 0, {
      css: {
        zIndex: 200,
      },
      delay: -0.9,
    });
};
