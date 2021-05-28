import React, {  useState } from "react";



export default function New() {
  const [company, setCompany] = useState("");
const [techs, setTechs] = useState("");
const [price, setPrice] = useState("");

  function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="company">EMPRESA</label>
      <input
        id="company"
        placeholder="sua empresa incrível"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
      />

      <label htmlFor="techs">
        TECNOLOGIA <span>separados</span>
      </label>
      <input
        id="techs"
        placeholder="Quais tecnologias?"
        value={techs}
        onChange={(event) => setTechs(event.target.value)}
      />

      <label htmlFor="price">
        VALOR <span>em branco para gratuito</span>
      </label>
      <input
        id="price"
        placeholder="Valor a combinar?"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
     

      <button type="submit" className="loginbtn">Cadastrar</button>
    </form>
  );
}
