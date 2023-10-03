import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const URL_BACK = 'http://localhost:5000/filmes'

export default function DetalheFilme() {
    let {id} = useParams();

    const [filme, setFilme] = useState({
        nome: '',
        avaliacao: '',
        foto: ''
    });

    useEffect(() => {
        axios.get(URL_BACK + '/' + id).then(res => {
            setFilme(res.data);
        });
    }, [id]);

    return (
    <div>
        <img src={filme.foto} alt=""/>
        <h1>{filme.nome}</h1>
        <h3>Rating: {filme.avaliacao}</h3>
        <Link to="/">Voltar</Link>
    </div>
  )
}
