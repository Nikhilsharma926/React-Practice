import { useState } from "react"
import Color from "./components/colors"

function App() {
  const [color, setColor] = useState()

  return (
    <div className="w-full h-screen duration-1000 transition ease-in-out "
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <Color colour="black" fntclr="white" setColor={setColor}/>
          <Color colour="blue" fntclr="white" setColor={setColor}/>
          <Color colour="red" fntclr="white" setColor={setColor}/>
          <Color colour="green" fntclr="white" setColor={setColor}/>
          <Color colour="grey" fntclr="white" setColor={setColor}/>
          <Color colour="yellow" fntclr="black" setColor={setColor}/>
          <Color colour="pink" fntclr="black" setColor={setColor}/>
          <Color colour="purple" fntclr="white" setColor={setColor}/>
          <Color colour="lavender" fntclr="black" setColor={setColor}/>
          <Color colour="white" fntclr="black" setColor={setColor}/>
          <Color colour="olive" fntclr="white" setColor={setColor}/>
        </div>
      </div>
    </div>
  )
}

export default App
