import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import { Link } from "react-router-dom";
export default function Register() {
    const navigate = useNavigate();
    async function onSubmit(event) {
     event.preventDefault();

     const formData = new FormData(event.currentTarget);
     const data = Object.fromEntries(formData.entries());

        try{
            let resp = await axios.post('http://localhost:3001/api/register-user',data,{
                headers: {
                    'Content-Type':'application/json'
                }
            });
            let dataJSON = JSON.stringify(resp.data)
            Cookies.set("LocalUser-Data",dataJSON)
            console.log("Sucess:",dataJSON)
            
           let AuthResp = await axios.post('http://localhost:3001/api/login',dataJSON,{
                headers: {
                    'Content-Type':'application/json',
                }
            });

            if(AuthResp.status == 200) {
                navigate("/dashboard")
            }

        }catch(error){
           console.error(error)
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
                    
                    <input type="text" placeholder='entry your nickname' name="nickname" className='bg-red-700 rounded-[3px] text-center justify-center' required/>
                                        
                    <label>Password</label>
                                        
                    <input type="password" placeholder='entry your password' name="password" className='bg-red-700 rounded-[3px] text-center justify-center' required />
                                        
                    <label>Email</label>
                   
                    <input type="email" placeholder='entry your email' name="email" className='bg-red-700 rounded-[3px] text-center justify-center' required/>
                    <br />
                    <br />
                    <button type="submit" className='bg-red-700 w-[70%] rounded-[2px]' >register</button>
                </form>
            </div>
            <Link to="/login" className="text-red-700 mt-5 hover:underline">Already have an account? Login here!</Link>
        </div>
    )
}