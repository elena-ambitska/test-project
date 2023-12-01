document.addEventListener('DOMContentLoaded', function () {
    const fireContainer = document.getElementById('fireContainer');
    const particles = [];

    const numberOfParticles = 50;
    for (let i = 0; i < numberOfParticles; i++) {
        createFireParticle();
    }

    function createFireParticle() {
        const fireParticle = document.createElement('div');
        fireParticle.classList.add('fire-particle');
        setPosition(fireParticle);
        fireContainer.appendChild(fireParticle);
        particles.push(fireParticle);
    }

    function setPosition(element) {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
    }

    document.addEventListener('mousemove', function (event) {
        const mouseX = event.clientX / window.innerWidth - 0.5;
        const mouseY = event.clientY / window.innerHeight - 0.5;

        particles.forEach((particle, index) => {
            const translateX = mouseX * (index + 1) * 5;
            const translateY = mouseY * (index + 1) * 5;
            particle.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    });
});
