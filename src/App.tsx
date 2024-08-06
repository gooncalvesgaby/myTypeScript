import Robot from "./Components/Robot.tsx/robot"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
`

function App() {

  return (
    <>
    <GlobalStyle/>
    <Robot tipo="Ultron" cargo="Herói da Marvel" identificador="1968"/>
    </>
  )
}

export default App
