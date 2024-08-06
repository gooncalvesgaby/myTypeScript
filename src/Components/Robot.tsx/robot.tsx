import * as S from "./robotStyle.tsx"
import Robo from "../Robot.tsx/robo.png"

type RobotProps = {
    tipo: string;
    cargo: string;
    identificador: string;
};

function Robot({tipo, cargo, identificador} : RobotProps) {

    return(
        <S.Div className="robot">
            <img src={Robo} alt="Robo Ultron" />
            <h1>{tipo}</h1>
            <h3>{cargo}</h3>
            <h4>{identificador}</h4>
        </S.Div>
    )
}

export default Robot