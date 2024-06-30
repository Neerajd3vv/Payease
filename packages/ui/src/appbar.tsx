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
    <div className="flex justify-between border-b px-4  py-4 ">
        <div className="text-2xl font-bold ">
            PAYEASE
        </div>
        <div>
            <Button onClick={user? onSignout : onSignin}>{user ? "Logout" : "Login" }</Button>
        </div>
    </div>
   )
}