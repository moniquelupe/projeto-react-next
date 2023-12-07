import React, { useState, useEffect } from "react";
import axios from "axios";

const MeuComponente = () => {
  const [contador, setContador] = useState(0);
  const [dados, setDados] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://rickandmortyapi.com/api");
        console.log(response.data);
        setDados(response.data);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Meu Componente</h2>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      {dados && (
        <div>
          <h3>Dados da API:</h3>
          <pre>{JSON.stringify(dados, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MeuComponente;
