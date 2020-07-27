

// Появление стрелки в правом ниже углу
const arrow = () => {
    const arrowUp = document.getElementById('totop');
    arrowUp.style.display = 'none';
    const headerMain = document.querySelector('.header-main'),
        headerMainHeight = headerMain.clientHeight;

    window.addEventListener('scroll', () => {

        if (window.pageYOffset > headerMainHeight) {
            arrowUp.style.display = 'block';
        } else {
            arrowUp.style.display = 'none';
        }


    });
};

export default arrow;
