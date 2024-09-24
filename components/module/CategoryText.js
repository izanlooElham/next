import styles from "./CategoryText.module.css"

function CategoryText() {
  return (
    <div className={styles.container}>
        <div className={styles.preBorder}></div>
            <h2>خرید بر اساس دسته بندی</h2>
        <div className={styles.nextBorder}></div>
    </div>
  )
}

export default CategoryText