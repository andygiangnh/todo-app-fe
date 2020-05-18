import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import auth from '../auth/auth'
import { connect } from 'react-redux'
import { loginSucceeded } from '../redux/actions'

const style = {
  color: "red",
  fontSize: "1em"
}

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is blank'),
  password: Yup.string()
    .required('Password is blank')
})

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginStatus: ''
    }
  }

  loginHandler = (user, setSubmitting) => {
    setSubmitting(false)
    if(auth.isAuthenticated()) {
      this.setState({loginStatus:''})
      this.props.postLogin(user)
      this.props.history.push('/app')
    } else {
      this.setState({loginStatus:'Invalid login'})
    }
  }
  
  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
          <Formik initialValues={{ username: '', password: ''}}
            validationSchema={ validationSchema }
            onSubmit={(values, { setSubmitting }) => {
              auth.login({ username: values.username, password: values.password })
                .then((user) => {
                  this.loginHandler(user, setSubmitting)
                })
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                  <label htmlFor="username">User Name</label>
                  <input type="text" name="username" id="username" className="form-control" 
                    placeholder="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username} />
                  {errors.username && touched.username && 
                    <span style={style}>{ errors.username }</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" className="form-control" 
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password} />
                  {errors.password && touched.password &&
                    <span style={style}>{errors.password}</span>}
                </div>
                <div className="form-group">
                  {this.state.loginStatus &&
                    <span style={style}>{this.state.loginStatus}</span>}
                  <button type="submit" disabled={isSubmitting}
                      className="btn btn-primary btn-block">
                    Submit
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    postLogin: (user) => dispatch(loginSucceeded(user))
  }
)

export default connect(null, mapDispatchToProps)(LoginPage)