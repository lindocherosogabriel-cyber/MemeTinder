export default function ContentInDash({name,url,date, state}){
    return(
        <div className="flex flex-row">
            <img src={url} alt="nada ainda" className="w-[100px] h-[100px]" />
            <div>
                <h1>Name:{name}</h1>
                <h2>Date:{date}</h2>
                <h3>State:{state}</h3>
            </div>
        </div>
    )
}