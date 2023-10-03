import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';


export default function BuscaFilme() {

    const [movieTitle, setMovieTitle] = useState('');
    const [movieData, setMovieData] = useState(null);

    const apiKey = 'a59ea74c';
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=`;

    const buscarFilme = async () => {
        try {
            const response = await axios.get(apiUrl + movieTitle);
            setMovieData(response.data);
        } catch (error) {
            console.error('Erro ao buscar o filme:', error);
        }
    };


    return (
        <div>
            <h1>Busca de Filmes Online</h1>
            <input
            type="text"
            placeholder="Digite o título do filme"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
            />
            <button onClick={buscarFilme}>Buscar</button>
            <Link to="/">Voltar</Link>
            {movieData && (
                <div>
                    <Link to={`/detalhe-filme-buscado/${movieData.imdbID}`}>
                        {movieData.Title}
                    </Link>
                </div>
            
            )}
        </div>

      );
}