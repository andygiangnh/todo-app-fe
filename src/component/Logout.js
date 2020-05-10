import React from 'react'
import { withRouter } from 'react-router'
import auth from '../auth/auth'

const style = {
    float: 'right'
}

const Logout = (props) => {
    return (
        <div>
            <button style={style} onClick={() => {
                auth.logout(() => {
                    props.history.push("/")
                })
            }}>Logout</button>
        </div>
    )
}

export default withRouter(Logout)