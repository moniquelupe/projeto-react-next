import React, { useState } from 'react';

const MeuComponente = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Meu Componente</h2>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

export default MeuComponente;