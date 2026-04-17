import { useRef } from "react"

export default function Tindercard({url,title,description}) {
    return(
        <div className="flex justify-center items-center p-5 w-[50%] h-[80%] bg-[rgb(231,231,231)] shadow-[0px_6px_0px_0px_rgba(0,0,0,0.5)] rounded-2xl">
            <div className="flex justify-center items-center w-[50%] h-[100%]">{url}</div>
        </div>
    )
}