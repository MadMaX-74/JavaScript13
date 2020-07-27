/* eslint-disable max-len */
const togglePopUp = () => {
    const thanksForm = document.querySelector('#thanks');
    
    thanksForm.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('close_icon') || target.classList.contains('overlay') || target.closest('.close-btn')) {
            thanksForm.style.display = 'none';
        }

    });
};

export default togglePopUp;
