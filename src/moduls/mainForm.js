const mainForm = data => {
    const bannerPopup = document.getElementById('thanks'),
        formContent = bannerPopup.querySelector('.form-content'),
        formHeader = formContent.querySelector('h4'),
        formText = formContent.querySelector('p');

    bannerPopup.style.display = 'block';

    if (data) {
        console.log('ok');
    } else {
        formHeader.textContent = 'Ошибка отправки';
        formText.textContent = `Попробуйте повторить попытку позже!`;
    }
};

export default mainForm;
