
const burgerMenu = () => {
    const topMenu = document.querySelector('.top-menu');
    const topMenuBtn = topMenu.querySelector('.top-menu img');
    const popupMenu = document.querySelector('.popup-menu');

    topMenuBtn.addEventListener('click', () => {
        popupMenu.style.display = 'flex';
    });

    popupMenu.addEventListener('click', event => {
        const target = event.target;
        // eslint-disable-next-line max-len
        if (target.matches('.popup-menu img') || target.matches('.popup-menu') || target.matches('.popup-menu li') || target.matches('.popup-menu a')) {
            popupMenu.style.display = 'none';
        }
    });


};


export default burgerMenu;
