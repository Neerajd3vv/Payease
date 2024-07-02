import { ChangeEvent } from "react"

interface InputboxType {
    label : string,
    placeholder: string,
    type? :string,
    onChange: (e : ChangeEvent<HTMLInputElement>) => void
}

export function Inputbox ({label, placeholder, type ,onChange}:InputboxType) {
    return (
        <div className="flex flex-col px-6">
            <label className="py-2 text-left font-afacad text-lg " htmlFor="">{label}</label>
            <input  className="min-w-80 py-4 rounded-lg px-2 bg-slate-100	" onChange={onChange} type={type} placeholder={placeholder}  />
            
        </div>
    )
}