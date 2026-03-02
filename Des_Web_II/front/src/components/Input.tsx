import { useContext } from "react"
import { LetterContext, type ContextProps } from "../contexts/Ctx";

export default function Input() {
    const { entrada, setEntrada } = useContext(LetterContext)  as ContextProps;

    return <input value={entrada} onChange={(e) => setEntrada(e.target.value)} />
}