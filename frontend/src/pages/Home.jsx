import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/home.css'

function Home() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3040/login", {
        login,
        senha,
      });

   
      localStorage.setItem("token", response.data.token);
      
      alert("Login efetuado com sucesso!");
      navigate("/adm"); 
      
    } catch (error) {
      alert("Erro ao fazer login. Verifique suas credenciais.");
      console.error(error);
    }
  };

  return (
    <div className="home-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input 
          type="email" 
          placeholder="E-mail" 
          value={login} 
          onChange={(e) => setLogin(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
          required 
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Home;