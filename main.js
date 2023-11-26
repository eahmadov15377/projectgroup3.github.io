document.addEventListener('DOMContentLoaded', function () {
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 1 });

    const sections = document.querySelectorAll('#team, #goal, #proggress');

    sections.forEach(section => {
        observer.observe(section);
    });

    document.querySelector('.logo').addEventListener('click', function() {
        window.location.href = 'ADA.HW3.html'; 
    });
});
