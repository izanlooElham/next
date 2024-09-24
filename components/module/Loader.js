import styles from "./Loader.module.css"

function Loader() {
  return (
    <div className={styles.myProgress}>
      <div className={styles.myBar}></div>
    </div>
  )
}

export default Loader