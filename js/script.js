document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.menu');
    const mobileMenuOverlay = document.querySelector('#mobileMenu');

    // Инициализация слайдера
    // const slider = new SimpleAdaptiveSlider('.slider', {
    //   autoplay: true,
    //   interval: 3000,
    // });

    // Открытие/закрытие мобильного меню при клике
    document.body.addEventListener('click', (evt) => {

        if(!evt.target.matches('.menu')) {
            mobileMenuBtn.classList.remove('opened');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuOverlay.style.setProperty('--x', `250px`);
            return;
        }

        const isOpen = mobileMenuBtn.classList.toggle('opened');

        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        
        const offset = isOpen ? 0 : 250;
        
        mobileMenuOverlay.style.setProperty('--x', `${offset}px`);
        
    });
});