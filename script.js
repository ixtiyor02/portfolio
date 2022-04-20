const nextBtn = document.querySelector('#next-slide'),
      prevBtn = document.querySelector('#prev-slide');

let slideList = document.querySelector('.slides-first-page');
let slides = document.querySelectorAll('.slide-first-page');

let slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, idx) => {
    slide.style.left = `${slideWidth * idx}px`;
});

nextBtn.addEventListener('click', function() {
    let current = document.querySelector('.current-slide');
    let next = current.nextElementSibling;

    slideList.style.transform = `translateX(-${next.style.left})`;
    current.classList.remove('current-slide');
    next.classList.add('current-slide');
});

prevBtn.addEventListener('click', function() {
    let current = document.querySelector('.current-slide');
    let next = current.previousElementSibling;

    slideList.style.transform = `translateX(-${next.style.left})`;
    current.classList.remove('current-slide');
    next.classList.add('current-slide');
});