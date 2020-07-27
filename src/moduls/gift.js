const gift = () => {
    const fixedGift = document.querySelector('.fixed-gift'),
        gift = document.getElementById('gift');

    if (fixedGift) {
        fixedGift.addEventListener('click', () => {
            fixedGift.style.display = 'none';
            gift.style.display = 'block';
        });

        gift.addEventListener('click', e => {
            if (e.target.classList.contains('overlay') ||
                e.target.classList.contains('close-btn') ||
                e.target.classList.contains('close_icon')) {
                gift.style.display = 'none';
            }
        });
    }
};

export default gift;
