"use client"
import { useState } from "react";
import styles from "./ProductsPageCategories.module.css"
import { TbCategoryFilled } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";


function ProductsPageCategories({categories,category}) {
    const [expandedCategories, setExpandedCategories] = useState({});

    const toggleCategory = (categoryId) => {
        setExpandedCategories((prevState) => ({
            ...prevState,
            [categoryId]: !prevState[categoryId],
        }));
    };
 
    return (
        <div className={styles.sidebar}>
            <div className={styles.head}>
            <h2>دسته بندی ها</h2>
            <TbCategoryFilled style={{color:"#99cc66"}}/>
            </div>
            <div className={styles.categories}>
            <ul>
                {categories.map(cat => {
                  
                  const isActive = category === cat.title;
                  const hasActiveChild = cat.children.some(child => category === child.title)
                  const isExpanded = expandedCategories[cat._id] || hasActiveChild;
                    return(
                        <li key={cat._id}>
                        <div
                            className={`${styles.categoryTitle} ${isActive ? styles.active : ''}`}
                            onClick={() => cat.children.length > 0 && toggleCategory(cat._id)}
                            >
                            <Link href={`/categories/${cat.title}`} passHref>
                            {cat.title}
                            </Link>
                            {cat.children.length > 0 && (
                                <span className={styles.arrow}>
                                    {isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                </span>
                            )}
                        </div>
                        {isExpanded  && cat.children.length > 0 && (
                            <ul className={styles.subCategories}>
                                {cat.children.map(child => {
                                    const isChildActive = category === child.title;
                                    return(
                                    <li  className={`${isChildActive ? styles.active : ''}`}  key={child._id}>
                                    <Link href={`/categories/${child.title}`} passHref>
                                        {child.title}
                                    </Link>
                                    </li>
                                    )
                                  })}
                            </ul>
                        )}
                    </li>
                    )
                })}
            </ul>
            </div>
        </div>
    );

}

export default ProductsPageCategories