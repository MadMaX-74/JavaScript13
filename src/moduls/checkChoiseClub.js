'use strict';

// Проверка выбора клуба
const checkChoiseClub = () => {
    const clubsFooter = document.querySelectorAll('.choose-club .club input'),
        club = [...clubsFooter].find(item => item.checked);
    
    if(club !== undefined) {
        if(document.querySelector('.choose-club .div-error')) {
            document.querySelector('.choose-club .div-error').remove();
        }

        return true;
    }

    else {
        if(!document.querySelector('.choose-club .div-error')) {
            const divError = document.createElement('div');
            divError.classList.add('div-error');
            divError.textContent = 'Необходимо выбрать клуб.';
            divError.style.color = 'red';
            document.querySelector('.choose-club').append(divError);
        }
        return false;
    }
};

export default checkChoiseClub;