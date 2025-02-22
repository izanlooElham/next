import Shape from "@/components/module/Shape"
import "./Page.css"
import Layout from "@/components/layout/Layout"
import Stories from "@/components/module/Stories"
import HeaderText from "@/components/module/HeaderText"
import Categories from "@/components/module/Categories"
import CategoryText from "@/components/module/CategoryText"
// import SliderOfNew from "@/components/module/SliderOfNewProducts"

function IndexPage() {
  return (
    <>
    <Layout>
    <div className="container">
    </div>
    <Shape/>
    <HeaderText/>
    <Stories/>
    <CategoryText/>
    <Categories/>
    {/* <SliderOfNew/> */}
    </Layout>
    </>
  )
}

export default IndexPage