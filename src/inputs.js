import { useState } from "react/cjs/react.development";

function Inputs(){
    const [inputs, setInputs] = useState({
        name:'',
        nickname:''
    })
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
    }
    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChangeName}></input>
            <input nickname="nickname" placeholder="닉네임" onChange={onChangeNickname}></input>
            <button onClick={onReset}>초기화</button>
            <b>값: {inputs.name}({inputs.nickname})</b>
        </div>
    )
}
export default Inputs;