<template>
    <main className="mt-3 p-8">
        <div v-if="!load">
            <div className="w-full">
                <IoTimerOutline size={20} className="float-right cursor-pointer hover:opacity-40" />
            </div>
            <form className="mt-20 text-[13px] w-[70vw] ml-[20%]" @submit={handleSubmit}>
                <label className="text-gray-500" htmlFor="description">Start with a detailed description
                    <span className="text-black ml-1 rounded-md font-semibold p-[6px] bg-gray-200">surprise me</span>
                </label>
                <div className="w-full flex shadow-md rounded-md overflow-hidden mt-4 bg-white">
                    <input v-model="description" @change="handleChange"  type="text" name="description" id="description" className="font-thin w-full text-[20px] focus:outline-none p-2" />
                    <button className="text-gray-500 font-bold flex justify-center items-center border-l-[1px] border-[#ededef] p-2">Generate</button>
                </div>
            </form>
        </div>
    </main>
</template>
<script>
    import { reactive, toRefs } from 'vue';
    export default {
        setup(props, {emit}){
            const state = reactive({
                description: "",
                load: false,
            });
            const handleChange = (e)=>{
                state.description = e.target.value;
            };
            const handleSubmit = async(e)=>{
                e.preventDefault();
                state.load(true);
                emit("Load", true);
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
                state.load = false;
                emit("Load", false);
                emit("Data", data.data);
            };
            return {
                ...toRefs(state),
                handleChange,
            }
        }
    };
</script>