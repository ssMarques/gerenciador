import React, { useState } from 'react';
import { Cabecalho } from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import "../styles/Login.css";
import {signInWithPopup, signOut} from "firebase/auth"
import {auth, provider} from "../firebaseConfig"
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<any>(null);


  const navigate = useNavigate();

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Login com Email: ${email}, Senha: ${password}`);
  };

  

    const LoginGoogle = async () => {
        try{
            const usuario = await signInWithPopup(auth,provider);
            setUser(user)
            navigate("/home")
        }catch(error){
            console.error("[404] Erro fudido, desligue seu pc imediatamente", error);
            throw error;
        }
    }

    const LogoutGoogle = async () => {
        try{
            await signOut(auth);
            setUser(null)
        }catch(error){
            console.error("[404] Erro fudido, desligue seu pc imediatamente", error);
            throw error;
        }
    }

    

  return (
    <div className="login-page">

      <div className="login-container">
        <h1>Bem-vindo de volta!</h1>
        <p>Faça login para acessar o Gerenciador de Orçamento Pessoal</p>

        <form className="login-form" onSubmit={handleEmailLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button type="submit" className="login-button">Entrar</button>
        </form>

        <div className="divider">Ou</div>

        <button onClick={LoginGoogle} className="google-login-button">
          Login com Google
        </button>
      </div>

    </div>
  );
};

export default Login;
