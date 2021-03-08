import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

export default function DadosEntrega({ aoEnviar }) {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');

    return (
        <div>
            <h1>Entrega</h1>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    aoEnviar({ cep, endereco, numero, estado, cidade });
                }}
            >
                <TextField
                    onChange={(event) => setCep(event.target.value)}
                    id="cep"
                    name="email"
                    label="CEP"
                    type="number"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    onChange={(event) => setEndereco(event.target.value)}
                    id="endereco"
                    name="endereco"
                    label="Endereço"
                    type="text"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    onChange={(event) => setNumero(event.target.value)}
                    id="numero"
                    name="numero"
                    label="Número"
                    type="number"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    onChange={(event) => setEstado(event.target.value)}
                    id="estado"
                    name="estado"
                    label="Estado"
                    type="text"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    onChange={(event) => setCidade(event.target.value)}
                    id="cidade"
                    name="cidade"
                    label="Cidade"
                    type="text"
                    variant="outlined"
                    margin="normal"
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Finalizar cadastro
                </Button>
            </form>
        </div>
    );
}
