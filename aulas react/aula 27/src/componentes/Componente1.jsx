import './Componente1.css'
import styles from'./componente1.module.css'
function Componente1(){
return(
    <>
    <h1 className={`${styles.primaria} ${styles.fonte}`}>titulo do componente 1</h1>
    <p className={styles.secundaria}>paragrafo do componente 1</p>
    
    
    </>
)


} export default Componente1