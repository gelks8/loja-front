import React from 'react'
import { Link } from 'react-router-dom'

export default function Cabecalho() {
  return (
    <div>
        <h1>Filmes Online</h1>
        <nav>

          <div>
            <Link to="/novo">Cadastrar Filme</Link>
          </div>
          <div>
            <Link to="/buscar">Buscar Filme</Link>
          </div>
          
        </nav>
    </div>
  )
}
