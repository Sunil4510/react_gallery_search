import React, { useEffect, useState } from 'react'
import axios from "axios"
import Img from './Img'
import {Skelt} from "./Skelt"
import Skeleton from '@mui/material/Skeleton';

const Imglist = () => {
  const [data,setData] = useState(null)
  const [search,setSearch] = useState("")
  const [loading,setloading] = useState(false);

  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
    useEffect(()=>{
    setloading(false);
      setTimeout(()=>{
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=de7bc3a768726ccd6de3e471431562bf&tags=${search?search:makeid(3)}&format=json&nojsoncallback=1`)
      .then((res)=>setData(res))
      console.log(data)
      setloading(true);
    },2000)
  },[search])
  return (
    <>
    <div>
      <h1 className="text-3xl sm:text-xl font-bold uppercase text-violet-500 font-Acme">React Gallery Search</h1>
    </div>
    <div className="mt-14 ">
        <input type="text" className="rounded-lg mr-2 outline-none p-2 w-96 sm:w-60 sm:mx-2 shadow-2xl border-gray-200" placeholder="Search here..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </div>
    <div className="flex items-center justify-center flex-wrap mt-10">
    {loading && data?
      (
        data.data.photos.photo.map((pic)=>{
        let srcpath = `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`
        return(
        <Img src={srcpath} key={pic.id}/>
        )
      }
      )):(
        <>
          <div className="flex items-center flex-wrap justify-center">
            {Skelt.map((cu)=><Skeleton variant="rectangular" width={160} height={140} className="m-2 rounded" key={cu.id}/>)}
          </div>
        </>)
    }
    </div>
    </>
  )
}

export default Imglist