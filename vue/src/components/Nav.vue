<template>
    <nav className="flex p-8 w-full border-b-[1px] border-[#ededef] justify-between items-center" ref={navRef}>
    <div className="flex gap-5 justify-center items-center">
        <SiOpenai/>
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
</template>
<script>
    import { SiOpenai } from "oh-vue-icons/icons"; 
</script>