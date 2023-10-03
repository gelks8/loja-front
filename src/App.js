import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import React, { useEffect, useState } from 'react';
import ListaDeFilmes from "./componentes/ListaDeFilmes";
import Cabecalho from "./componentes/Cabecalho";
import FormFilme from "./componentes/FormFilme";
import DetalheFilme from "./componentes/DetalheFilme";
import BuscarFilme from "./componentes/BuscarFilme";
import PaginaNaoEncontrada from "./componentes/PaginaNaoEncontrada";
import DetalheFilmeBuscado from "./componentes/DetalheFilmeBuscado";
import axios from "axios";

const URL_BACK = 'http://localhost:5000/filmes'

function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios.get(URL_BACK).then(res => {
      setFilmes(res.data);
    });
  }, []);

  const handleDelete = async (filmeId) => {
    try {
      await axios.delete(`${URL_BACK}/${filmeId}`);
      setFilmes(filmes.filter((filme) => filme._id !== filmeId));
    } catch (error) {
      console.error('Erro ao excluir o filme:', error);
    }
  };

  return (
    <Router>
      <Cabecalho/>

      <Routes>
        <Route
          path="/"
          exact={true}
          element={<ListaDeFilmes filmes={filmes} onDelete={handleDelete} />}
        />
        <Route path="/novo" exact={true} element={<FormFilme/>}/>
        <Route path="/detalhe/:id" exact={true} element={<DetalheFilme/>}/>
        <Route path="/buscar" exact={true} element={<BuscarFilme/>}/>
        <Route path="/detalhe-filme-buscado/:id" element={<DetalheFilmeBuscado />} />
        <Route path="*" exact={true} element={<PaginaNaoEncontrada/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
