interface Props {
    value: string;
    index: number;
}

export default function Ball(props:Props){
    return <div key={props.index} style={ballSld}>{props.value}</div>
}

const ballSld = {
    backgroundColor: "#20B2AA",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "30px",
    width: "60px",
    height: "60px",
    fontSize: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}