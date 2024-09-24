import styles from "./AboutUsPage.module.css"
import Image from "next/image"
import { TbPointFilled } from "react-icons/tb";
import Link from "next/link";


function AboutUs() {
  return (
    <div className={styles.container}>
        <Image src="/organicStore.jpg" width={2500} height={2600}/>
        <div className={styles.head}>
             <span> رزق و رازق , </span><p>با هدف ترویج سبک زندگی سالم , در خدمت مردم </p>
        </div>
        <div className={styles.whyOrganic}>
            <p>
                چرا ارگانیک؟   ....
                ارگانیک یعنی رشد غذای ما، یعنی تغذیه ما، بدون کمک‌های شیمیایی در طول فرآیند رشد مانند کودها، آفت‌کش‌ها، قارچ‌کش‌ها، علف‌کش‌ها، لارب‌کش‌ها و غیره و در حین پردازش مانند رنگ‌ها، شیرین‌کننده‌ها، مواد نگهدارنده، رنگ‌کننده، تثبیت‌کننده‌ها، امولسیفایرها.
            </p>
        </div>
        <div className={styles.whyRezqorazeq}>
            <p>چرا رزق و رازق؟</p>
        </div>
        <div className={styles.Rezqorazeq}>
            <p>
     فروشگاه رزق و رازق فعالیت خود را از سال 1395 اغاز کرده و طی سالها تلاش به تیمی مهربان و متعهد تبدیل شده , هر یک از اعضای این تیم با دانش و مهارت خود گامی در جهت ایجاد یک زندگی سالم و پایدار برای شما بر میدارند , اینجا ما با عشق و دقت فراوان , بهترین محصولات ارگانیک و تازه را برای شما گرد آوری کرده ایم . با ورود به فروشگاه رزق و رازق به دنیایی از طبیعت گام خواهید گذاشت . عطر محصولات تازه و طبیعی همراه با لبخند همکارانی که با تمام وجود به کارشان عشق می ورزند شما را در آغوش خواهند گرفت ما منتخبی از کشاورزان دستچین شده داریم که شخصاً از آنها بازدید کرده ایم.
            </p>
            <Link href="signup">signup</Link>
        </div>
        <div className={styles.addres}>
            <p>آدرس : خراسان شمالی , بجنورد , بلوار استقلال , چهار راه نگارستان (ارتش)</p>
        </div>
        <div className={styles.titles}>
            <p>رزق و رازق عرضه کننده طیف وسعی از محصولات شامل :</p>
            <span><TbPointFilled/> محصولات کندو (بره موم , ژل رویال , عسل طبیعی)</span>
            <span><TbPointFilled/> روغن های خوراکی(روغن های گیاهی و حیوانی )</span>
            <span><TbPointFilled/> عرقیات سنتی</span>
            <span><TbPointFilled/> چای و دمنوش</span>
            <span><TbPointFilled/> زرشک و زعفران</span>
            <span><TbPointFilled/> شوینده های سالم</span>
            <span><TbPointFilled/> غلات ارگانیک</span>
            <span><TbPointFilled/>  محصولات آرایشی و بهداشتی گیاهی </span>
            <span><TbPointFilled/> عطر های طبیعی</span>
            <span><TbPointFilled/> سویق ها</span>
            <span><TbPointFilled/> انواع لباس با الیاف طبیعی</span>
            <span><TbPointFilled/> مرباهای متنوع</span>
            <span><TbPointFilled/> حبوبات</span>
            <span><TbPointFilled/> سرکه ها(سرکه سیب, سرکه انگو , سرکه انگبین )</span>
            <span><TbPointFilled/>رب و چاشنی و مزه</span>
            <span><TbPointFilled/> خشکبار</span>
            <span><TbPointFilled/> محصولات صبحانه(شیره ها,ارده و حلوا ارده ,کره حیوانی)</span>
        </div>
            

    </div>
  )
}

export default AboutUs