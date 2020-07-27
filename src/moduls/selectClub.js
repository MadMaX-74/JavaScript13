const selectClub = () => {
    const clubsList = document.querySelector('.clubs-list');
    const ul = clubsList.querySelectorAll('ul');

    document.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.club-select')) {
            ul.forEach(elem => {
                if (elem.style.display === 'none' || !elem.style.display) {
                    elem.style.display = 'block';
                } else {
                    elem.style.display = 'none';
                }
            });
        } else {
            ul.forEach(elem => {
                elem.style.display = 'none';
            });
        }
    });
};

export default selectClub;
