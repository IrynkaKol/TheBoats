const btn = document.querySelector('.about__btn');
const cards = document.querySelectorAll('.about__card');

btn.addEventListener('click', function(){
    for (let card of cards) {
        card.style.display = 'flex';
    }
    btn.style.display = 'none';
})