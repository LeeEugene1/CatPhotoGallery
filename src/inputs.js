import { useState, useRef } from "react";

function Inputs(){
    const [inputs, setInputs] = useState({
        name:'',
        nickname:''
    })
    const nameInput = useRef()//DOM을 조작하기 위한 객체
    const onChangeName = (e) =>{
        console.log(e.target.value)
        //기존객체복사
        const nextInputs = {
            ...inputs,
            name: e.target.value
        }
        //바꿀애만 덮어씌우기
        // nextInputs.name = e.target.value
        // console.log(nextInputs)
        setInputs(nextInputs)
    }
    const onChangeNickname = (e) =>{
        const nextInputs = {
            ...inputs,
            nickname: e.target.value
        }
        setInputs(nextInputs)
    }
    const onReset = (e) =>{
        setInputs({
            name:'',
            nickname:''
        })
        nameInput.current.focus()
    }
    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChangeName} value={inputs.name} ref={nameInput}></input>
            <input nickname="nickname" placeholder="닉네임" onChange={onChangeNickname} value={inputs.nickname}></input>
            <button onClick={onReset}>초기화</button>
            <b>값: {inputs.name}({inputs.nickname})</b>
        </div>
    )
}
export default Inputs;