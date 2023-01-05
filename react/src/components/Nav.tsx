import {SiOpenai} from "react-icons/si";
import {BsThreeDots} from "react-icons/bs";
import { useRef } from "react";
const Nav = ()=>{
    const navRef = useRef(null);
    return <nav className="flex p-8 w-full border-b-[1px] border-[#ededef] justify-between items-center" ref={navRef}>
    <div className="flex gap-5 justify-center items-center">
        <SiOpenai size={20}/>
        <p className="font-bold text-[15px]">DALL·E</p>
        <p className="text-gray-500 font-bold text-[15px]">History</p>
        <p className="text-gray-500 text-[15px] font-bold">Collections</p>
    </div>
    <div className="flex items-center gap-3">
        <BsThreeDots />
        <p className="rounded-[50%] bg-black text-white p-2 w-[25px] h-[25px] flex justify-center items-center text-[12px] font-semibold">
            A
        </p>
    </div>
</nav>
};

export default Nav;