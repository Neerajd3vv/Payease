"use client"

import { Card } from "@repo/ui/card"
import { TextInput } from "@repo/ui/textinput"
import { Button2 } from "../../components/Button2"
export default function  () {
    return (
        <div className="flex justify-center items-center   w-screen">
            <div className="w-full max-w-xl pb-64">
             <Card  title="Send Money">
             <div>
                <TextInput label="Phone number" placeholder="9999098075" onChange={()=>{}}/>
                <TextInput label="Amount" placeholder="Enter amount" onChange={()=>{}}/>
                    <div className="pt-10 w-full flex justify-center ">
                    <Button2 onClick={()=>{}} name="Send" className="border px-8 font-montserrat py-2 bg-heheblu text-white rounded-lg"/>
                    </div>
             </div>
            </Card>
            </div>
        </div>
    )
}