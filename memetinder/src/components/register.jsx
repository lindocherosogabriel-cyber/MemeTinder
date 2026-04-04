import axios from "axios";
export default function Register() {
    async function onSubmit(event) {
     event.preventDefault();

     const formData = new FormData(event.currentTarget);
     const data = Object.fromEntries(formData.entries());

        try{
            let resp = await axios.post('http://localhost:3001/api/register-user',data,{
                headers: {
                    'Content-Type':'application/json'
                }
            })
            console.log("Sucess:",resp.data)
        }catch(error){
            console.error("Erro ao tentar mandar um post a requisição!")
        }


    }



    return(
        <div className='flex flex-col justify-center items-center w-full h-screen'>
             <header className='flex justify-center items-center text-center w-full h-[20%] absolute top-[0%] shadow-[0px_7px_0px_0px_rgba(86,0,0,0.9)] bg-red-500'>
                    <h1 className='text-[50px] text-red-800 font-extrabold'>Welcome to the tinder meme!</h1>
            </header>   
            <div className='flex flex-col justify-center items-center text-center w-[40%] h-[50%] shadow-[0px_7px_0px_0px_rgba(86,0,0,0.9)] bg-red-500 rounded-2xl'>
                <form className='flex flex-col w-full h-full justify-center items-center text-white' onSubmit={onSubmit}>
                    <label>Nickname</label>
                    
                    <input type="text" placeholder='entry your nickname' name="nickname" className='bg-red-700 rounded-[3px] text-center justify-center'/>
                                        
                    <label>Password</label>
                                        
                    <input type="password" placeholder='entry your password' name="password" className='bg-red-700 rounded-[3px] text-center justify-center' />
                                        
                    <label >Email</label>
                   
                    <input type="email" placeholder='entry your email' name="email" className='bg-red-700 rounded-[3px] text-center justify-center'/>
                    <br />
                    <br />
                    <button type="submit" className='bg-red-700 w-[70%] rounded-[2px]' >register</button>
                </form>
            </div>
        </div>
    )
}