"use client"
import { ImSearch } from "react-icons/im";
import styles from "./SearchBox.module.css"
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function SearchBox() {
  useEffect(() => {
    const token = Cookies.get('accessToken');
    if (token) {
      console.log('Token:', token);
    } else {
      console.log('No token found');
    }
  }, []);
  const searchParams=useSearchParams()
  const pathName=usePathname()
  const {replace}=useRouter()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  const handleSearch=(term)=>{
    const params=new URLSearchParams(searchParams)
   

   // حذف فاصله‌ها از ورودی
   const trimmedTerm = term.trim();

   if (trimmedTerm) {
     // اگر ورودی خالی نباشد، آن را به پارامترها اضافه کنید
     params.set('search', trimmedTerm);
   } else {
     // اگر ورودی فقط شامل فاصله‌ها بود، پارامتر جستجو را حذف کنید
     params.delete('search');
   }
    replace(`${pathName}?${params.toString()}`)
    setSearchTerm(trimmedTerm); // به روزرسانی وضعیت جستجو
}


  return (
  <>
    <div className={styles.search_box}>
    <input type="text" placeholder="محصول مورد نظر خود را بنا به دسته بندی انخاب شده بیابید..." defaultValue={searchParams.get('search')?.toString()} onChange={e=>handleSearch(e.target.value)}/>
    <button>
        <span className={styles.material_symbols_outlined}>
           <ImSearch/>
            </span>
    </button>
</div>
  </>
  )
}

export default SearchBox