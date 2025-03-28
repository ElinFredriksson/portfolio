// let menuIcon = document.querySelector('#menu-icon');
// let navBar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x')
//     navBar.classList.toggle('active')
// }

let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // if(top >= offset && top < offset + height) {
        //     navLinks.forEach(links => {
        //         links.classList.remove('active');
        //         document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        //     })
        // }
    })

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // menuIcon.classList.remove('bx-x')
    // navBar.classList.remove('active')
};

// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
     delay: 200
});

ScrollReveal().reveal('.hero-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.hero-img img, .portfolio-box', '.work', { origin: 'bottom' });
ScrollReveal().reveal('.hero-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.hero-content p, .about-container', { origin: 'right' });


