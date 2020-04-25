import React from 'react'

const divStyle = {
    textAlign: 'center'
}

export default function LoginPage(props) {
    return (
        <div className="center" style={ divStyle }>
            <a href="#" onClick={() => {
                props.history.push("/app")
            }}>Todo App</a>
        </div>
    )
}
