import React from 'react';
import { Cabecalho } from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import "../styles/Sobre.css";
import perfil from "../styles/file.png"

const Sobre: React.FC = () => {
  return (
    <div className="sobre-container">

      <h1>Sobre</h1>
      <div className="sobre-content">
        {/* Exibindo a foto a partir da pasta public */}
        <img src={perfil} alt="Foto de Samuel Santos Marques" className="foto-samuel" />
        <div className="sobre-texto">
          <h2>Samuel Santos Marques</h2>
          <p>
            Sou estudante de Engenharia de Software na FAG e trabalho atualmente na Certto Fibra,
            onde atuo como suporte para clientes corporativos. Tenho grande interesse no
            desenvolvimento de software e estou sempre buscando aprimorar minhas habilidades.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Sobre;
