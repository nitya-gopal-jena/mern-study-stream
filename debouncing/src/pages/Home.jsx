import { useEffect, useState } from "react"

const Home = () => {

    const [text, setText] = useState('')
    
    useEffect(() => {
        let timeout
        if (text) {
            timeout = setTimeout(() => {
                console.log('useEffect', text);
                
            },500)
        }
        return () => {
            clearTimeout(timeout)
        }
    },[text])
  return (
      <>
      
          <h1>This is Home Component</h1>
          <h2>Debouncing</h2>

          <input type="text" onChange={(e)=> setText(e.target.value)} value={text} />
          
      
      </>
  )
}

export default Home