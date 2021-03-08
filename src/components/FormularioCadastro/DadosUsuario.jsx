import { TextField, Button } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import { ValidacoesCadastro } from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

export default function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const validacoes = useContext(ValidacoesCadastro);

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()) aoEnviar({ email, senha });
            }}
        >
            <TextField
                onChange={(event) => setEmail(event.target.value)}
                id="email"
                name="email"
                label="E-mail"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
            <TextField
                onChange={(event) => setSenha(event.target.value)}
                id="senha"
                name="senha"
                onblur={validarCampos}
                label="Senha"
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />

            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>
        </form>
    );
}
