"use client"

import  { ReactNode } from "react"

interface buttonType {
  children: ReactNode
  onClick: () => void
}

export function Button ({children, onClick}: buttonType){
  return(
    <button onClick={onClick} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-3xl text-white font-lato">{children}</button>
  )
}