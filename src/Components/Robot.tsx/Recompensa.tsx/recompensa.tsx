//importei o hook useState que é usado para controlar o estado do meu componente
import { useState } from 'react';

//importei todos os exports do aquivo recompensaStyle.tsx
import * as S from "./recompensaStyle.tsx"

//aqui eu defini um tipo typescript chamado RecompensaProps e ele me informa
//que o componente Recompensa deve chamar uma prop chamada Valor recompensa
//e que é do tipo number
type RecompensaProps = {
  valorRecompensa: number;
};

//aqui eu defini meu componente funcional Recompensa e ele aceita o 
//valorRecompensa como uma prop, logo após eu declarei dois estados com o
//hook useState, o primeiro é o recompensa que é inicializado com o valor de
//valorRecompensa, e a minha segunda declaração é o novoValor que é inicializado
//com uma string vazia
function Recompensa({ valorRecompensa }: RecompensaProps) {
  const [recompensa, setRecompensa] = useState(valorRecompensa);
  const [novoValor, setNovoValor] = useState('');

//aqui eu defini a função handleChance que é chamada sempre que o valor
//do input muda, ela vai me atualizar o estado novoValor com o valor
//que foi digitado no input 
  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const valorDigitado = evento.target.value;
    setNovoValor(valorDigitado);
  };

//aqui eu defini a minha função handleSubmit e ela é chamada quando 
//o formulário é enviado, essa função esta prevenindo o comportamento
//padrão do formulário, ela converte o novoValor para um número, atualiza
//o estado Recompensa com o novo valor e limpa o input novoValor
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const novoValorNum = Number(novoValor);
    setRecompensa(novoValorNum);
    setNovoValor('');
  };

//aqui abaixo o retorno do meu componente está renderizando a interface,
//e nele eu inclui um título e um parágrafo, o parágrafo me mostra o valor
//da recompensa formatado, o meu formulário chama a minha função handleSubmit
//ao ser enviado, também criei uma div guardando o meu input para guardar o novo
//valor da recompensa e um botão para atualizar o preço
  return (
    <S.Div>
      <h3>Seu preço</h3>
      <p>{recompensa.toLocaleString()} $ é meu preço</p>
      <form onSubmit={handleSubmit}>
        <S.Container>
          <input
            type="number"
            value={novoValor}
            onChange={handleChange}
            placeholder="Definir novo preço"
          />
          <S.Button type="submit">Atualizar preço</S.Button>
        </S.Container>
      </form>
    </S.Div>
  );
}

//por fim eu exportei o meu componente Recompensa permitindo
//que ele seja importado e utilizado em outros arquivos
export default Recompensa;