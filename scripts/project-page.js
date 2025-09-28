document.addEventListener("DOMContentLoaded",function () {

  
    
        gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll(".project-card");
    const container = document.querySelector(".projects");

    const totalScroll = container.scrollWidth - window.innerWidth;

    gsap.to(container, {
      x: () => -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: ".project-container",
        start: "top top",
        end: () => "+=" + totalScroll,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        markers: false, // remove when done
      }
    });
})