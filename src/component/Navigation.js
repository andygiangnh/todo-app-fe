import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logout from './Logout'

class Navigation extends Component {
  render() {
    const currentUser = this.props.user
    const showAdminBoard = currentUser ? currentUser.roles.includes("ROLE_ADMIN")
      : false
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              Todo
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    Profile
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin
                  </Link>
                </li>
              )}
              
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <Logout />
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.todos.user
})

export default connect(mapStateToProps)(Navigation)