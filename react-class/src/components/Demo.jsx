import { useRef, useState } from "react"

const Demo = () => {

    const [text, setText] = useState('')
    const inputRef = useRef(null)
    let paraRef = useRef(null)
    function print() {
        console.log(paraRef.current.innerHTMl);
        paraRef.current.innerHTMl = "Good Evening"
        
    }

  return (
      <>
          {console.log("render")}
          <h1>useRef() hook</h1>
          <p id="para" ref={paraRef}>Hello World</p>
          <button onClick={print}>Print</button>
          <input type="text" onChange={(e) => setText(e.target.value)} value={text} /> <br />
          <input type="text" ref={inputRef} />
          <button onClick={()=>console.log(text, inputRef.current.value)}>Get Input</button>  
      </>
  )
}

export default Demo