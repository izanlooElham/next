"use client"

import styles from "./ProductsList.module.css"
import CardProduct from "../module/CardProduct"
import { filtered } from "@/helper/helper"
import { useState } from "react"
import SideCartInProductPage from "./SideCartInProductPage"

function ProductsList({category, search, products, categories}) {
  const [liked, setLiked]= useState([])
  const [bookmarked, setBookmarked]= useState([])
  const [purchased,setPurchased]=useState([])
  // این و اوکی کنم
  const handleShopList=(product, status)=>{
    if(status){
      const newShopList= purchased.filter(i=> i._id !== product._id)
      setPurchased(newShopList)
    }else{
      setPurchased(purchased=> [...purchased, product])
    }
  }
  const handleLikedList=(product, status)=>{
      if(status){
        const newLikedList= liked.filter(i=> i._id !== product._id)
        setLiked(newLikedList)
      }else{
        setLiked(liked=> [...liked, product])
      }
  }
  const handleBookmarkedList=(product, status)=>{
    if(status){
      const newBookmarkedList= bookmarked.filter(i=> i._id !== product._id)
      setBookmarked(newBookmarkedList)
    }else{
      setBookmarked(bookmarked=> [...bookmarked, product])
    }
}



  // Function to create a category map for fast lookup
const createCategoryMap = (categories) => {
  const categoryMap = new Map();
  const addToMap = (category) => {
    categoryMap.set(category.title, category);
    if (category.children) {
      category.children.forEach(addToMap);
    }
  };
  categories.forEach(addToMap);
  return categoryMap;
};
  // Create a category map for faster access
  const categoryMap = createCategoryMap(categories);
  const selectedCategory = categoryMap.get(category);

  
  // Index products by category title for quick access
  const productIndex = products.reduce((index, product) => {
    const categoryTitle = product.category.title;
    if (!index[categoryTitle]) {
      index[categoryTitle] = [];
    }
    index[categoryTitle].push(product);
    return index;
  }, {});
   // Filter products based on the selected category
   const filteredProducts = () => {
    if (!selectedCategory) return [];

    const selectedChildrenTitles = selectedCategory.children
      ? selectedCategory.children.map(child => child.title)
      : [];

   
    // Collect all relevant products from the index
    const relevantProducts = [];
    if (productIndex[selectedCategory.title]) {
      relevantProducts.push(...productIndex[selectedCategory.title]);
    }
    selectedChildrenTitles.forEach(title => {
      if (productIndex[title]) {
        relevantProducts.push(...productIndex[title]);
      }
    });
    return relevantProducts;
  };
  
      const finalData = filtered(search, filteredProducts());
  return (
    <>
    <div className={styles.container}>
        {
          finalData.map((product)=> <CardProduct
          product={product} key={product._id} 
          handleLikedList={handleLikedList} 
          handleBookmarkedList={handleBookmarkedList}
          handleShopList={handleShopList}
          />)
        }
    </div>
        {
          !!purchased.length  && (purchased.map(product=> (<SideCartInProductPage key={product._id} data={product}/>)))
        }
    </>
  )
}

export default ProductsList