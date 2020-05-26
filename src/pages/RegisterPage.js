import React, { Component } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { register, resetSignupForm } from '../redux/actions'
import { connect } from 'react-redux'

const style = {
  color: "red",
  fontSize: "1em"
}

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is blank')
    .min(4, 'Minimum 4 characters').max('20', 'Maximum 20 characters'),
  email: Yup.string().email('Invalid email address'),
  password: Yup.string().required('Password is blank')
})

class Register extends Component {
  
  componentWillUnmount() {
    this.props.resetSignupForm()
  }

  render() {
    const { success, message } = this.props.signup
    const signupErrors = this.props.signup.errors

    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          {!success ? (
            <Formik initialValues={{
                username: '',
                email: '',
                password: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(values, {setSubmitting}) => {
                this.props.registerUser({
                  username: values.username,
                  email: values.email,
                  password: values.password,
                  role: ["user"]
                })
              }}
            >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">User name</label>
                <input type="text" id="username" name="username"
                  className="form-control"
                  placeholder="Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.username && touched.username && 
                    <span style={style}>{ errors.username }</span>}
                {signupErrors.username && touched.username &&
                    <span style={style}>{signupErrors.username}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email"
                  className="form-control"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email &&
                    <span style={style}>{errors.email}</span>}
                {signupErrors.email && touched.email &&
                    <span style={style}>{signupErrors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"
                  className="form-control"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password &&
                    <span style={style}>{errors.password}</span>}
                {signupErrors.password && touched.email &&
                    <span style={style}>{signupErrors.password}</span>}
              </div>
              <div className="form-group">
                {signupErrors && message &&
                  <span style={style}>{message}</span>}
                <button type="submit" disabled={isSubmitting && success}
                  className="btn btn-primary btn-block">
                    Submit
                </button>
              </div>
            </form>
            )}            
            </Formik>
          )
        :<span>User registration is successful!</span>}          
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  signup: state.user.signup
})

const mapDispatchToProps = (dispatch) => ({
  registerUser: async (user) => {
    dispatch(register(user))
  },
  resetSignupForm: () => {
    dispatch(resetSignupForm())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
