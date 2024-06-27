"use client"

import { useState } from "react"
import axios from "axios"
export default function textCompo  (){
  const [email , setEmail] = useState("")
  const [name , setName] = useState("")
return (
  <div>
    <input onChange={(e) => {
      setEmail(e.target.value)
    }} type="text" placeholder="email" />
    <input onChange={(e) => {
      setName(e.target.value)
    }} type="text" placeholder="name" />
    <button onClick={() => {
      axios.post("http://localhost:3000/api" , {
        email ,
        name
      })
    }} className="bg-blue-400 p-1 rounded-2xl">add user</button>
  </div>
)
}