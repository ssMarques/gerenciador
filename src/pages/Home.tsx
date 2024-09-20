import React from 'react';
import { Cabecalho } from '../components/Cabecalho'; 
import Rodape from '../components/Rodape'; 
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <main className="home-content">
        <h1>Bem-vindo ao Gerenciador de Orçamento Pessoal</h1>
        <p>Este site ajuda você a gerenciar suas finanças de maneira simples e eficiente. Controle seus gastos, receitas e tenha uma visão geral do seu orçamento.</p>
      </main>
    </div>
  );
};

export default Home;