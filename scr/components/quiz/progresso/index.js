import React from 'react';

const Progresso = ({ progresso }) => {
  const porcentagem = progresso * 100;

  return (
    <div className="progresso">
      <div className="barra-progresso" style={{ width: `${porcentagem}%` }}></div>
    </div>
  );
};

export default Progresso;