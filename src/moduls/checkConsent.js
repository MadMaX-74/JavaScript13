'use strict';

import checkChoiseClub from './checkChoiseClub';

// Проверка согласия на обработку персональных данных
const checkConsent = (elem) => {
    const consent = elem.querySelector('.personal-data input');
    
    if(consent) {
        consent.noValidate = true;

        if(consent.checked) {
            if(elem.querySelector('.personal-data .errorContens')) {
                elem.querySelector('.personal-data .errorContens').remove();
            }
            return true;
        } else {
            if(!elem.querySelector('.personal-data').querySelector('.errorContens')) {
                const div = document.createElement('div');
                div.textContent = 'Необходимо подтвердить согласие.';
                div.style.color = 'red';
                div.classList.add('errorContens');
                elem.querySelector('.personal-data').append(div);
            }
            return false;
        }
    } else return checkChoiseClub();
};

export default checkConsent;