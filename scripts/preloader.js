document.addEventListener("DOMContentLoaded", function () {
    let heading = document.getElementById("preloader-heading")
    const splitText = heading.textContent;
    heading.textContent = "";

    // now here we wrap each char of our id in each single span

    splitText.split("").forEach(char => {
        const spandiv = document.createElement("span")
        spandiv.textContent = char
        heading.appendChild(spandiv)
    })

    gsap.to("#preloader-heading span", {
        opacity: 1,
        duration: 1,
        delay: .4,
        stagger: .3
    })

    
    
    // my spinner gsap animation start here


    // Show the loader div smoothly after 5s
    gsap.to(".round-container", {
        opacity: 1,
        visibility: "visible",
        delay: 5,
        duration: 0.7,
        ease: "power2.out"
    });

    // Start rotation slightly after it appears
    gsap.to(".round2", {
        rotate: 360,
        duration: 1.4,
        ease: "linear",
        repeat: -1,
        delay: 5.7
    });


    window.addEventListener("load", () => {
    // Animate fade out
    gsap.to(".preloader-container", {
        opacity: 0,
        duration: 1,
        delay:6,
        ease: "power2.out",
        onComplete: () => {
            document.getElementById("preloader").style.display = "none";
        }
    });
});


})