"use client"
import { Buttonsinginsignup } from "../components/Button"
import Link from "next/link"
import { Inputbox } from "../components/Inputbox"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Signin( ){
    const [phoneNumber , setPhoneNumber] = useState("")
    const [password , setPassword] = useState("")
    const router = useRouter()
return(
    <div className="border-2  flex justify-center h-screen items-center ">
        <div className="border-2   text-center shadow-lg rounded-2xl py-20 max-w-lg w-full ">
        <div className=" font-roboto font-semibold  pb-10 text-4xl">
        Sign in to PayEase
        </div>
        <div>
            <Inputbox onChange={(e)=>{
                setPhoneNumber(e.target.value)
            }} placeholder="999000444" type="text" label="Phone number"/>
        </div>
        <div>
            <Inputbox onChange={(e)=>{
            setPassword(e.target.value)
            }} placeholder="12345" type="password" label="Password"/>
        </div>
        
      
        <div className="pt-8 pb-2">
            <Buttonsinginsignup onClick={async ()=>{
                await signIn("credentials", {
                    phoneNumber,
                    password
                })
                router.push("/")
            }} content="Signin with credentials"/>
        </div>
        <div className=" font-afacad  flex justify-center">
            Dont have an account? <Link href="/signup"  className="pl-2 underline text-blue-700">Signup</Link>
                
        </div>
        </div>
    </div>
)
}