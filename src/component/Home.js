import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        return (
            <div>
                <h3>Hello {this.props.user.username}</h3>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        user: state.user.user
    }
)

export default connect(mapStateToProps)(Home)
