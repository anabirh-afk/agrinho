// Scroll suave para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação ao rolar a página
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Efeito de gotas (opcional visual)
function createDrop() {
    const drop = document.createElement('div');
    drop.style.position = 'fixed';
    drop.style.width = '8px';
    drop.style.height = '8px';
    drop.style.background = 'rgba(0, 183, 255, 0.6)';
    drop.style.borderRadius = '50%';
    drop.style.left = Math.random() * 100 + 'vw';
    drop.style.top = '-10px';
    drop.style.zIndex = '9999';
    drop.style.pointerEvents = 'none';
    document.body.appendChild(drop);

    let fall = setInterval(() => {
        let pos = parseFloat(drop.style.top);
        pos += 8;
        drop.style.top = pos + 'px';

        if (pos > window.innerHeight) {
            clearInterval(fall);
            drop.remove();
        }
    }, 30);
}

setInterval(() => {
    if (Math.random() > 0.7) createDrop();
}, 300);
