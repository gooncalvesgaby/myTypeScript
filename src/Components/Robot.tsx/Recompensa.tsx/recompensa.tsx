import { useState } from 'react';
import * as S from "./recompensaStyle.tsx"

type RecompensaProps = {
  valorRecompensa: number;
};

function Recompensa({ valorRecompensa }: RecompensaProps) {
  const [recompensa, setRecompensa] = useState(valorRecompensa);
  const [novoValor, setNovoValor] = useState('');

  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const valorDigitado = evento.target.value;
    setNovoValor(valorDigitado);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const novoValorNum = Number(novoValor);
    setRecompensa(novoValorNum);
    setNovoValor('');
  };

  return (
    <S.Div>
      <h3>Seu preço</h3>
      <p>{recompensa.toLocaleString()} $ é meu preço</p>
      <form onSubmit={handleSubmit}>
        <S.Div2>
          <input
            type="number"
            value={novoValor}
            onChange={handleChange}
            placeholder="Definir novo preço"
          />
          <S.Button type="submit">Atualizar preço</S.Button>
        </S.Div2>
      </form>
    </S.Div>
  );
}

export default Recompensa;