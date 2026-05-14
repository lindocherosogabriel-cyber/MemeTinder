import { useState } from "react"
import axios from 'axios';
import ContentInDash from "./ContentInDash";
import getVariable from "../modules/ENV";
export default function ContentPainel({ exitFunc }) {
    const [content, setContent] = useState([]);
    const [urlName,setUrl] = useState(null);
    const HOST = getVariable("VITE_HOST")
    async function onchange(e) {
        e.preventDefault();

        const file = e.target.files[0];

        if(!file) {
            console.error("ERRO:ao enviar o arquivo");
            return;
        }
        const previewURL = URL.createObjectURL(file);
        setUrl(previewURL);
    }


    async function onSubmit(e) {
        try {
            e.preventDefault();
            let HOST = import.meta.env.VITE_HOST;
            const formData = new FormData(e.currentTarget);
            formData.append("gostei",0);
            const data = Object.fromEntries(formData.entries());
            if(!HOST) {
                console.error("HOST environment variable is not set");
                return;
            }
            
            let memeResp = await axios.post(`${HOST}/api/meme`,data,{
                headers:{
                    'Content-Type': 'application/json',
                }
            });
            console.log(midiaResp.data);
            exitFunc(false);
        } catch (error) {
            console.error("Erro ao tentar enviar o meme ao Banco de Dados!", error.message);
        }
    }

    return (
        <div className="fixed inset-0 w-full h-screen flex justify-center items-center bg-black/50">
            {/* Aumentei um pouco a largura para o textarea não ficar apertado */}
            <div className="flex flex-col w-[90%] md:w-[40%] lg:w-[30%] bg-white rounded-2xl p-6 shadow-xl">
               
                <form onSubmit={onSubmit} className="flex flex-col w-full gap-2">
                    
                    <label className="font-semibold">Título</label>
                    <input 
                        name="titulo" 
                        type="text" 
                        className="w-full border-2 border-red-300 rounded-xl p-2 outline-none focus:border-red-500" 
                        maxLength={80}
                        required
                    />
                    <input type="file" name="midia" className="flex items-center justify-center text-center text-white p-4 rounded-2xl font-bold bg-red-500" onChange={onchange} accept="image/*"/>
                    <label className="font-semibold mt-2">Prévia</label>
                    <img 
                        src={urlName}
                        alt="Preview" 
                        className="w-full h-48 max-h-[300px] object-scale-down rounded-2xl border border-gray-200" 
                    />

                    <label className="font-semibold mt-2">Descrição</label>
                    <textarea 
                        name="description" 
                        className="w-full border-2 border-red-300 rounded-xl p-3 outline-none resize-none focus:border-red-500" 
                        maxLength={200} 
                        rows={7} // Definido para 7 linhas
                        required
                    ></textarea>

                    <button 
                        className="mt-4 bg-red-400 hover:bg-red-500 text-white text-xl py-2 rounded-xl font-bold transition-colors" 
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}