import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import auth from '../auth/auth'

const Logout = (props) => {
    return (
        <>
            { props.user && 
                <a href="/" className="nav-link" onClick={() => {
                    auth.logout(() => {
                        props.history.push("/")
                    })
                }}>Logout</a>
            }

            { props.logout && <Redirect to={ { pathname: '/' } } />}
        </>
    )
}

const mapStateToProps = state => ({
    user: state.user.user,
    logout: state.user.logout
})

export default withRouter(connect(mapStateToProps)(Logout))