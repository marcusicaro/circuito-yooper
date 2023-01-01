export default function carousel() {
    const slider = document.querySelector('.slider')
    const slide = document.querySelector('.slide');
    const slidesArray = [...slide.querySelectorAll('.item-card')]
    const dotsList = document.getElementsByClassName('dot')
    let slideIndex = 1;

    function moveSlides() {
        slide.style.transform = `translateX(-${slideIndex * 100}vw)`;
    }

    function moveHandler(direction) {
        slide.style.transition = `transform 450ms ease-in-out`;
        direction !== 'right' ? (slideIndex -= 1) : (slideIndex += 1)
        removeCurrent()
        dotsList[slideIndex - 2].classList.add('current')
        moveSlides()
    }

    document.querySelector('.slider__btn--right').addEventListener('click', () => {
        moveHandler('right');
    })
    document.querySelector('.slider__btn--left').addEventListener('click', () => {
        moveHandler();
    })

    moveSlides()

    slide.addEventListener('transitionend', () => {
        slide.style.transform = `translateX(-${slideIndex * 100}vw)`;
        if(slideIndex === 0) {
            slide.style.transition = 'none';
            slideIndex = slidesArray.length - 2;
            moveSlides()
        }
        if(slideIndex === slidesArray.length - 1) {
            slide.style.transition = 'none';
            slideIndex = 1;
            moveSlides()
        }

    })

    const createDots = (() => {
        const dotsContainer = document.querySelector('.dots-container')
        for (let i = 0; i < slidesArray.length - 2; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dotsContainer.appendChild(dot);

            dot.addEventListener('click', () => {
                removeCurrent();
                dot.classList.add('current');
                var result = Object.keys(dotsList).map((key) => [Number(key), dotsList[key]]);
                result.map((el, index) => {
                    if(el[1].classList[1] === 'current') {
                        slideIndex = index + 1;
                        moveSlides()
                    }
                })
            })
        }
    })();

    // remove current class from other dots
    function removeCurrent () {
        for (let i = 0; i < dotsList.length; i++){
        dotsList[i].classList.remove('current');
        }
    }
}
