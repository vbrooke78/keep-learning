import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

export const LoginForm = ({ userData, setUserData }) => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={userData}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } else if (!/^(?=.*[a-zA-Z\s])[a-zA-Z\s]{3,}$/i.test(values.name)) {
          errors.name = 'Please enter a valid name';
        }
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
        console.log(userData);
        setTimeout(() => {
          setSubmitting(false);
          navigate('/signUpSuccess');
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
        <form className="signUpForm" onSubmit={handleSubmit}>
          <label htmlFor="name" className="signUpInput">
            Your name
          </label>
          <input
            id="name"
            name="name"
            className="signUpInput"
            value={values.name || ''}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.name && touched.name && errors.name}
          <label htmlFor="email" className="signUpInput">
            Your email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="signUpInput"
            value={values.email || ''}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email && touched.email && errors.email}
          <label htmlFor="password" type="password" className="signUpInput">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="signUpInput"
            value={values.password || ''}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.password && touched.password && errors.password}
          <button className="signUpInput" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};
