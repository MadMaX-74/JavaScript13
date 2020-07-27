'use strict';

// Закрытие модального окна
const closeForm = (popUp) => {
    popUp.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains('close_icon') || target.closest('.close-btn')) {
            popUp.style.display = 'none';
        } else {
            target = target.closest('.form-content');

            if (!target) {
            popUp.style.display = 'none';
            }
        }
    });
};

export default closeForm;