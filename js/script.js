document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.menu');
    const mobileMenuOverlay = document.querySelector('#mobileMenu');

    // инициализация слайдера
    // const slider = new SimpleAdaptiveSlider('.slider', {
    //   autoplay: true,
    //   interval: 3000,
    // });

    // Анимация кнопки мобильного меню при клике
    document.body.addEventListener('click', (evt) => {

        if(!evt.target) {
            mobileMenuBtn.classList.remove('opened');
            return;
        }
        
        const isOpen = mobileMenuBtn.classList.toggle('opened');
        
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        
        const offset = isOpen ? 0 : 250;
        
        mobileMenuOverlay.style.setProperty('--x', `${offset}px`);
    });
});