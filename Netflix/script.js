const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('black');
    } else {
        nav.classList.remove('black');
    }
});