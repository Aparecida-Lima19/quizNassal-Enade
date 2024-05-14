import React from 'react';

const Resposta = ({ opcao, selecionada, onSelecao }) => {
  const estilo = selecionada ? 'resposta-selecionada' : 'resposta';

  return (
    <button className={estilo} onClick={onSelecao}>
      {opcao.texto}
    </button>
  );
};

export default Resposta;