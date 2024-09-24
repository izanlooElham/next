import styles from "./HeaderText.module.css"

function HeaderText() {
  return (
    <div className={styles.container}>
        <div className={styles.preBorder}></div>
        <h1><span className={styles.rezqorazeq}>رزق و رازق،   </span>فروشگاه محصولات ارگانیک،  سالم و طبیعی،  در خدمت مردم  </h1>
        <div className={styles.nextBorder}></div>
    </div>
  )
}

export default HeaderText