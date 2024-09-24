import styles from "./StoreText.module.css"

function StoreText() {
  return (
    <div className={styles.container}>
        <div className={styles.preBorder}></div>
        <h1><span className={styles.rezqorazeq}></span> به فروشگاه رزق و رازق خوش آمدید </h1>
        <div className={styles.nextBorder}></div>
    </div>
  )
}

export default StoreText