import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cabecalho.css'; // Certifique-se de que o caminho está correto
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebaseConfig";

export const Cabecalho = () => {
  const [user, setUser] = useState<any>(null);

  // Verifica se o usuário está logado ou não quando o componente monta
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);  // Atualiza o estado com o usuário logado ou null se não estiver logado
    });

    // Cleanup da subscrição quando o componente desmonta
    return () => unsubscribe();
  }, []);

  const LogoutGoogle = async () => {
    try {
      await signOut(auth);
      setUser(null); // Este setUser é redundante, pois onAuthStateChanged irá ajustar isso
    } catch (error) {
      console.log("[404] Erro, desligue seu PC imediatamente", error);
      throw error;
    }
  }

  return (
    <div className="cabecalho-container">
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          {user ? ( // Verifica se o usuário está logado
            <>
              <li><a onClick={LogoutGoogle} className='logout'>Logout</a></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
