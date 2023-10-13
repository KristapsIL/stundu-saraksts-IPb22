import Stunda from "./Stunda";
import styles from "./Diena.module.css";
function Diena(props){
    const stundasJSX = props.stundas.map((stunda, indeks)=>{
        return <Stunda key={indeks} nosaukums={stunda}/>
    });
    return(
        <>
            <div>
                <h2 className={styles.violet}>{props.diena}</h2>
                <ol type="1">
                    {stundasJSX}
                </ol>
            </div>
        </>
    )

}
export default Diena;