import Link from "next/link"
import Image from "next/image";
import styles from "./Footer.module.css"
import { RiTeamFill } from "react-icons/ri";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { RiBloggerFill } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaPhoneFlip } from "react-icons/fa6";


function Footer() {
  return (
    
        <div className={styles.container}>
            <Image src="/organicStore.jpg" width={1600} height={1600} alt="organic"/>
            <div className={styles.description}>
                <span>رزق و رازق</span>
                <p>در قلب شهر, در میان صفای طبیعت, فروشگاه رزق و رازق با آغوش باز منتظر شماست. 
                    ما اینجا با عشق و دقت فراوان , بهترین محصولات ارگانیک و تازه را برای شما گرد آورده ایم.
                    بزرگترین هدف این شرکت ایجاد تحول در زمینه تغذیه و فرهنگ سازی تغذیه سالم در سطح جامعه است.
                </p>
            </div>
            <div className={styles.Chosen}>
                <span>صفحات منتخب</span>
                <p>
                    <Link href="/aboutus"><RiTeamFill/>  درباره ما</Link>
                    
                </p>
                <p>
                    <Link href="http://www.digicala.com"><IoStorefrontSharp/>  فروشگاه</Link>
                   
                </p>
                <p>
                    <Link href="http://www.digicala.com"><RiBloggerFill/>  وبلاگ</Link>
                    
                </p>
                <p>
                    <Link href="http://www.digicala.com"> <FaUserCircle/>  حساب کاربری </Link>
                    
                </p>
                <p>
                    <Link href="http://www.digicala.com"> <FaQuestion/> سوالات متداول </Link>
                  
                </p>
                <p>
                    <Link href="http://www.digicala.com">  <TbTruckDelivery/>  پیگیری سفارش </Link>
                   
                </p> 
            </div>
            <div className={styles.quide}>
                <span>راهنمای خرید</span>
                <p><Link href="http://www.digicala.com">روش های بازگرداندن کالا</Link></p>
                <p><Link href="http://www.digicala.com">روش های ارسال</Link></p>
                <a href="tel:09156021090">09156021090<FaPhoneFlip/></a>
            </div>
            <div className={styles.symbols}>
                <span>نماد اعتماد</span>
                <div className={styles.zarinpall}></div>
                <div className={styles.enamad}></div>
                <div className={styles.organic}></div>
            </div>
        </div>
  
  )
}

export default Footer