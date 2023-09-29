import Stunda from "./Stunda";
function Diena(props){

    return(
        <>
            <div Class ="green">
                <h2>{props.diena}</h2>
                <ol type="1">
                <Stunda stunda={props.stundas[0]}/>
                <Stunda stunda={props.stundas[1]}/>
                <Stunda stunda={props.stundas[2]}/>
                <Stunda stunda={props.stundas[3]}/>
                </ol>
            </div>
        </>
    )

}
export default Diena;