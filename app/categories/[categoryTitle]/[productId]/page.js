import ProductDetails from "@/components/module/ProductDetails"


function ProductDetailById({params}) {
    const {productId}= params
  return (
    <ProductDetails productId={productId}/>
  )
}

export default ProductDetailById