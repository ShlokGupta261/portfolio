document.addEventListener('DOMContentLoaded', () => {

    // Typing Effect
    const roles = ["Security Compliance Expert", "Risk Management Specialist", "Cybersecurity Specialist"];
    let roleIndex = 0;
    let charIndex = 0;
    const typingElement = document.getElementById('typing-effect');
    
    function type() {
        if (charIndex < roles[roleIndex].length) {
            typingElement.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500);
        }
    }
    type();

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Animate skill bars
                if (entry.target.classList.contains('skill-bar')) {
                    const barFill = entry.target.querySelector('.bar-fill');
                    barFill.style.width = barFill.dataset.percent + '%';
                }
            }
        });
    }, { threshold: 0.1 });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll, .skill-bar');
    elementsToAnimate.forEach(el => observer.observe(el));
});
