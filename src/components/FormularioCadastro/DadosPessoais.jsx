import React, { useState, useContext } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import { ValidacoesCadastro } from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const validacoes = useContext(ValidacoesCadastro);

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar())
                    aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                name="nome"
                id="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                name="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={cpf}
                name="cpf"
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onBlur={validarCampos}
                id="CPF"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                label="Promo????es"
                name="promocoes"
                control={
                    <Switch
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                        }}
                        name="promocoes"
                        color="primary"
                    />
                }
            />

            <FormControlLabel
                label="Novidades"
                name="novidades"
                control={
                    <Switch
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked);
                        }}
                        name="novidades"
                        color="primary"
                    />
                }
            />

            <Button type="submit" variant="contained" color="primary">
                Pr??ximo
            </Button>
        </form>
    );
}

export default DadosPessoais;
