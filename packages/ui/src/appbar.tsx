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
        <div className="text-3xl font-gelasio  pl-8 lg:pl-36 font-bold content-center">
            PayEase
        </div>
        <div className="pr-5 lg:pr-32">
            <Button onClick={user? onSignout : onSignin}>{user ? "Logout" : "Log in" }</Button>
        </div>
    </div>
   )
}