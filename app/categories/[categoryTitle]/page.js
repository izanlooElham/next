import ProductsPage from "@/components/templates/ProductsPage";
import { getAllCategories } from "@/services/categories";
import { getAllProducts } from "@/services/products";
import Head from "next/head";


async function category({ params,searchParams}) {
  const {page}=searchParams
  const search=searchParams?.search || ''
  const {categoryTitle}=params
  const decodedTitle = decodeURIComponent(categoryTitle);
  const {res}= await getAllCategories() 
  const {response}= await getAllProducts(search,page)
  const categories= res.data.data.categories
  const products= response.data.data.products

  return (
    <>
    <Head>
          <title>فروشگاه رزق و رازق</title>
          <meta content="بزرگترین فروشگاه محصولات ارگانیک و با کیفیت"  name="description"/>
    </Head>
    <ProductsPage category={decodedTitle} search={search} categories={categories} products={products}/>
    </>
  )
}

export default category