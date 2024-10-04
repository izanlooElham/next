import { CheckOtp } from "@/services/auth"
import styles from "./CheckOTP.module.css"
import { setCookie } from "@/utils/cookie"
import { useRouter } from 'next/navigation'
import { useQuery } from "@tanstack/react-query"
import { getProfile } from "@/services/user"
import { IoMdArrowDropleft } from "react-icons/io";
import Image from "next/image"
import { toast } from 'react-hot-toast';
import { MdSms } from "react-icons/md";

function CheckOTP({code, setCode, mobile, setStep}) {
    const {refetch}=useQuery({queryKey: ["profile"], queryFn: getProfile})
    const router = useRouter()
    const submitHandler=async (event)=>{
        event.preventDefault()
        if(code.length !== 5){
            toast.error("کد وارد شده صحیح نیست")
            return
        }
        const {response, error}= await CheckOtp(mobile, code)
        console.log({response, error})
        // if(response.data.data.code !== code){
        //     toast.error('کد وارد شده صحیح نیست')
        //     return
        // }
        if(response){
            setCookie(response.data.data)
            router.push("/")
            refetch()
            toast.success('به رزق و رازق خوش آمدید')
        }
        if(error) console.log(error)
    }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
        <Image src="/Logo4.svg" width={600} height={700} alt="logo" />
        <span>کد به شماره موبایل {mobile} پیامک شد</span>
        <label htmlFor="input">کد تایید را وارد کنید</label>
        <input 
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={e=> setCode(e.target.value)}
        />
        <MdSms/>
        <button type="submit" className={styles.login}>ورود</button>
        <button onClick={()=>setStep(1)} className={styles.changeMobile}>تغییر شماره موبایل <IoMdArrowDropleft/></button>
    </form>
  )
}

export default CheckOTP