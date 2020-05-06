import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'

const LoginContainer = styled.div `
  width: 400px;
  display: flex;
  align: center
`

const LoginPage = (props) => {

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .matches(/^$|^((?![._-]+)(?!.*[._-]{2})[a-zA-Z0-9._-]*)[a-zA-Z0-9]+@((?![._-]+)(?!.*[._-]{2})[a-zA-Z0-9._-]*)[a-zA-Z0-9]+[.]{1}[a-zA-Z0-9._-]*[a-zA-Z0-9]+$/, 'Invalid email address')
      .required('Email is blank'),
    password: Yup.string()
      .required('Password is blank')
  })
  return (
    <>
      <Formik initialValues={{ email: '', password: ''}}
        validationSchema={ validationSchema }
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false)
            props.history.push('/app')
          }, 500)
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <LoginContainer>
            <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" placeHolder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email} />
              {errors.email && touched.email && errors.email}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" placeHolder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password} />
              {errors.password && touched.password && errors.password}
            </div>
            <div>
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

export default LoginPage