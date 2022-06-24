import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { Formik } from 'formik';

export const LoginPage = ({ userData, setUserData }) => {
  const [showSignUp, setShowSignUp] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <h1>Login Page</h1>
      <p>(I used Formik to validate the form fields)</p>
      <Formik
        initialValues={userData}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,}$/.test(
              values.password
            )
          ) {
            errors.password =
              'Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setUserData(values);
          setTimeout(() => {
            setSubmitting(false);
            navigate('/loginSuccess');
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="email" className="loginInput">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="loginInput"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <label htmlFor="password" className="loginInput">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="loginInput"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button
              className="loginInput"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
      <div className="signUpButton">
        <button
          className="signUpInput"
          onClick={() => setShowSignUp(!showSignUp)}
        >
          Sign Up?
        </button>
        {showSignUp ? (
          <LoginForm userData={userData} setUserData={setUserData} />
        ) : null}
      </div>
    </>
  );
};
