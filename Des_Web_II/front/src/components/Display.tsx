import { useContext, type CSSProperties } from "react";
import { LetterContext, type ContextProps } from "../contexts/Ctx";
import Ball from "./Ball";

export default function Display(){
    const {entrada}  = useContext(LetterContext) as ContextProps;

    return <div style={containerSld}>{
        entrada.trim().split(" ").map( (item,index) => <Ball index={index} value={item}/>)
        }
        </div>
}

const containerSld: CSSProperties = {
    display:"flex",
    flexDirection: "row",
    justifyContent: "center"
}