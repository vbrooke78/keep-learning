import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { validateEmail } from './utils/ValidateForm';
import { validatePassword } from './utils/ValidateForm';

export const LoginPage = ({ userData, setUserData }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();

  const handleValidateEmail = (e) => {
    setUserData({ email: e.target.value });
    validateEmail(e.target.value);
  };

  const handleValidatePassword = (e) => {
    setUserData({ password: e.target.value });
    validatePassword(e.target.value);
  };

  const handleSubmit = () => {
    navigate('/loginSuccess');
  };

  return (
    <>
      <h1>Login Page</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="email" className="loginInput">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="loginInput"
          value={userData.email || ''}
          required
          onChange={handleValidateEmail}
        />
        <label htmlFor="password" className="loginInput">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="loginInput"
          value={userData.password || ''}
          required
          onChange={handleValidatePassword}
        />
        <button className="loginInput">Submit</button>
      </form>
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
