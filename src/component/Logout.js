import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import auth from '../auth/auth'

const style = {
    float: 'right'
}

const Logout = (props) => {
    return (
        <>
            { !props.logout ? 
                <div>
                    <button style={style} onClick={() => {
                        auth.logout(() => {
                            props.history.push("/")
                        })
                    }}>Logout</button>
                </div>
                : <Redirect to={ { pathname: '/' } } />
            }
        </>
    )
}

const mapStateToProps = state => ({
    logout: state.todos.logout
})

export default withRouter(connect(mapStateToProps)(Logout))