import { useEffect, useState } from 'react';
import Main from './components/Main'
import Nav from './components/Nav'

function App() {
  const [result, setResult] = useState<{url:String}[]>([]);
  const [load, setLoad] = useState<boolean>(false);
  useEffect(()=>{
    console.log(load);
  }, [load]);
  return (
    <>
      <Nav />
      <Main Data={setResult} Load={setLoad}/>
      <div className="flex w-full lg:p-8 md:p-6 sm:p-1 my-0mx-auto justify-center items-center gap-4 flex-wrap">
        {!load && result.map(({url}, i)=>{
          console.log(url);
          return <img src={url.toString()} key={i} className="lg:w-[30%] md:w-[60%] sm:w-[80%]"/>
        })}
      </div>
    </>
  )
}

export default App
