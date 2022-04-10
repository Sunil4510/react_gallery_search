import React from 'react'

const Img = ({src}) => {
  return (
    <div className="w-40 h-40 m-2 transition duration-150 ease-in-out hover:scale-125 cursor-pointer">
      {<img src={src} alt="hi" className="w-40 h-40 rounded-lg"/>}  
    </div>
  )
}
export default Img
