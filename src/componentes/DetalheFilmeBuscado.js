import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const URL_BACK = 'http://localhost:5000/filmes';
const API_KEY = 'a59ea74c';

export default function DetalheFilmeBuscado() {
    const { id } = useParams();
    const [filme, setFilme] = useState(null);

    useEffect(() => {
        const buscarDetalhesDoFilme = async () => {
          try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
            setFilme(response.data);
          } catch (error) {
            console.error('Erro ao buscar detalhes do filme:', error);
          }
        };
    
        buscarDetalhesDoFilme();
    }, [id]);

    const adicionarFilme = async () => {
        try {
            const filmeASalvar = {
                nome: filme.Title,
                avaliacao: filme.imdbRating,
                foto: filme.Poster,
            };
            const response = await axios.post(URL_BACK, filmeASalvar);
            alert('Filme adicionado com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao adicionar filme:', error);
        }
    };

    return (
        <div>
            {filme ? (
            <div>
                <img src={filme.Poster} alt={filme.Title} />
                <h1>{filme.Title}</h1>
                <p>Ano: {filme.Year}</p>
                <p>Director: {filme.Director}</p>
                <p>Plot: {filme.Plot}</p>
                <p>Rating: {filme.imdbRating}</p>
                <button onClick={adicionarFilme}>Adicionar Filme</button>
                <Link to="/buscar">Voltar</Link>
            </div>
            ) : (
            <p>Carregando detalhes do filme...</p>
            )}
        </div>
    );
}