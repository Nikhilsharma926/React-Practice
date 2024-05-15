import { useState } from "react"
import React from "react"


function Color({colour,fntclr,setColor}) {
 
    

  return (
    <button 
    onClick={()=> setColor(colour)}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize"
    style={{
        backgroundColor : colour,
        color:fntclr
    }}
    >{colour}</button>
  )
}

export default Color