import style from "styled-components"

export const Div = style.div`
height: 15rem;
display: contents;
font-size: 0.9em;
`

export const Container = style.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 10px;
gap: 7px
`


export const Button = style.button`
border-radius: 1rem;
font-size: 12px;
background-color: #571e1e;
color: white;
border: none;
width: 10vw;
cursor: pointer;
`