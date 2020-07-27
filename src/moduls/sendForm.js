import closeForm from './closeForm';
import checkConsent from './checkConsent';

const sendForm = () => {   
    document.addEventListener('submit', (event) => {
        const target = event.target;
        
        if(target.closest('form')) {
            event.preventDefault();
            
            const form = target.closest('form');
            if(!checkConsent(form)) return;
            
            const phone = form.querySelector('input[name="phone"]');            
            if (phone.value.length <= 10) {
                alert('Введите одинадцатизначный мобильный номер');            
            } else {
                const thanks = document.getElementById('thanks');    

                const formData = new FormData(form);
                let body = {};
                formData.forEach((val, key) => {
                    body[key] = val;
                });
                form.reset();

                postData(body)
                .then((response) => {
                    if(response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                        if(form.closest('.popup')) {
                            form.style.display = 'none';
                            form.closest('.popup').style.display = 'none';
                        }
                        thanks.style.display = 'block';
                        closeForm(thanks);

                })
                .catch((error) => {
                        if(form.closest('.popup')) {
                        form.style.display = 'none';
                        form.closest('.popup').style.display = 'none';
                    }

                    thanks.querySelector('.form-wrapper').querySelector('.form-content').innerHTML = `<h4>Что-то пошло не так...</h4>
                    <p>Повторите попытку позже.</p>
                    <button class="btn close-btn">OK</button>`;
                    thanks.style.display = 'block';
                    closeForm(thanks);
                });
        }
        }

    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(body)
        });
    };
};


export default sendForm;