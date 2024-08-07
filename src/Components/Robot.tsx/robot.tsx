//aqui nas primeiras linhas do meu código estou importando todos
//os exports do meu arquivo roboStyle, importei também a imagem do
//meu robo, e por último importei meu componente Recompensa
import * as S from "./robotStyle.tsx"
import Robo from "../Robot.tsx/robo.png"
import Recompensa from "./Recompensa.tsx/recompensa.tsx";

//aqui abaixo eu defini um tipo TypeScript RobotProps que está
//especifícando que o meu component robot deve receber três props
//e que essas props são todas do tipo 'string'
type RobotProps = {
    tipo: string;
    cargo: string;
    identificador: string;
};

//criei o meu componente funcional robot que aceita tipo, 
//cargo e identificador como props
function Robot({ tipo, cargo, identificador }: RobotProps) {

//estou retornando o meu componente funcional, dentro do meu
//fragmento <> coloquei alguns elementos, meu h1 exibe o tipo
//do meu robo, o meu h3 vai exibir o cargo do meu robo e o meu
//h4 vai exibir o identificador do meu robo, minha Div4 contém
//o meu componente Recompensa e está repassando o valorRecompensa como 10
    return (
        <>
            <S.Div>
                <S.Section>
                    <div>
                        <div>
                            <img src={Robo} alt="Robo Ultron" />
                        </div>
                        <S.Container>
                            <h1>{tipo}</h1>
                            <h3>{cargo}</h3>
                            <h4>{identificador}</h4>
                        </S.Container>
                    </div>
                    <S.Content>
                        <Recompensa valorRecompensa={10} />
                    </S.Content>
                </S.Section>
            </S.Div >
        </>
    )
}

//aqui abaixo estou exportando meu componente Robot
//e estou permitindo que ele seja usado em outros 
//arquivos caso eu quiser
export default Robot