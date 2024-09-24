import { getAllCategories } from "@/services/categories"
import styles from "./ProductsPage.module.css"
import ProductsList from "../module/ProductsList"
import ProductsPageCategories from "../module/ProductsPageCategories"
import NavBar2 from "../layout/NavBar2"
import SearchBox from "../module/SearchBox"
import StoreText from "../module/StoreText"
import { getAllProducts } from "@/services/products"

async function ProductsPage({category, search}) {
  const {res}= await getAllCategories() 
  const {response}= await getAllProducts(search)
  const categories= res.data.data.categories
  const products= response.data.data.products
  return (
    <div className={styles.container}>
        <NavBar2/>
        <StoreText/>
        <SearchBox/>
        <div className={styles.ProductsAndCategories}>
            <div className={styles.categories}>
              <ProductsPageCategories categories={categories} category={category}/>
            </div>
            <div className={styles.ProductsList}>
                <ProductsList category={category} search={search} products={products} categories={categories}/>
            </div>
        </div>       
    </div>
  )
}

export default ProductsPage