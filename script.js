document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');
    const msgSucesso = document.getElementById('contato-sucesso');

    if (form && msgSucesso) {
        msgSucesso.setAttribute('role', 'alert');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    msgSucesso.textContent = "Mensagem enviada com sucesso!";
                    msgSucesso.classList.remove('hidden');
                    form.reset();
                    setTimeout(() => {
                        msgSucesso.classList.add('hidden');
                    }, 4000);
                } else {
                    msgSucesso.textContent = "Ocorreu um erro. Tente novamente mais tarde.";
                    msgSucesso.classList.remove('hidden');
                }
            })
            .catch(() => {
                msgSucesso.textContent = "Ocorreu um erro. Tente novamente mais tarde.";
                msgSucesso.classList.remove('hidden');
            });
        });
    }
});
