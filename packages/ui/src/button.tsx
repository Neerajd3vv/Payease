"use client"

import  { ReactNode } from "react"

interface buttonType {
  children: ReactNode
  onClick: () => void
}

export function Button ({children, onClick}: buttonType){
  return(
    <button onClick={onClick} className=" text-white bg-black    px-8 py-2    font-montserrat  border-2 rounded-lg ">{children}</button>
  )
}