import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import auth from '../auth/auth'

const Logout = (props) => {
    return (
        <>
            { !props.logout ? 
                <div>
                    <a href="/" className="nav-link" onClick={() => {
                        auth.logout(() => {
                            props.history.push("/")
                        })
                    }}>Logout</a>
                </div>
                : <Redirect to={ { pathname: '/' } } />
            }
        </>
    )
}

const mapStateToProps = state => ({
    logout: state.user.logout
})

export default withRouter(connect(mapStateToProps)(Logout))