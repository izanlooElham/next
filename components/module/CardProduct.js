"use client"
import styles from "./CardProduct.module.css"
import Image from "next/image"
import { FaPlus } from "react-icons/fa6";
import { BsDash } from "react-icons/bs";
import Link from "next/link";
import Radio from "@/star/star"
import { useState } from "react";
import Like from "./Like";
import BookMark from "./Bookmark";

function CardProduct({ product, handleLikedList,handleBookmarkedList,handleShopList}) {
  const {title,price,images,_id,category,likes, bookmarks}=product
    const [shop, setShop]=useState(false)
    const [count, setCount] = useState(1);
    
    // shophandler رو اوکی کنم
    const shopHandler=()=>{
      handleShopList(product,shop)
      setShop((prev)=>!prev)
    }

    const addHandler = () => {
      setCount(prevCount => prevCount + 1);
    };
  
    const removeHandler = () => {
      setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1)); // اطمینان حاصل کنید که تعداد از 1 کمتر نمی‌شود
    };
  return (
    <div className={styles.container} onClick={handleLikedList}>
      <div className={styles.Favorites}> 
            <Like likes={likes} id={_id}/>
            <BookMark bookmarks={bookmarks} id={_id}/>
      </div>
      <Link href={`/categories/${category.title}/${_id}`}>
      {images.map((image, index) => (
                <Image 
                    key={index} // Use index or a unique id
                    src={image} 
                    alt={title} 
                    height={800} 
                    width={1000} 
                />
            ))}
        {/* <Image src={images} alt={title} height={800} width={1000}/> */}
      </Link>
        <p>{title}</p>
        <div className={styles.priceAndRating}>
             <Radio/>
            <span>{price} تومان </span>
        </div>
        <div className={styles.buttons}>
          <button className={styles.add} onClick={shopHandler}>
            <span>خرید</span>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
            </button>
          <div className={styles.plusAndDash}>
          <button className={styles.plus} onClick={addHandler} ><FaPlus/></button>
          <span>{count}</span>
          <button className={styles.dash} onClick={removeHandler}><BsDash/></button>
          </div>
        </div>
       
    </div>
  )
}

export default CardProduct