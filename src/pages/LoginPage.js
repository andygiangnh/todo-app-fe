import React from 'react'
import { Formik, Field } from 'formik'
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
      this.props.history.push('/home')
    } else {
      this.setState({loginStatus:'Invalid login'})
    }
  }

  renderLoginForm = () => {
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
                  <Field name="username" type="input" className="form-control" placeholder="Username" />
                  {errors.username && touched.username && 
                    <span style={style}>{ errors.username }</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field name="password" type="password" className="form-control" placeholder="Password" />
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
  
  render() {
    return (
      !this.props.user? this.renderLoginForm(this.state)
      : <h3>already login</h3>
    )
  }
}

const mapStateToProps = state => (
  {
      user: state.user.user
  }
)

const mapDispatchToProps = dispatch => (
  {
    postLogin: (user) => dispatch(loginSucceeded(user))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)