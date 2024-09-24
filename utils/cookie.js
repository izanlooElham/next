"use server"

import { cookies } from "next/headers"

const setCookie=async(tokens)=>{
    const accessToken=await tokens.accessToken
    const refreshToken= await tokens.refreshToken
    cookies().set('accessToken',accessToken,{httpOnly: true}, { maxAge: 30 *24 *60 *60 })
    cookies().set('refreshToken',refreshToken,{httpOnly: true}, {maxAge: 30 *24 *60 *60})
}


 export default async function getCookie(cookieName){
    const token= cookies().get(cookieName)?.value
    return token
}

export {setCookie}