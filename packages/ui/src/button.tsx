"use client"

import  { ReactNode } from "react"

interface buttonType {
  children: ReactNode
  onClick: () => void
}

export function Button ({children, onClick}: buttonType){
  return(
    <button onClick={onClick} className=" text-black   px-8 py-2    font-montserrat  border-2 rounded-full bg-slate-200">{children}</button>
  )
}