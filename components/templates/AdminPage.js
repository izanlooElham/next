"use client"
import { getProfile } from '@/services/user';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import  { useEffect } from 'react'
import Loader from '../module/Loader';
import DashBoard from '@/app/dashboard/page';

function AdminPage() {
    const {data, isLoading, isError}=useQuery({queryKey: ["profile"], queryFn: getProfile})
    const router = useRouter()
    useEffect(() => {
      if (!data) {
        // Redirect to dashboard if data is available
        router.push("/auth");
      }
    }, [data, isLoading, isError, router]);
  
    if (isLoading) return (<Loader/>)
    
      if (data && data.data.user.Role === "ADMIN") {
        return (
          <div>
          admin page
          </div>
        );
      }else{
        return <DashBoard/>
      }
}

export default AdminPage