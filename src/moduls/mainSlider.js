const mainSlider = () => {
    const blockSlider = document.querySelector('.main-slider'),
            slide = blockSlider.querySelectorAll('.slide');

        let count = 0;

        setInterval(() => {
        slide[count].style.display = 'none';
        count++;
        if(count >= slide.length) {
            count = 0;
        }

        slide[count].style.display = 'flex';
    }, 3000);
};

export default mainSlider;
