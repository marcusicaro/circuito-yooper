export default function formValidation() {
    const form = document.querySelector('form');


form.addEventListener('change', function(e) {
        const error = document.getElementById('error')
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const tel = document.getElementById('tel');
        const validName = /^[A-Za-z]+$/;
        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const validTel = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/

        if (!name.value.match(validName) || name.value.length < 2) { 
            name.classList.add('invalid')
            error.className = 'display'
            return error.textContent = 'Preencha todos os campos obrigatórios' 
        } 
        if (name.value.match(validName) || name.value.length > 2) {
            name.classList.remove('invalid')
        }
        if (!email.value.match(validEmail)) { 
            email.classList.add('invalid')
            error.className = 'display'
            return error.textContent = 'Preencha com um e-mail válido'
        }
        if (email.value.match(validEmail)) {
            email.classList.remove('invalid')
        }
        if (!tel.value.match(validTel)) { 
            tel.classList.add('invalid')
            error.className = 'display'
            return error.textContent = 'Preencha com um número de telefone válido' 
        }
        if (!tel.checkValidity()) {
            tel.classList.remove('invalid')
        }

        e.preventDefault()
        name.classList.remove('invalid')
        email.classList.remove('invalid')
        tel.classList.remove('invalid')
        error.className = 'hidden'
        return error.textContent = ''

    })
}