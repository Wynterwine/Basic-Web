let navigbar = document.querySelector('.navigbar');
document.querySelector('#menuicon').onclick = () => {
        navigbar.classList.toggle('active');
}

let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

window.onscroll = () => {
    navigbar.classList.remove('active');
}


