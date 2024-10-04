"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import styles from "./Pagination.module.css"

function Pagination({category}) {
    const router = useRouter();
    const [page, setPage]=useState(1)

    useEffect(() => {
        // Update the URL with the current page
        router.push(`/categories/${category}?page=${page}`, undefined, { shallow: true });
    }, [page, category]); // Run this effect when page or category changes

    const nextHandler=()=>{
        if(page >= 18) return
        setPage((page)=>page+1)
    }
    const previousHandler=()=>{
        setPage((page) => (page > 1 ? page - 1 : 1))    
    }
  return (
    <div className={styles.pagination}>
        <button onClick={previousHandler} className={page===1 ?  styles.disabled : null}>قبلی</button>
        <p className={page === 1 ? styles.selected : null}>1</p>
        <p className={page === 2 ? styles.selected : null}>2</p>
        {
            page >2 && page< 17 && (
                <>
                <span>...</span>
                <p className={styles.selected}>{page}</p>
                </>
            )
        }
        <span>...</span>
        <p className={page === 17 ? styles.selected : null}>17</p>
        <p className={page === 18 ? styles.selected : null}>18</p>
        <button onClick={nextHandler} className={page===18 ?  styles.disabled : null}>بعدی</button>
    </div>
  ) 
}

export default Pagination