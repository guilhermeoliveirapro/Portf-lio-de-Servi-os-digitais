document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');
    const msgSucesso = document.getElementById('contato-sucesso');

    if (form && msgSucesso) {
        // adiciona acessibilidade
        msgSucesso.setAttribute('role', 'alert');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            msgSucesso.classList.remove('hidden'); // mostra mensagem
            this.reset(); // limpa o formulário

            // esconde mensagem depois de 4s
            setTimeout(() => {
                msgSucesso.classList.add('hidden');
            }, 4000);
        });
    }
});
