import { useState } from "react"


function Counter(){
    // const numberState = useState(0)
    // const number = numberState[0]
    // const setNumber = numberState[1]
    const [number, setNumber]= useState(0)
    const onIncrease = () =>{
        // console.log('+1')
        // setNumber(number + 1)
        setNumber(prevNum => prevNum + 1)
    }
    const onDecrease = () =>{
        // console.log('-1')
        setNumber(number - 1)

    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>

        </div>
    )
}
export default Counter