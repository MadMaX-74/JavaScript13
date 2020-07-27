'use strict';

// Валидатор
const validator = () => {
    document.addEventListener('input', (event) => {
        const target = event.target;

        const inputName = target.closest('input[name="name"]:not([id="promo"]');

        if(inputName) {
            inputName.value = inputName.value.replace(/[^а-яё\s]/gi, '');
        }

    });
    
};

export default validator;