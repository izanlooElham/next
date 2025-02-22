import Head from "next/head"
import Footer from "../layout/Footer"
import NavBar2 from "../layout/NavBar2"
import styles from "./RestoreProductPage.module.css"

function RestoreProductPage() {
  return (
    <div className={styles.container}>
      <Head>
          <title>بازگشت کالا</title>
          <meta content="شرایط بازگشت کالا به رزق و رازق" name="description"/>
      </Head>
        <NavBar2/>
        <div className={styles.pTags}>
        <h2>شرایط بازگشت و عودت کالا به وب سایت【رزق و رازق】</h2>
        <p>استفاده از قابلیت ضمانت بازگشت چه شرایطی دارد؟</p>
        <p>• اشکال و یا ایراد فنی باید حداکثر تا ۱ روز پس از دریافت کالا، به رزق و رازق اطلاع داده شود.</p>
        <p>• استفاده از این سرویس تنها در صورتی امکان‌پذیر است که کالا در کارتن یا جعبه اصلی خود به ما بازگردانده شود.</p>
        <p>• این سرویس اشکال‌های فنی و ظاهری (شکستگی و غیره) که در اثر استفاده نادرست کاربر از کالا ایجاد شود، را شامل نمی‌شود.</p>
        <p>• وجود مغایرت، باید حداکثر طی ۲۴ ساعت پس از دریافت کالا، به واحد خدمات پس از فروش از طریق تلفن و حتما ایمیل اطلاع داده شود.</p>
        <p>
        • عکس محصولات جهت اطلاع و کمک به خرید مشتری است و از آنجا که ممکن است در پاره ای جزییات با کالای اصلی تفاوت هایی داشته باشد به استناد آنها نمی توان اعلام مغایرت کرد. ملاک وجود مغایرت در مشخصات کالا، مشخصات فنی درج شده در وب سایت است.</p>
        <p>• امکان رسیدگی به درخواست مشتری در صورتی ممکن است که کالا از حالت اورجینال یا بسته‌بندی اصلی و اولیه خود خارج نشده باشد و مصرف نشده باشد.</p>
        <p>• رزق و رازق مسئولیتی در قبال درستی اطلاعات فراهم شده روی بسته‌بندی کالا ندارد و مسئولیت آن با شرکت تولیدکننده کالاست.</p>
        <p>• از آنجا که رزق و رازق یک وب‌سایت خرده‌فروشی آنلاین است، حق استرداد کالا طبق شرایط صرفا متعلق به مشتری یا همان مصرف‌کننده است ( سفارش یک کالا به تعداد بیش از ۳ عدد ، مغایر با هدف مصرف خریدار است و شامل حق استرداد نمی‌شود. اگر هنوز سفارش ارسال نشده باشد، باید هر چه سریع‌تر به واحد پیگیری سفارشات اطلاع داده شود.)</p>
        <p>• هزنیه بازگشت کالا به مبدا ( فروشگاه رزق و رازق ) بر عهده خریدار میباشد.</p>
        <p>با تقدیم احترام.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default RestoreProductPage