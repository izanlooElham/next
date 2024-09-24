import ProductsPage from "@/components/templates/ProductsPage";


function category({ params,searchParams}) {
  const search=searchParams?.search || ''
  const {categoryTitle}=params
  const decodedTitle = decodeURIComponent(categoryTitle);

  return (
    <ProductsPage category={decodedTitle} search={search}/>
  )
}

export default category