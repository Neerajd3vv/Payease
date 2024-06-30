"use client"

import  { ReactNode } from "react"

interface buttonType {
  children: ReactNode
  onClick: () => void
}

export function Button ({children, onClick}: buttonType){
  return(
    <button onClick={onClick} className="bg-blue-500 px-5 py-2 rounded-3xl text-white">{children}</button>
  )
}