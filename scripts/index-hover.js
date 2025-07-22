document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".icons a");

    elements.forEach((element) => {
        element.addEventListener("touchstart", () => {
            element.classList.add("active-touch");
        });
        element.addEventListener("touchend", () => {
            element.classList.remove("active-touch");
        });
    });
});
