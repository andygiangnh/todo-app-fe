import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import auth from '../auth/auth'

const LoginContainer = styled.div `
  width: 400px;
  display: flex;
  align: center
`
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

  loginHandler = (setSubmitting) => {
    setSubmitting(false)
    if(auth.isAuthenticated()) {
      this.setState({loginStatus:''})
      this.props.history.push('/app')
    } else {
      this.setState({loginStatus:'Invalid login'})
    }
  }
  
  render() {
    return (
      <>
        <Formik initialValues={{ username: '', password: ''}}
          validationSchema={ validationSchema }
          onSubmit={(values, { setSubmitting }) => {
            auth.login({ username: values.username, password: values.password })
              .then(() => {
                this.loginHandler(setSubmitting)
              })
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <LoginContainer>
              <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">User Name</label>
                <input type="text" name="username" id="username" placeholder="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username} />
                {errors.username && touched.username && errors.username}
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