import React from 'react';

export const ValidacoesCadastro = React.createContext({
    cpf: semValidacao,
    senha: semValidacao,
});

function semValidacao(dados) {
    return { valido: true, texto: '' };
}
