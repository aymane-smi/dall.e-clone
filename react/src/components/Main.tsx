import { FC, useState } from "react";
import {IoTimerOutline} from "react-icons/io5";
import { Blocks } from "react-loader-spinner";
const Main = ({Data, Load}:any)=>{
    const [description, setDescription] = useState<String>("");
    const [load, setLoad] = useState<boolean>(false);
    const handleSubmit = async(e: { preventDefault: () => void; })=>{
        e.preventDefault();
        setLoad(true);
        Load(true);
        let res = await fetch("https://api.openai.com/v1/images/generations", {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                "Authorization" : "Bearer "+import.meta.env.VITE_KEY,
            },
            body: JSON.stringify({
                "prompt" : description,
                "n": 10,
                "size": "512x512"
            })
        });
        let data  = await res.json();
        setLoad(false);
        Load(false);
        Data(data.data);
    };
    return (<main className="mt-3 p-8">
        {!load ? <>
        <div className="w-full">
            <IoTimerOutline size={20} className="float-right cursor-pointer hover:opacity-40" />
        </div><form className="mt-20 text-[13px] w-[70vw] ml-[20%]" onSubmit={handleSubmit}>
                <label className="text-gray-500" htmlFor="description">Start with a detailed description
                    <span className="text-black ml-1 rounded-md font-semibold p-[6px] bg-gray-200">surprise me</span>
                </label>
                <div className="w-full flex shadow-md rounded-md overflow-hidden mt-4 bg-white">
                    <input onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" className="font-thin w-full text-[20px] focus:outline-none p-2" />
                    <button className="text-gray-500 font-bold flex justify-center items-center border-l-[1px] border-[#ededef] p-2">Generate</button>
                </div>
            </form>
            </> : <div className="mx-auto my-0 w-fit">
            <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
        />
        </div>}
    </main>);
};

export default Main;