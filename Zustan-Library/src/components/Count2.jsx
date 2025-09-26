
import { useCount } from './CounterState'

function Counter2() {
    const { count1, incrementCount1 } = useCount()
    
    return (
        <>
        
            <h1>Counter 2</h1>
            <h1>Count: {count1}</h1>
            <button onClick={()=> incrementCount1()}>incrementCount1</button>
        
        </>
    )
}

export default Counter2