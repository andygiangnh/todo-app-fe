import React from 'react'
import { withRouter } from 'react-router'

const style = {
    float: 'right'
}

const Logout = (props) => {
    return (
        <div>
            <a style={style} href="#" onClick={() => {
                props.history.push("/")
            }}>Logout</a>
        </div>
    )
}

export default withRouter(Logout)