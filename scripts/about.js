window.addEventListener("DOMContentLoaded",function ()
 {
  
    
        gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".fade-para").forEach((para) => {
      gsap.fromTo(
        para,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: para,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none reverse", // ✅ Show when scrolling down, reverse when scrolling up
            markers: false,
          },
          duration: 0.6,
          ease: "power2.out",
        }
      );
    });
})