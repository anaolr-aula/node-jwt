import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/adm.css"
function Adm() {
  const [nome, setNome] = useState("");
  const [novoEmail, setNovoEmail] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const navigate = useNavigate();

  // Verifica se o usuário tem um token logo que a página carrega
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Acesso negado! Faça login primeiro.");
      navigate("/");
    }
  }, [navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        `http://localhost:3040/register`, 
        { nome, email: novoEmail, senha: novaSenha },
        {
          // É AQUI QUE A MÁGICA ACONTECE: Enviamos o token no cabeçalho da requisição
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      alert("Novo usuário cadastrado com sucesso!");
      setNome("");
      setNovoEmail("");
      setNovaSenha("");
      
    } catch (error) {
      alert("Erro ao cadastrar usuário. Talvez o token seja inválido ou expirou.");
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="adm-container">
      <div className="adm-box">
        <h2>Cadastrar Novo Usuário</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
          <input type="email" placeholder="E-mail" value={novoEmail} onChange={(e) => setNovoEmail(e.target.value)} required />
          <input type="password" placeholder="Senha" value={novaSenha} onChange={(e) => setNovaSenha(e.target.value)} required />
          <button type="submit">Cadastrar</button>
        </form>
        <button onClick={handleLogout} style={{ marginTop: '20px' }}>Sair (Logout)</button>
      </div>
    </div>
  );
}

export default Adm;