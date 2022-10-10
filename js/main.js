// Validation form
let validation = new JustValidate('#form', {
    errorLabelStyle: {
        color: 'rgb(212, 10, 10)',
        // backgroundColor: 'orange',
    }
});

// Mask phone
let selector = document.querySelector('#phone');
let = inputMask = new Inputmask("+7(999)999-99-99")
inputMask.mask(selector);

// Falidation Field
validation.addField("#name", [
    {
        rule: 'required',
        errorMessage: 'Введите ваше имя'
    },
    {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимум 2 символа'
    },
])
    .addField("#email", [
        {
            rule: 'required',
            errorMessage: 'Введите вашу почту'
        },
        {
            rule: 'email',
            errorMessage: 'Ошибка: введите почту в формате name@yandex.ru'
        },
    ])
    .addField("#phone", [
        {
            validator: (value) => {
                const phone = selector.inputmask.unmaskedvalue();
                return Boolean(Number(phone) && phone.length > 0)
            },
            errorMessage: 'Введите ваш телефон без +7'
        },
        {
            validator: (value) => {
                const phone = selector.inputmask.unmaskedvalue();
                return Boolean(Number(phone) && phone.length === 10)
            },
            errorMessage: 'Введите все 10 цифр телефона'
        },

    ])