function validaCPF(cpf) {
    if (cpf.length !== 11) return { valido: false, texto: 'CPF Inválido' };
    else return { valido: true, texto: '' };
}

function validaSenha(senha) {
    if (senha.length < 4 || senha.length > 72)
        return {
            valido: false,
            texto: 'A senha deve ter entre 4 e 72 caracteres.',
        };
}

export { validaCPF, validaSenha };
