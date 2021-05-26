import React, {useState} from "react";
import api from "../src/services/api";
import "./App.css";
import logo from "../src/assets/logo.svg";

function App() {
  const [email, setEmail] = useState('');

  function handleSubmit(event){
    event.preventDefault();

console.log(email);
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnc" />
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre{" "}
          <strong> talentos</strong> para seu sucesso.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="" placeholder="Seu melhor E-mail" value={email} onChange={ event => setEmail(event.target.value)}/>

          <button className="loginbtn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
