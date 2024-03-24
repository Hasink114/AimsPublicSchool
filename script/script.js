alert("A Practice paper is uploaded for your up comming maths paper.");

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero_text', {delay:200, origin:'top'});
sr.reveal('.hero-img', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});
