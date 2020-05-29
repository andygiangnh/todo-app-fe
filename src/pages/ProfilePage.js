import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfilePage extends Component {

    renderUserPhoto = () => (
        <div className="profile-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
            <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file"/>
            </div>
        </div>
    )

    renderUserInfo = () => {
        const { roles } = this.props.user
        return (
        <div className="profile-head">
            <h5>{this.props.user.fullName}</h5>
            <h6>
                {roles.map(role => <span key={role}>{role}&nbsp;</span>)}
            </h6>
        </div>
    )}

    renderUserDetail = () => (
        <div className="row profile-tab">
            <div className="col-md-4">
                <br/>
            </div>
            <div className="col-md-8">
                <div className="row">
                    <div className="col-md-6">
                        <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                        <p>{this.props.user.username}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label>Name</label>
                    </div>
                    <div className="col-md-6">
                        <p>{this.props.user.fullName}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label>Email</label>
                    </div>
                    <div className="col-md-6">
                        <p>{this.props.user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    render() {
        return (
            <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        {this.renderUserPhoto()}
                    </div>
                    <div className="col-md-6">
                        {this.renderUserInfo()}
                    </div>
                </div>
                {this.renderUserDetail()}
            </form>           
        </div>
        )
    }
}

const mapStateToProps = state => (
    {
        user: state.user.user
    }
  )

export default connect(mapStateToProps)(ProfilePage)