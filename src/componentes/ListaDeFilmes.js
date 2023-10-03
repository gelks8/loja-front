import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const URL_BACK = 'http://localhost:5000/filmes'

export default function ListaDeFilmes({filmes, setFilmes }) {
  const handleDelete = async (filmeId) => {
    try {
      await axios.delete(`${URL_BACK}/${filmeId}`);
      setFilmes((prevFilmes) => prevFilmes.filter((filme) => filme._id !== filmeId));
    } catch (error) {
      console.error('Erro ao excluir o filme:', error);
    }
  };

  const renderFilmes = (filme) => {
    return (
      <div className='filme' key={filme._id}>
        <Link to={'/detalhe/' + filme._id}>
          <img src={filme.foto} alt="" />
        </Link>
        <h3 className='filmeName my-0 fw-normal'>{filme.nome}</h3>
        <p className='filmeRating'>Rating: <span>{filme.avaliacao}</span></p>
        <button onClick={() => handleDelete(filme._id)}>Delete</button>
      </div>
    );
  };

  return (
    <div className='listaDeFilmes'>
      {filmes.map(renderFilmes)}
    </div>
  );
}