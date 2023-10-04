import Stunda from "./Stunda";
function Diena(props){
    const stundasJSX = props.stundas.map((stunda)=>{
        return <Stunda nosaukums={stunda}/>
    });
    return(
        <>
            <div>
                <h2>{props.diena}</h2>
                <ol type="1">
                    {stundasJSX}
                </ol>
            </div>
        </>
    )

}
export default Diena;