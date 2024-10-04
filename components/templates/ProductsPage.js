"use client"
import styles from "./ProductsPage.module.css"
import ProductsList from "../module/ProductsList"
import ProductsPageCategories from "../module/ProductsPageCategories"
import NavBar2 from "../layout/NavBar2"
import SearchBox from "../module/SearchBox"
import StoreText from "../module/StoreText"
import { useState } from "react"
import Pagination from "../module/Pagination"
import Head from "next/head"


function ProductsPage({category, search, products,categories}) {
  const [page, setPage]=useState(1)
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
        <Pagination page={page} setPage={setPage} category={category}/>
    </div>
  )
}

export default ProductsPage