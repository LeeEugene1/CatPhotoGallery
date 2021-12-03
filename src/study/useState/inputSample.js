import { useState } from "react/cjs/react.development"

function InputSample(){
    const textState = useState('')
    const text = textState[0]
    const setText = textState[1]
    // const [text, setText] = useState('')
    const onChange = (e) =>{
        setText(e.target.value)
    }
    const onReset = (e) =>{
        setText('')
    }
    return(

        <div>
            <input onChange={onChange} value={text}></input>
            <button onClick={onReset}>초기화</button>
            <b>값:{text}</b>
        </div>
    )
}

export default InputSample