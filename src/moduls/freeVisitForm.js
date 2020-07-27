'use strict';
import closeForm from './closeForm';

// Открытие модального окна при клике на надпись "Записаться на бесплатынй прием"
const freeVisitForm = () => {
    const freeVisit = document.querySelector('.free-visit p'),
        popup = document.getElementById('free_visit_form'),
        form = popup.querySelector('form');

    freeVisit.addEventListener('click', (e) => {
        popup.style.display = 'inline-block';
        form.style.display = 'inline-block';
    });

    closeForm(popup);
};

export default freeVisitForm;