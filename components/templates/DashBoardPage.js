"use client"
import { getProfile } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Loader from "../module/Loader";
import { useEffect } from "react";


function DashBoardPage() {
    const {data, isLoading, isError}=useQuery({queryKey: ["profile"], queryFn: getProfile})
    const router = useRouter()
    useEffect(() => {
      if (!data) {
        // Redirect to dashboard if data is available
        router.push("/auth");
      }
    }, [data, isLoading, isError, router]);
  
    if (isLoading) return (<Loader/>)
    
      if (data) {
        return (
          <div>
             userPanel
          </div>
        );
      }
}

export default DashBoardPage