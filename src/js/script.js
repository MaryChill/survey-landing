import IMask from 'imask';

function addImask() {
    const formTel = document.querySelector('.form-tel-input');
    new IMask(formTel, {mask: '+{7}(000)000-00-00',});
}

function validityForm() {
    const form = document.querySelector('.form');
    const elements = document.querySelectorAll('.required-input');
    const labelApproval = document.querySelector('.label__approval');

    const errors = {
        name: {
            valueMissing: 'Обязательное поле',
            patternMismatch: 'Введите ваше имя на кириллице'

        },
        phone: {
            valueMissing: 'Обязательное поле',
            patternMismatch: 'Введите номер телефона',
        },
        agree: {
            valueMissing: 'Обязательное поле',
        }

    };

    form.addEventListener('submit', (e) => {
        !(form.checkValidity()) && e.preventDefault();

        elements.forEach(el => {
            Object.keys(ValidityState.prototype).forEach((key) => {
                if (el.validity[key]) {
                    el.closest('.box-required-input')
                        .querySelector('.form_error').textContent = errors[el.name][key];
                }
            });
        });
        elements.forEach(el => {
            const formError = el.closest('.box-required-input').querySelector('.form_error');
            const isError = formError.textContent !== '';

            el.classList.toggle('form__item-err', isError);
            labelApproval.classList.toggle('form__item-err-checkbox', isError);
        });
    });
}


export {addImask, validityForm};