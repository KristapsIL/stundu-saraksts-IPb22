import styles from "./Stunda.module.css"
function Stunda(props){
    return (
        <>
    <li className={styles.violet}>{props.nosaukums}</li>

    </>
    )
}
export default Stunda;