import styles from "./NotFoundPage.module.css"

function NotFoundPage() {

  return (
    <div className={styles.container}>
        <div className={styles.row}>
            <div className="img_404">
                <img src="/404-error.png" alt=""/>
            </div>
            <div className={styles.text_404}>
                <h1>Page Not Found</h1>
            </div>
        </div>
        <div className={`${styles.img_animation} ${styles.position1}`}>
            <img src="/space.png" alt=""/>
        </div>
        <div className={`${styles.img_animation} ${styles.postion2}`}>
            <img src="/rocketpng.png" alt=""/>
        </div>
    
        <div className={`${styles.img_animation} ${styles.postion3}`}>
            <img src="/Planet_1.png" alt=""/>
        </div>
        <div className={`${styles.img_animation} ${styles.postion4}`}>
            <img src="/earth1.png" alt=""/>
        </div>
    </div>
  )
}

export default NotFoundPage

   