const slider = () => {
    const galleryWrap = document.querySelector('.gallery-wrapper');

    //create buttons
    const prev = document.createElement('span');
    const next = document.createElement('span');

    prev.className = 'slider-arrow__span slider-arrow__prev slider-arrow';
    next.className = 'slider-arrow__span  slider-arrow__next slider-arrow';

    prev.innerHTML = '<img src="images/arrow-left.png">';
    next.innerHTML = '<img src="images/arrow-right.png">';

    galleryWrap.style.position = 'relative';
    galleryWrap.appendChild(prev);
    galleryWrap.appendChild(next);

    const slides = document.querySelectorAll('#gallery .slide'),
        slider = document.querySelector('.gallery-slider');

    let currentSlide = 0,
        interval,
        dot;

    const createDots = () => {
        const dots = document.createElement('ul');

        slider.append(dots);
        dots.classList.add('slider-dots');

        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('li'),
                dotButton = document.createElement('button');

            dotButton.classList.add('dot');
            dots.append(dot);
            dot.append(dotButton);

            if (i === 0) {
                dot.classList.add('slick-active');
            }
        }
        dot = document.querySelectorAll('.slider-dots li');
    };

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slides, currentSlide, 'active-slide');
        prevSlide(dot, currentSlide, 'slick-active');

        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, 'active-slide');
        nextSlide(dot, currentSlide, 'slick-active');

    };

    const startSlider = (time = 2000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    galleryWrap.addEventListener('click', e => {
        e.preventDefault();
        const target = e.target;
        if (!target.matches('.slider-arrow__prev, .slider-arrow__next, .dot')) {
            return;
        }

        prevSlide(slides, currentSlide, 'active-slide');
        prevSlide(dot, currentSlide, 'slick-active');

        if (target.matches('.slider-arrow__prev') || target.matches('.slider-arrow__prev img')) {
            currentSlide--;
        } else if (target.matches('.slider-arrow__next')  || target.matches('.slider-arrow__prev img')) {
            currentSlide++;
        } else if (target.matches('.dot')) {
            dot.forEach((el, i) => {
                el = el.querySelector('button');
                if (el === target) {
                    currentSlide = i;
                }
            });
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'active-slide');
        nextSlide(dot, currentSlide, 'slick-active');
    });

    galleryWrap.addEventListener('mouseover', e => {
        if (e.target.matches('.slider-arrow') ||
        e.target.matches('.dot')) {
            stopSlide();
        }
    });

    galleryWrap.addEventListener('mouseout', e => {
        if (e.target.matches('.slider-arrow') ||
        e.target.matches('.dot')) {
            stopSlide();
        }
    });

    createDots();
    startSlider(3000);
};

export default slider;
