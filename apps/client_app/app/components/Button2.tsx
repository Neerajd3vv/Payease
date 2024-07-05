
interface ButtonAnotherType {
    name : string,
    className: string
}
export function Button2 ({name,className}:ButtonAnotherType){
return (
    <div>
        <button className={`${className}`}
        >{name}</button>
    </div>
)
}