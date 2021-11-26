import React from 'react'

function Hello(props){
    console.log(props)
    return <div style={{
        color:props.color
    }}>h2{props.name}</div>
}

export default Hello