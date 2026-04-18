import { useState } from "react"
import axios from 'axios';
import ContentInDash from "./ContentInDash";
export default function ContentPainel({ url,exitFunc }) {
    const [content, setContent] = useState([]);
    const [urlName,setUrl] = useState("");
    async function onSubmit(e) {
        try {
            e.preventDefault();
            let HOST = import.meta.env.VITE_HOST;
            const formData = new FormData(e.currentTarget);
            const urlString = String(url)
            console.log(urlString)
            formData.append("midia",urlString);
            formData.append("gostei",0);
            const data = Object.fromEntries(formData.entries());
            
            if(!HOST) {
                console.error("HOST environment variable is not set");
                return;
            }

            let resp = await axios.post(`${HOST}/api/meme`,data,{
                headers:{
                    'Content-Type':'application/json'
                }
            });

            console.log("Sucesso ao Postar o meme!");
            console.log(data)
            exitFunc();
            // Lembre-se: tags <img> não enviam dados via FormData. 
            // Se precisar enviar a URL, use um <input type="hidden" name="url" value={url} />
        } catch (error) {
            console.error("Erro ao tentar enviar o meme ao Banco de Dados!", error.message);
        }
    }

    return (
        <div className="fixed inset-0 w-full h-screen flex justify-center items-center bg-black/50">
            {/* Aumentei um pouco a largura para o textarea não ficar apertado */}
            <div className="flex flex-col w-[90%] md:w-[40%] lg:w-[30%] bg-white rounded-2xl p-6 shadow-xl">
                {content.map((meme) => (
                    <ContentInDash
                        key={meme.id}
                        name={}
                    />
                ))}
                <form onSubmit={onSubmit} className="flex flex-col w-full gap-2">
                    
                    <label className="font-semibold">Título</label>
                    <input 
                        name="titulo" 
                        type="text" 
                        className="w-full border-2 border-red-300 rounded-xl p-2 outline-none focus:border-red-500" 
                        maxLength={80}
                        required
                    />

                    <label className="font-semibold mt-2">Prévia</label>
                    <img 
                        src={url} 
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