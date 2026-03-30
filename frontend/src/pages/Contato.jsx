import "../styles/contato.css";

function Contatos() {
  return (
    <div className="contatos-container">
      <div className="contatos-box">
        <h2>Fale Conosco</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Seu Nome" required />
          <input type="email" placeholder="Seu E-mail" required />
          <textarea placeholder="Sua mensagem..." rows="5" required></textarea>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </div>
  );
}

export default Contatos;