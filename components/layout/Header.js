"use client"

import Link from "next/link";
import styles from "./Header.module.css"
import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";
import { RiLoginCircleFill } from "react-icons/ri";
import SearchBox from "../module/SearchBox";
import { getProfile } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import { TbPointFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import NavBar from "./NavBar";
import { RiAdminFill } from "react-icons/ri";


function Header() {
    const [shouldFetch, setShouldFetch] = useState(false); // متغیر وضعیت برای کنترل اجرا
    
    // استفاده از useQuery
    const { data, isLoading, error } = useQuery({
      queryKey: ["profile"],
      queryFn: getProfile,
      enabled: shouldFetch,
      // structuralSharing: false // فعال‌سازی بر اساس shouldFetch
    });
    
    useEffect(() => {
        // فقط یک بار اجرای useQuery
        setShouldFetch(true); // فعال‌سازی fetch هنگام بارگذاری کامپوننت
    }, []); // وابستگی خالی به این معنی است که این effect فقط یک بار اجرا می‌شود

  return (
    <div className={styles.container}>
      <NavBar/>
        <header className={styles.header}>  
          <div className={styles.head}>
            <div className={styles.cart_logo}>
              {
               data? (<div className={styles.loader}><div className={styles.point}></div></div>) : null
              }
               {
                data ? (<Link href="/dashboard"><FaUser style={{fontSize:"25px",}}/></Link>) : (
                  <Link href="/auth">
                  <RiLoginCircleFill/>
                  </Link>
                  )
               }
               {
                data && data.data.user.Role === "ADMIN" ? (<Link href="/admin"><RiAdminFill style={{fontSize:"28px"}}/></Link>) : null
               }
               <Link href="https://t.me/rezqorazeq" className={styles.cartIcon}><MdShoppingCart/></Link>
            </div>
            <SearchBox/>
            <div className={styles.logo}>
              <Image src="/Logo4.svg" width={600} height={700} alt="logo" />
            </div>
          </div>
          <div className={styles.menu}>
            <ul className={styles.navgation}>
            {/* <li>< Link href="/">خانه</Link></li>   */}
            {/* <li>< Link href="/products">فروشگاه</Link></li>      */}
              <li> <Link href="https://t.me/rezqorazeq">دواها </Link></li>
              <li><Link href="https://t.me/rezqorazeq">  گیاهان دارویی</Link></li>
              <li> <Link href="https://t.me/rezqorazeq"> عرقیات </Link></li>
              <li> <Link href="https://t.me/rezqorazeq"> خشکبار </Link></li>
              <li className={styles.arrow_icon}>  
                <Link href="https://t.me/rezqorazeq">مواد غذایی</Link>
                <div className={styles.div_sub_food}>
                 <Image src="/sobhane.svg.png" width={300} height={500} className={styles.sobhane} alt="sobhane"/>
                  <ul className={styles.subMenu2}>
                  <li>
                  <TbPointFilled/>
                    <Link href="https://t.me/rezqorazeq">عسل طبیعی </Link>
                  
                  </li>
                  <li>
                  <TbPointFilled/>
                    <Link href="https://t.me/rezqorazeq">زرشک و زعفران</Link>
                  
                  </li>
                  <li>
                  <TbPointFilled/>
                    <Link href="https://t.me/rezqorazeq">صبحانه</Link>
                 
                  </li>
                  <li>
                  <TbPointFilled/>
                    <Link href="https://t.me/rezqorazeq"> سویق </Link>
                  
                  </li>
                  <li>
                  <TbPointFilled/>
                    <Link href="https://t.me/rezqorazeq">سبزی خشک</Link>
                  
                  </li>
                  </ul>
                  <Image src="/nut.jpg" width={300} height={500} className={styles.nut} alt="nut"/>
                  <ul className={styles.subMenu}>

                  <li>
                  <TbPointFilled/>
                    <Link href="https://t.me/rezqorazeq">رب,چاشنی و مزه</Link>
                  </li>
              
                  <li>
                  <TbPointFilled/>
                    <Link href="https://t.me/rezqorazeq"> لوازم قنادی</Link>
              
                  </li>
                  <li>
                  <TbPointFilled/>
                    <Link href="https://t.me/rezqorazeq">برنج</Link>
               
                  </li>
                  <li>
                  <TbPointFilled/>
                    <Link href="https://t.me/rezqorazeq">محصولات نیشکر</Link>
                 
                  </li>
                  <li>
                  <TbPointFilled/>
                    <Link href="https://t.me/rezqorazeq">لبنیات</Link>
                
                  </li>
                 
                  </ul>
               </div>
               
            
              </li>
              <li> <Link href="https://t.me/rezqorazeq"> حبوبات </Link></li>
              <li> <Link href="https://t.me/rezqorazeq"> بهداشتی و زیبایی </Link></li>
              <li> <Link href="https://t.me/rezqorazeq"> خوراکی و تنقلات </Link></li>
              <li className={styles.arrow_icon}>
                 <Link href="https://t.me/rezqorazeq"> روغن ها </Link>
                <div className={styles.div_sub_oil}>
                 <Image src="/zeitoonOil.jpg" width={300} height={500} className={styles.oil} alt="oil"/>
                  <ul className={styles.subMenu3}>
                  <li>
                  <TbPointFilled/>
                    <Link href="https://t.me/rezqorazeq"> روغن پخت و پز و سرخ کردن</Link>                
                  </li>
                  <li>
                  <TbPointFilled/>
                    <Link href="https://t.me/rezqorazeq"> روغن پوست و مو </Link>                
                  </li>           
                  </ul>
                </div>
              </li>
              <li> <Link href="https://t.me/rezqorazeq"> شوینده ها </Link></li>
             {/* <li>  <Link href="https://t.me/rezqorazeq">درباره ما</Link></li> */}
            </ul>
          </div>

        </header>
    </div>
  )
}

export default Header
