"use client"
import Image from "next/image"
import styles from "./CategoryCard.module.css"


function CategoryCard({category}) {
  return (
    <div className={styles.category}>
        <Image src={category.image} alt={category.title} width={2500} height={2500}/>
        <p>{category.title}</p>
    </div>
  )
}

export default CategoryCard