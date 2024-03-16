document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.ctaa');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Files will be uploaded after 1:00 pm.');
        });
    });
});


const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero_text', {delay:200, origin:'top'});
sr.reveal('.hero-img', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});