import { Btn } from "./Button.styled"

export const Button = ({text, onClick}) => {
    return (
        <Btn onClick={onClick}>{text}</Btn>
    )
}