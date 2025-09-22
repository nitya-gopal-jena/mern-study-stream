import { useEffect } from "react"

const UseCallbackChild = ({setNumber}) => {

    useEffect(() => {
        console.log('setNumber generated');
    }, [setNumber])



  return (
      <>
          <hr />
          <h1>usecallback Child</h1>
          <h2>Number: { setNumber()}</h2>
      
      </>
  )
}

export default UseCallbackChild