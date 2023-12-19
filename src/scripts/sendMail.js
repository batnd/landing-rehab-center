'use strict'

window.addEventListener('DOMContentLoaded', () => {
    // Order form
    const inputElementName = document.querySelector('#inputActionName');
    const inputElementPhone = document.querySelector('#inputActionPhone');
    const formActionButtonElement = document.querySelector('#formActionButton');
    const formElement = document.querySelector('#form');

    inputElementName.addEventListener('keyup', () => {
        const inputNameValue = inputElementName.value;
        if (inputNameValue) inputElementName.classList.remove('invalidField');
        else inputElementName.classList.add('invalidField');
    });
    inputElementPhone.addEventListener('keyup', () => {
        const inputPhoneValue = inputElementPhone.value;
        if (inputPhoneValue) inputElementPhone.classList.remove('invalidField');
        else inputElementPhone.classList.add('invalidField');
    });

    formElement.addEventListener('submit', sendMail);


    const orderFormElement = document.querySelector('.order-form');
    const orderResponseElement = document.querySelector('.order-response');
    const orderResponseSuccessElement = document.querySelector('.response-success');
    const orderResponseRejectElement = document.querySelector('.response-reject');
    async function sendMail(event) {
        event.preventDefault();

        const inputNameValue = inputElementName.value;
        const inputPhoneValue = inputElementPhone.value;
        inputElementName.classList.remove('invalidField');
        inputElementPhone.classList.remove('invalidField');

        if (!inputNameValue || !inputPhoneValue) {
            if (!inputNameValue) inputElementName.classList.add('invalidField');
            if (!inputPhoneValue) inputElementPhone.classList.add('invalidField');
        }

        if (inputNameValue && inputPhoneValue) {
            formActionButtonElement.classList.add('disabled');

            let formData = new FormData(formElement);
            let response = await fetch('send.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                orderResponseBlock('success');
            } else {
                orderResponseBlock('reject');
            }
        }
    }


    function orderResponseBlock(response) {
        orderFormElement.classList.add('d-none');
        orderResponseElement.classList.remove('d-none');
        if (response === 'success') orderResponseSuccessElement.classList.remove('d-none');
        if (response === 'reject' ) orderResponseRejectElement.classList.remove('d-none');

        setTimeout(() => {
            formActionButtonElement.classList.remove('disabled');
            orderFormElement.classList.remove('d-none');
            orderResponseElement.classList.add('d-none');
            if (response === 'success') orderResponseSuccessElement.classList.add('d-none');
            if (response === 'reject' ) orderResponseRejectElement.classList.add('d-none');
            formElement.reset();
        }, 15000);
    }
});