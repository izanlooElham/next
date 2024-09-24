import { getOneProductById } from "@/services/products"
import styles from "./ProductDetails.module.css"
import Shape from "./Shape"
import NavBar2 from "../layout/NavBar2"



async function ProductDetails({productId}) {
    const {response}=await getOneProductById(productId)
    const product=response.data.data.product
  return (
    <>
    <NavBar2/>
    <Shape/>
    <div className={styles.container}>

    </div>
    </>
  )
}

export default ProductDetails