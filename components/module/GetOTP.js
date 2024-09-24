import { getOtp } from "@/services/auth";
import styles from "./GetOTP.module.css"
import Image from "next/image";
import toast from "react-hot-toast";
import { MdPhoneEnabled } from "react-icons/md";

function GetdOTP({mobile, setMobile, setStep}) {
  let regex_mobile_from_server = "^09[0-9]{9}$";
  let regex = new RegExp(regex_mobile_from_server);
  
  const submitHandler= async (event)=>{
    event.preventDefault()
    if(!regex.test(mobile)){
      toast.error('شماره وارد شده صحیح نیست')
      return
    }
    const {response, error} = await getOtp(mobile)
    console.log({response, error})
    if(response) setStep(2)
    if(error) console.log(error)
  }
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Image src="/Logo4.svg" width={600} height={700} alt="logo" />
      <h3> ورود | ثبت نام</h3>
      <p>سلام</p>
      <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
      <input 
      type="text" 
      id="input" 
      placeholder="شماره موبایل" 
      value={mobile} 
      onChange={e=> setMobile(e.target.value)}/>
      <MdPhoneEnabled/>
      <button type="submit">ارسال کد تایید</button>
    </form>
  )
}

export default GetdOTP