"use client"

import { useEffect, useState } from "react"
import GetdOTP from "../module/GetOTP"
import CheckOTP from "../module/CheckOTP"
import {  useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { getProfile } from "@/services/user"
import styles from "./AuthPage.module.css"
import { IoMdArrowDropleft } from "react-icons/io";

 function AuthPage() {
  const [step, setStep]=useState(1)
  const [mobile, setMobile]=useState("")
  const [code, setCode]=useState("")
  const {data, isLoading, isError}=useQuery({queryKey: ["profile"], queryFn: getProfile})
  const router = useRouter()
  useEffect(() => {
    if (!isLoading && !isError && data && data.data.user.Role === "USER") {
      // Redirect to dashboard if data is available
      router.push("/dashboard");
    }
    if (!isLoading && !isError && data && data.data.user.Role === "ADMIN") {
      // Redirect to dashboard if data is available
      router.push("/admin");
    }
  }, [data, isLoading, isError, router]);

  // if (isLoading) return (<Loader/>)
  
    if (isError || !data) {
      const indexHandler=()=>{
        router.push("/")
      }
      return (
        <div className={styles.container}>
          <button onClick={indexHandler} className={styles.backBtn}>صفحه اصلی<IoMdArrowDropleft/></button>
          {step === 1 && (
            <GetdOTP setStep={setStep} mobile={mobile} setMobile={setMobile} />
          )}
          {step === 2 && (
            <CheckOTP code={code} setCode={setCode} mobile={mobile} setStep={setStep} />
          )}
        </div>
      );
    }
}

export default AuthPage

