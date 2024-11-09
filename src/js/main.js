window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});


const serviceDivs = document.querySelectorAll("#service .service-container div");

function handleDelay() {
    const firstItemRect = serviceDivs[0].getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (firstItemRect.top <= windowHeight - 50) {
        serviceDivs.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("visible"); 
            }, index * 500); // 0.5s delay for each item
        });
        window.removeEventListener("scroll", handleDelay);
    }
}

window.addEventListener("scroll", handleDelay);

