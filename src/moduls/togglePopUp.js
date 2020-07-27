/* eslint-disable max-len */
const togglePopUp = () => {
    const freeVisit = document.querySelector('.free-visit'),
        freeVisitForm = document.getElementById('free_visit_form'),
        callbackBtn = document.querySelector('.callback-btn'),
        callbackForm = document.querySelector('#callback_form'),
        thanksForm = document.querySelector('#thanks');




    freeVisit.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.free-visit')) {
            freeVisitForm.style.display = 'block';
        } else {
            return;
        }
    });

    freeVisitForm.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('close_icon') || target.classList.contains('overlay')) {
            freeVisitForm.style.display = 'none';
        }

    });

    callbackBtn.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.callback-btn')) {
            callbackForm.style.display = 'block';
        } else {
            return;
        }
    });

    callbackForm.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('close_icon') || target.classList.contains('overlay')) {
            callbackForm.style.display = 'none';
        }

    });

    thanksForm.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('close_icon') || target.classList.contains('overlay') || target.closest('.close-btn')) {
            thanksForm.style.display = 'none';
        }

    });
};

export default togglePopUp;
