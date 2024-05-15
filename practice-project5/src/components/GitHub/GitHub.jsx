import React, { useEffect, useState } from "react";

export default function GitHub(){
const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/Kakashi1000Hatake')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
    }, [])
    

    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="Git Avatar" width={300} className="item-center" />
        </div>
    )
}