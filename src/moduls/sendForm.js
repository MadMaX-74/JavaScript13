import mainForm from './mainForm';
const sendForm = form => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';

    if (form.id === 'form2' ||
		form.id === 'form1' ||
		form.id === 'footer_form') {
        statusMessage.style.color = '#FFFFFF';
    }

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);

        let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            form.reset();

        let valid = true;

        elementsForm.forEach(e => {
            try {
                if (e.type === 'checkbox') {
                    if (!e.checked) {
                        alert('Необходимо подтвердить согласие!');
                        throw new Error('Необходимо подтвердить согласие');
                    }
                }
                if (e.classList.contains('error-input')) {
                    valid = false;
                    throw new Error('неверно заполненное поле');
                }
            } catch (error) {
                if (error) {
                    valid = false;
                }
            }
        });

        const postData = body => fetch('server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        /* const clearForm = () => {
            for (const el of form.elements) {
                if (
                    el.tagName.toLowerCase() !== 'button' &&
					el.type !== 'button' &&
					e.type !== 'hidden'
                ) {
                    el.value = '';
                }
            }
            setTimeout(() => statusMessage.remove(), 5000);
        }; */

        if (valid) {
            form.appendChild(statusMessage);

            statusMessage.textContent = loadMessage;

            postData(formData)
                .then(response => {
                    if (response.status !== 200) {
                        if (form.id === 'banner-form' ||
							form.id === 'footer_form' || form.id === 'form2' ||
                            form.id === 'form1') {
                            mainForm(false);
                            statusMessage.remove();
                        }
                        throw new Error('status network not 200');
                    } else if (form.id === 'banner-form' ||
						form.id === 'footer_form' || form.id === 'form2' ||
                        form.id === 'form1') {
                        mainForm(true);
                        statusMessage.remove();
                    } else {
                        statusMessage.textContent = successMessage;
                    }
                })
                .catch(error => {
                    if (form.id !== 'banner-form' ||
						form.id !== 'footer_form') {
                        statusMessage.textContent = errorMessage;
                    }
                    console.error(error);
                });
            form.reset();
        }
    });
};

export default sendForm;
