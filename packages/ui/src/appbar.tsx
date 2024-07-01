"use client"

interface Appbartype {
    user? : {
        name? : string | null
    }, 
    onSignin : any,
    onSignout : any
}

import { Button } from "./button"

export function Appbar ({user,onSignin , onSignout}:Appbartype) {
   return (
    <div className="flex justify-between border-b   py-3 ">
        <div className="text-4xl font-montserrat text-Myblue pl-6 lg:pl-36 font-bold content-center">
            PayEase
        </div>
        <div className="flex px-6 lg:pr-72" >
        <div className="">
            <Button onClick={user? onSignout : onSignin}>{user ? "Logout" : "Log in" }</Button>
        </div>
        </div>
    </div>
   )
}