<template>
  <Nav />
  <Main @Data="Data" @Load="RiLoader4Fill"/>
  <div className="flex w-full lg:p-8 md:p-6 sm:p-1 my-0mx-auto justify-center items-center gap-4 flex-wrap">
    <img v-for="item in results" src={url.toString()} key={i} className="lg:w-[30%] md:w-[60%] sm:w-[80%]"/>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Main from "./components/Main.vue";
import {reactive, toRefs} from "vue";

export default{
  setup(){
    const state = reactive({
      results: [],
      load: false,
    });

    const Load = (k)=>{
      state.load = k;
    };

    const Data = (data)=>{
      state.results = data;
    }

    return {
      ...toRefs(state),
      Load,
      Data,
    }
  }
}
</script>