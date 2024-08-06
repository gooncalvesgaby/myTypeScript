import * as S from "./robotStyle.tsx"
import Robo from "../Robot.tsx/robo.png"
import Recompensa from "./Recompensa.tsx/recompensa.tsx";

type RobotProps = {
    tipo: string;
    cargo: string;
    identificador: string;
};

function Robot({ tipo, cargo, identificador }: RobotProps) {

    return (
        <>
            <S.Div>
                <S.Section>
                    <div>
                        <div>
                            <img src={Robo} alt="Robo Ultron" />
                        </div>
                        <S.Div3>
                            <h1>{tipo}</h1>
                            <h3>{cargo}</h3>
                            <h4>{identificador}</h4>
                        </S.Div3>
                    </div>
                    <S.Div4>
                        <Recompensa valorRecompensa={10} />
                    </S.Div4>
                </S.Section>
            </S.Div >
        </>
    )
}

export default Robot