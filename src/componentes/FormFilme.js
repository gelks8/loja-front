import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const URL_BACK = 'http://localhost:5000/filmes'

export default function FormFilme() {
    const formVazio = () => {
        return {
            nome: '',
            avaliacao: 0.0,
            foto: ''
        };
    };

    const navigate = useNavigate();
    const [form, setForm] = useState(formVazio());

    const setValor = (evento) => {
        setForm({...form, [evento.target.name]: evento.target.value});
    };

    const cadastrarFilme = (e) => {
        e.preventDefault();
        axios.post(URL_BACK, form).then(res => {
            navigate('/');
        });
    };

    return (
        <form onSubmit={cadastrarFilme}>
            <p>
                <label>Nome: </label>
                <input name="nome" type="text" value={form.nome} onChange={setValor}/>
            </p>
            <p>
                <label>Avaliação: </label>
                <input name="avaliacao" type="number" value={form.avaliacao} onChange={setValor}/>
            </p>
            <p>
                <label>Foto: </label>
                <input name="foto" type="text" value={form.foto} onChange={setValor}/>
            </p>
            <p>
                <button>Cadastrar</button>
            </p>
        </form>
    )
}
