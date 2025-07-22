document.addEventListener("DOMContentLoaded", function () {

// progress bar javascrip


  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById("scroll-progress").style.width = scrollPercent + "%";
  });


// bars click code is here 

    let bars = document.querySelector(".bars");
    let nav = document.querySelector("nav");

    bars.addEventListener("click", () => {
        if (!nav.classList.contains("show")) {
            nav.classList.add("show");
            gsap.fromTo(nav,
                { opacity: 0 },
                { opacity: 1, duration: 0.7, ease: "power2.in" }
            );
        } else {
            gsap.to(nav, {
                opacity: 0,
                duration: 0.7,
                ease: "power2.out",
                onComplete: () => {
                    nav.classList.remove("show");
                }
            });
        }
    });

    // this piece of code show again my li when my pexels are above then my media query
    window.addEventListener("resize", () => {
        if (window.innerWidth > 750) {
            nav.style.opacity = "1";
            nav.classList.remove("show");
        }
    });





    
})