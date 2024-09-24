import CategoryCard from "./CategoryCard"
import styles from "./Categories.module.css"
import { getAllCategories } from '@/services/categories'
import Link from "next/link"



async function Categories() {
  const {res}=await getAllCategories()
  return (
    <div className={styles.container}>
      {
        res.data.data.categories.map(category=>{
        return(
        <div key={category._id} className={styles.categories}>
          <Link href={`/categories/${category.title}`} >
            <CategoryCard category={category} />
          </Link>
        </div>

        )
        })
      }
    </div>
  )
}

export default Categories