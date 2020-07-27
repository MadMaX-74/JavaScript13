'use strict';
import closeForm from './closeForm';

// Открытие модального окна при клике на кнопку "Перезвоните мне"
const callbackForm = () => {
    const callbackBtn = document.querySelector('.callback-btn'),
        popup = document.getElementById('callback_form'),
        form = popup.querySelector('form');

    callbackBtn.addEventListener('click', () => {
        popup.style.display = 'inline-block';
        form.style.display = 'inline-block';
    });

    closeForm(popup);
};

export default callbackForm;