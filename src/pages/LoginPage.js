import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import auth from '../auth/auth'

const emailRegex = /^$|^((?![._-]+)(?!.*[._-]{2})[a-zA-Z0-9._-]*)[a-zA-Z0-9]+@((?![._-]+)(?!.*[._-]{2})[a-zA-Z0-9._-]*)[a-zA-Z0-9]+[.]{1}[a-zA-Z0-9._-]*[a-zA-Z0-9]+$/

const LoginContainer = styled.div `
  width: 400px;
  display: flex;
  align: center
`
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(emailRegex, 'Invalid email address')
    .required('Email is blank'),
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

  loginHandler = (setSubmitting) => {
    setSubmitting(false)
    if(auth.isAuthenticated()) {
      this.setState({loginStatus:''})
      this.props.history.push('/app')
    } else {
      console.log('what the hell')
      this.setState({loginStatus:'Invalid login'})
    }
  }
  
  render() {
    return (
      <>
        <Formik initialValues={{ email: '', password: ''}}
          validationSchema={ validationSchema }
          onSubmit={(values, { setSubmitting }) => {
            auth.login({ username: values.email, password: values.password }, () => {
              setTimeout(() => {
                this.loginHandler(setSubmitting)
              }, 2000)
            })
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <LoginContainer>
              <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email} />
                {errors.email && touched.email && errors.email}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password} />
                {errors.password && touched.password && errors.password}
              </div>
              <div>
                {this.state.loginStatus && this.state.loginStatus}
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </form>
            </LoginContainer>
          )}
        </Formik>
      </>
    )
  }
  }
  

export default LoginPage